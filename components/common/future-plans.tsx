"use client";

import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

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
export function FuturePlans(): ReactNode {
  const t = useTranslations("FuturePlans");
  return (
    <motion.section
      whileInView="show"
      viewport={{ once: true }}
      initial="hidden"
      variants={container}
      className="text-start py-6 lg:py-14 relative min-h-section space-y-3 w-full"
    >
      <motion.h1 {...animateItem} className="text-9xl pb-2">
        {t("title")}
      </motion.h1>
      <div className="space-y-6">
        <motion.p
          className="text-2xl leading-normal indent-8 italic"
          {...animateItem}
        >
          {t("p")}
        </motion.p>
        <motion.p
          className="text-2xl leading-normal indent-8 italic"
          {...animateItem}
        >
          {t.rich("p1")}
        </motion.p>
        <motion.p
          className="text-2xl leading-normal indent-8 italic"
          {...animateItem}
        >
          {t.rich("p2")}
        </motion.p>
        <motion.p
          className="text-2xl leading-normal indent-8 italic"
          {...animateItem}
        >
          {t.rich("p3")}
        </motion.p>
        <motion.p
          className="text-2xl leading-normal indent-8 italic"
          {...animateItem}
        >
          {t.rich("p4")}
        </motion.p>
      </div>
    </motion.section>
  );
}
