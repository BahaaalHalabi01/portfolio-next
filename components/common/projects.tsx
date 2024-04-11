"use client";
import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";
import { ProjectCard } from "./project-card";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 6,
      staggerChildren: 1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const animateItem = { variants: item };

export function Projects(): ReactNode {
  const t = useTranslations("Projects");

  return (
    <motion.section
      className="text-start py-6 lg:py-14 relative h-section min-h-fit space-y-3 min-w-full"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <motion.h1 className="text-9xl pb-2" {...animateItem}>
        {t("title")}
      </motion.h1>
      <div className="grid grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.section>
  );
}
