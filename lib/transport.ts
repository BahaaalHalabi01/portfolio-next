import * as Sentry from "@sentry/nextjs";
import Transport from "winston-transport";
import { LEVEL } from "triple-beam";

enum SentrySeverity {
  Debug = "debug",
  Log = "log",
  Info = "info",
  Warning = "warning",
  Error = "error",
  Fatal = "fatal",
}

const DEFAULT_LEVELS_MAP: SeverityOptions = {
  silly: SentrySeverity.Debug,
  verbose: SentrySeverity.Debug,
  info: SentrySeverity.Info,
  debug: SentrySeverity.Debug,
  warn: SentrySeverity.Warning,
  error: SentrySeverity.Error,
};

export interface SentryTransportOptions
  extends Transport.TransportStreamOptions {
  sentry?: Sentry.NodeOptions;
  levelsMap?: SeverityOptions;
  skipSentryInit?: boolean;
}

export type Info = {
  message: string;
  meta: Sentry.Scope["_extra"];
  tags?: Sentry.Scope["_tags"];
  user?: Sentry.User;
} & Record<typeof LEVEL, Sentry.SeverityLevel> &
  Error;

type SeverityOptions = Record<string, Sentry.SeverityLevel>;

class ExtendedError extends Error {
  constructor(info: Error) {
    super(info.message);

    this.name = info.name || "Error";
    if (info.stack && typeof info.stack === "string") {
      this.stack = info.stack;
    }
  }
}

export default class SentryTransport extends Transport {
  public silent = false;

  private levelsMap: SeverityOptions = {};

  public constructor(opts?: SentryTransportOptions) {
    super(opts);

    this.levelsMap = this.setLevelsMap(opts?.levelsMap);
    this.silent = opts?.silent ?? false;

    if (!opts?.skipSentryInit) {
      Sentry.init(SentryTransport.withDefaults(opts?.sentry ?? {}));
    }
  }

  public log(info: Info, callback: () => void): void {
    setImmediate(() => {
      this.emit("logged", info);
    });

    if (this.silent) {
      callback();
      return;
    }

    const { message, tags, user, ...meta } = info;

    const winstonLevel = info[LEVEL];
    const sentryLevel = this.levelsMap[winstonLevel];

    Sentry.configureScope((scope) => {
      scope.clear();

      if (tags !== undefined && SentryTransport.isObject(tags)) {
        scope.setTags(tags);
      }

      scope.setExtras(meta);

      if (user !== undefined && SentryTransport.isObject(user)) {
        scope.setUser(user);
      }

      // TODO: add fingerprints
      // scope.setFingerprint(['{{ default }}', path]); // fingerprint should be an array
      // scope.clear();
    });

    // TODO: add breadcrumbs
    // Sentry.addBreadcrumb({
    //   message: 'My Breadcrumb',
    //   // ...
    // });

    // Capturing Errors / Exceptions
    if (SentryTransport.shouldLogException(sentryLevel)) {
      const error =
        Object.values(info).find((value) => value instanceof Error) ??
        new ExtendedError(info);
      Sentry.captureException(error, { tags });

      callback();
      return;
    }

    // Capturing Messages
    Sentry.captureMessage(message, sentryLevel);
    callback();
  }

  end(cb?: () => void): this {
    void Sentry.flush().then(() => {
      super.end(cb);
    });
    return this;
  }

  public get sentry(): typeof Sentry {
    return Sentry;
  }

  private setLevelsMap = (options?: SeverityOptions): SeverityOptions => {
    if (!options) {
      return DEFAULT_LEVELS_MAP;
    }

    const customLevelsMap = Object.keys(options).reduce<SeverityOptions>(
      (acc: { [key: string]: any }, winstonSeverity: string) => {
        acc[winstonSeverity] = options[winstonSeverity];
        return acc;
      },
      {},
    );

    return {
      ...DEFAULT_LEVELS_MAP,
      ...customLevelsMap,
    };
  };

  private static withDefaults(
    options?: Sentry.NodeOptions,
  ): Sentry.NodeOptions {
    return {
      ...options,
      dsn: options?.dsn ?? process.env.SENTRY_DSN ?? "",
      serverName: options?.serverName ?? "winston-transport-sentry-node",
      environment:
        options?.environment ??
        process.env.SENTRY_ENVIRONMENT ??
        process.env.NODE_ENV,
      debug: options?.debug ?? Boolean(process.env.SENTRY_DEBUG),
      sampleRate: options?.sampleRate ?? 1.0,
      maxBreadcrumbs: options?.maxBreadcrumbs ?? 100,
    };
  }

  // private normalizeMessage(msg: any) {
  //   return msg && msg.message ? msg.message : msg;
  // }

  private static isObject(obj: unknown): boolean {
    const type = typeof obj;
    return type === "function" || (type === "object" && Boolean(obj));
  }

  private static shouldLogException(level: Sentry.SeverityLevel): boolean {
    return level === SentrySeverity.Fatal || level === SentrySeverity.Error;
  }
}
