import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { TechStack } from "@/components/common/techstack";
import { Banner } from "@/components/common/banner";
import { Projects } from "@/components/common/projects";

export default function Home(): ReactNode {
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
    <main className="flex min-h-screen flex-col items-start container gap-y-4 lg:pb-24 pb-12">
      <Banner />
      <TechStack skills={skills} />
      <Projects />
    </main>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}
