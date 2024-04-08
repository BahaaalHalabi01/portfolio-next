import { BugPlay } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("Header");

  const headers = [
    { href: "#about", label: t("about") },
    { href: "#experience", label: t("experience") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <html lang={locale}>
      <body>
        <header className=" sticky top-0 z-20 border-b border-secondary ">
          <nav className="lg:flex items-center justify-between lg:h-16 font-bold text-lg capitalize lg:py-0 py-2 px-24">
            <div className="flex items-center md:gap-x-8 justify-between flex-wrap">
              <span className="flex gap-x-2 lg:gap-x-6">
                <a className="inline-flex gap-x-2 items-center" href="/">
                  <BugPlay />
                  {t("name")}
                </a>
                <Select>
                  <SelectTrigger className="max-w-fit">
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
                download={"Bahaa_al_Halabi.pdf"}
              >
                {t("resume")}
              </a>
            </div>

            <div className="flex flex-row lg:gap-x-12 items-center lg:py-0 py-2 text-sm lg:text-base justify-between lg:w-fit w-full text-muted-foreground">
              {headers.map((h) => (
                <Link key={h.label} href={h.href} className="hover:underline hover:text-secondary-foreground">
                  {h.label}
                </Link>
              ))}

              <Link
                className="border-green-600 border-2 p-2 hidden lg:block"
                href="/Bahaa_al_Halabi.pdf"
                download={"Bahaa_al_Halabi.pdf"}
              >
                {t("resume")}
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
