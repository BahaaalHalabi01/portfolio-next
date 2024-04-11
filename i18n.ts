import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import { getDefaultTranslationValues } from "./components/providers/intl-provider";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  async function getMessage(l: string) {
    if (l === "ru") return await import("./messages/ru.json");
    if (l === "en") return await import("./messages/en.json");
    return await import(`./messages/${locale}.json`);
  }

  return {
    messages: (await getMessage(locale)).default,
    defaultTranslationValues: getDefaultTranslationValues(),
  };
});
