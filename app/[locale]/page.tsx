import { TechStack } from "@/components/common/techstack";
import { Banner } from "@/components/common/banner";
import { getTranslations } from "next-intl/server";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center container gap-y-4">
      <Banner />
      <TechStack />
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
