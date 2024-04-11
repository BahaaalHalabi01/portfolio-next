"use client";
import { NextIntlClientProvider, type RichTranslationValues } from "next-intl";
import React, { type ReactNode } from "react";

export function IntlProvider({
  locale,
  timeZone,
  now,
  ...rest
}: Parameters<typeof NextIntlClientProvider>[0]):ReactNode {
  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      defaultTranslationValues={getDefaultTranslationValues()}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...rest}
    />
  );
}

export function getDefaultTranslationValues(): RichTranslationValues {
  return {
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
    strong: (chunks) => <strong>{chunks}</strong>,
  } as RichTranslationValues;
}
