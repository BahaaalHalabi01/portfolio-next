"use client";
import { type FC, type PropsWithChildren } from "react";
import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.5,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const animateItem = { variants: item };

export const AnimatedBanner: FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations("Home");
  return (
    <motion.section
      className="text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-primary text-7xl font-bold pb-4"
        {...animateItem}
      >
        {t('name')}
      </motion.h1>
      <motion.h2
        className="text-foreground text-6xl font-bold pb-4"
        {...animateItem}
      >

        {t('welcome')}
      </motion.h2>
      <motion.p
        className="text-secondary-foreground text-2xl text-balance px-32 leading-10"
        {...animateItem}
      >
        {t("about-0")}
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          className="important-link"
        >
          Typescript
        </a>
        ,
        <a className=" important-link" href="https://react.dev" target="_blank">
          React
        </a>
        , {t("and")}{" "}
        <a className="important-link" href="https://nextjs.org" target="_blank">
          NextJs
        </a>
        {t("about-1")}
        <a className="important-link" href="https://nodejs.org" target="_blank">
          NodeJs
        </a>
        {t("about-2")}
        <a
          className="important-link"
          href="https://aws.amazon.com"
          target="_blank"
        >
          Amazon Web Services
        </a>
        {t("about-3")}.{t("about-4")}
      </motion.p>
    </motion.section>
  );
};
