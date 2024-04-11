"use client";
import { useTranslations } from "next-intl";
import { type Variants, motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import type { SkillKeys } from "@/lib/types";
import { SkillCircle } from "./skill-circle";
import { Skills } from "./skills";

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

export function TechStack({
  skills,
}: {
  skills: Record<SkillKeys, string[]>;
}): ReactNode {
  const t = useTranslations("TechStack");

  const state = useState<keyof typeof skills>("frontend");
  const loading = useState(false);

  return (
    <motion.section
      className="text-start py-6 lg:py-14 relative h-section min-h-fit space-y-3"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <motion.h1 className="text-9xl lg:pb-16 pb-8" {...animateItem}>
        {t("title")}
      </motion.h1>
      <motion.div className="lg:gap-x-8 lg:pb-16 pb-8 max-h-fit grid grid-cols-1 place-items-center lg:grid-cols-2">
        <SkillCircle state={state} loading={loading} />
        <Skills
          type={state[0]}
          loading={loading[0]}
          skills={skills[state[0]]}
        />
      </motion.div>
      <motion.p className="text-white text-xl italic">
        {t.rich("thanks")}
      </motion.p>
    </motion.section>
  );
}

