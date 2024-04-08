import { FC, PropsWithChildren } from "react";
import { IntlProvider } from "./intl-provider";
import { useMessages, useTimeZone } from "next-intl";

export const Providers: FC<PropsWithChildren<{ locale: string }>> = async ({
  children,
  locale,
}) => {
  const messages = useMessages();
  const timeZone = useTimeZone();
  return (
    <>
      <IntlProvider locale={locale} messages={messages} timeZone={timeZone}>
        {" "}
        {children}
      </IntlProvider>
    </>
  );
};
