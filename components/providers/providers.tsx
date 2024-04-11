import type { PropsWithChildren, ReactNode } from "react";
import { useMessages, useTimeZone } from "next-intl";
import { IntlProvider } from "./intl-provider";

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>): ReactNode {
  const messages = useMessages();
  const timeZone = useTimeZone();
  return (
    <IntlProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </IntlProvider>
  );
}
