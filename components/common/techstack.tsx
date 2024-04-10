"use client";
import { type FC } from "react";
import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SkillCircle } from "./skill-circle";

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

export const TechStack: FC = ({}) => {
  const t = useTranslations("TechStack");
  return (
    <motion.section
      className="text-start py-10 w-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-7xl pb-2" {...animateItem}>
        {t("title")}
      </motion.h1>
      <SkillCircle />
    </motion.section>
  );
};
