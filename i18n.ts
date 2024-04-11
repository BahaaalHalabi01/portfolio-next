import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  async function getMessage(l: string) {
    if (l === "ru") return await import("./messages/ru.json");
    if (l === "en") return await import("./messages/en.json");
    return await import(`./messages/${locale}.json`);
  }

  return {
    messages: (await getMessage(locale)).default,
  };
});
