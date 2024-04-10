"use client";
import { type FC, type PropsWithChildren } from "react";
import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
      className="text-center py-10"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-9xl pb-2" {...animateItem}>
        {t("title")}
      </motion.h1>
    </motion.section>
  );
};
