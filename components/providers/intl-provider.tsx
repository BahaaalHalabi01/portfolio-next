"use client";
/* eslint-disable react/no-unstable-nested-components -- needed for next-intl*/
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
        theo: (chunk) => (
          <a
            className="text-primary text-2xl"
            href="https://t3.gg/"
            target="_blank"
            rel="noreferrer"
          >
            {chunk}
          </a>
        ),
        prime: (chunk) => (
          <a
            className="text-primary text-2xl"
            href="https://www.twitch.tv/theprimeagen"
            target="_blank"
            rel="noreferrer"
          >
            {chunk}
          </a>
        ),
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...rest}
    />
  );
}
