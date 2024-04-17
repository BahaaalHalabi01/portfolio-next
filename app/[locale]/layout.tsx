import { Noto_Serif as notoSerif } from "next/font/google";
import { BugPlay } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { locales } from "@/config";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@Ui/select";
import { Providers } from "@/components/providers/providers";
import { BugAnimation } from "@/components/common/bug-animation";
import { Social } from "@/components/common/social";

const noto = notoSerif({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}): ReactNode {
  setRequestLocale(locale);
  const t = useTranslations("Home");

  const headers = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <html lang={locale}>
      <body className={noto.className}>
        <header className="sticky top-0 z-20 border-b border-secondary text-lg bg-background">
          <nav className="lg:flex items-center justify-between lg:h-16 font-bold capitalize lg:py-0 py-2 lg:px-40 px-16 relative">
            <div className="flex items-center md:gap-x-8 justify-between flex-wrap">
              <span className="flex gap-x-2 lg:gap-x-6">
                <a className="inline-flex gap-x-2 items-center" href="/">
                  <BugPlay />
                  {t("name")}
                </a>
                <Select>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="EN" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="RU">RU</SelectItem>
                      <SelectItem value="EN">EN</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <a
                className="border-green-600 border-2 p-2 inline-block lg:hidden float-right"
                href="/Bahaa_al_Halabi.pdf"
                download="Bahaa_al_Halabi.pdf"
              >
                {t("nav.resume")}
              </a>
            </div>

            <div className="flex flex-row lg:gap-x-12 items-center lg:py-0 py-2  justify-between lg:w-fit w-full text-muted-foreground">
              {headers.map((h) => (
                <Link
                  key={h.label}
                  href={h.href}
                  className="hover:underline hover:text-secondary-foreground"
                >
                  {h.label}
                </Link>
              ))}

              <Link
                className="border-green-600 border-2 py-1 px-3 hidden lg:block hover:underline hover:text-secondary-foreground rounded-md"
                href="/Bahaa_al_Halabi.pdf"
                download="Bahaa_al_Halabi.pdf"
              >
                {t("nav.resume")}
              </Link>
            </div>

            <BugAnimation />
          </nav>
        </header>
        <Providers locale={locale}>{children}</Providers>
        <div className="lg:fixed lg:flex hidden top-full -translate-y-full 2xl:left-[6%] left-[4%] flex-col gap-y-8 justify-between w-full pb-24 max-w-fit">
          <Social />
        </div>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/pixel-rain-abstract-background_6148360.htm#page=2&query=programming%20background&position=47&from_view=keyword&track=ais&uuid=63155865-b613-4392-a591-eaa3a13886a1">
          Freepik
        </a>
      </body>
    </html>
  );
}

export function generateStaticParams(): { locale: string }[] {
  return locales.map((locale) => ({ locale }));
}
