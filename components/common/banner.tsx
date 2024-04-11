"use client";
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

export function Banner() {
  const t = useTranslations("Home");

  return (
    <motion.section
      className="text-start py-6 lg:py-14 relative h-section min-h-fit space-y-3"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <div
        className="green-background shadow-lg shadow-primary/20"
        aria-description="image wrapper"
      ></div>
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
        {t.rich("about.intro")}
      </motion.p>
    </motion.section>
  );
}
