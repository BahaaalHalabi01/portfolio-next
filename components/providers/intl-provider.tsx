"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

export function IntlProvider({
  locale,
  timeZone,
  now,
  ...rest
}: Parameters<typeof NextIntlClientProvider>[0]) {
  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...rest}
    />
  );
}
