import { TechStack } from "@/components/common/techstack";
import { Banner } from "@/components/common/banner";
import { getTranslations } from "next-intl/server";

export default function Index() {
  const skills = {
    frontend: [
      "Typescript,JsDoc",
      "NextJs,React",
      "Sveltekit",
      "Tailwindcss,RadixUi,MaterialUi,",
      "TanStack Query,",
      "Redux Toolkit",
      "Framer Motion",
      "Playwright",
      "AuthJs",
    ],
    backend: [
      "NodeJs",
      "Serverless, Microservices",
      "Amazon Web Services",
      "Elastic Search",
      "Prisma,Drizzle",
      "Sql, DynamoDb,MongoDb",
      "Jest",
      "Rust",
    ],
    tooling: [
      "Docker",
      "NeoVim",
      "Linux",
      "Git",
      "Turbo Repo",
      "Tmux",
      "Notion",
      "Bun",
    ],
  };
  return (
    <main className="flex min-h-screen flex-col items-center container gap-y-4 lg:py-16 py-8">
      <Banner />
      <TechStack skills={skills} />
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
