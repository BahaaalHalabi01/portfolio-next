import { format, createLogger, transports } from "winston";

const { combine, timestamp, json, errors } = format;

const errorFilter = format((info, _) => {
  return info.level === "error" ? info : false;
});

const infoFilter = format((info, _) => {
  return info.level === "info" ? info : false;
});

const logger = createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format: combine(timestamp(), json()),
  transports: [
    new transports.File({
      filename: "combined.log",
    }),
    new transports.File({
      filename: "app-error.log",
      level: "error",
      format: combine(
        errorFilter(),
        errors({ stack: true }),
        timestamp(),
        json(),
      ),
    }),
    new transports.File({
      filename: "app-info.log",
      level: "info",
      format: combine(
        infoFilter(),
        errors({ stack: true }),
        timestamp(),
        json(),
      ),
    }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: "exception.log" }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: "rejections.log" }),
  ],
});
