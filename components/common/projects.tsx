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

  /**todo add projects to turso db/local host it on vps **/
  return (
    <motion.section
      className="text-start py-6 lg:py-14 relative min-h-section space-y-3 min-w-full"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <motion.h1 className="text-9xl pb-2" {...animateItem}>
        {t("title")}
      </motion.h1>
      <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-8">
        <ProjectCard
          title="Trip Creator"
          id="bedu"
          img="/bedu/3.jpeg"
          description={t("description.bedu")}
        />
        <ProjectCard
          title="Battery Test Flow"
          id="dox"
          img="/dox/4.jpeg"
          description={t("description.dox")}
        />
        <ProjectCard
          title="Shop"
          id="shop"
          img="/shop/2.jpeg"
          description={t("description.shop")}
        />
        <ProjectCard
          title="Landing Page"
          id="landing"
          img="/landing/3.jpeg"
          description={t("description.landing")}
        />
        <ProjectCard
          title="Movie Picker"
          id="movie"
          img="/movie/1.jpeg"
          description={t("description.movie")}
        />
        <ProjectCard
          title="Age Calculator"
          id="calculator"
          img="/calculator/1.jpeg"
          description={t("description.agecalculator")}
        />
        <ProjectCard
          title="Newsletter"
          id="newsletter"
          img="/subscribe/1.jpeg"
          description={t("description.newsletter")}
        />
        <ProjectCard
          title="Recipe"
          id="recipe"
          img="/recipe/1.jpeg"
          description={t("description.recipe")}
        />
      </div>
    </motion.section>
  );
}
