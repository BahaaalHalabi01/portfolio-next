import { useTranslations } from "next-intl";
import { AnimatedSection } from "../animated-section";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 container">
      <AnimatedSection></AnimatedSection>
    </main>
  );
}
