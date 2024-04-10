"use client";
import { type FC } from "react";
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

export const Banner: FC = ({}) => {
  const t = useTranslations("Home");

  return (
    <motion.section
      className="text-start py-10 relative h-banner"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="green-background" aria-description="image wrapper"></div>
      <div className="font-bold pt-10" id="about">
        <motion.h1 className="text-9xl pb-2" {...animateItem}>
          {t("name")}
        </motion.h1>
        <motion.h2
          className="text-7xl text-primary text-balance pb-4"
          {...animateItem}
        >
          {t("welcome-1")}
        </motion.h2>
        <motion.h3 className="text-7xl leading-tight" {...animateItem}>
          {t("welcome")}
        </motion.h3>
      </div>
      <motion.p
        className="text-balance banner-p pt-12 font-semibold"
        {...animateItem}
      >
        {t.rich("about.intro", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </motion.p>
    </motion.section>
  );
};
// {t("about.0")}
//          <a href="https://www.typescriptlang.org" target="_blank">
//            Typescript
//          </a>
//          ,{t("with")}
//          <a href="https://nextjs.org" target="_blank">
//            NextJs
//          </a>
//          {t("about.1")}
//          <a href="https://nodejs.org" target="_blank">
//            NodeJs
//          </a>
//          {t("about.2")}
//          <a href="https://aws.amazon.com" target="_blank">
//            Amazon Web Services
//          </a>
//          {t("about.3")}.{t("about.4")}
//
