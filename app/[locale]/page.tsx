import { getTranslations } from "next-intl/server";
import { AnimatedBanner } from "../animated-banner";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 container">
      <AnimatedBanner />
    </main>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}
