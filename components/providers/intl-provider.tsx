"use client";
import { getDefaultTranslationValues } from "@/lib/rich-translations";
import { NextIntlClientProvider } from "next-intl";
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


