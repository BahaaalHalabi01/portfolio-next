"use client";
import { useState, type FC } from "react";
import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SkillCircle } from "./skill-circle";
import { Skills } from "./skills";
import { SkillKeys } from "@/lib/types";

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

export const TechStack: FC<{
  skills: Record<SkillKeys, string[]>;
}> = ({ skills }) => {
  const t = useTranslations("TechStack");

  const state = useState<keyof typeof skills>("frontend");
  const loading = useState(false);

  return (
    <motion.section
      className="text-start pt-16 w-full opacity-0 h-section min-h-fit"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <motion.h1 className="text-7xl lg:pb-16 pb-8" {...animateItem}>
        {t("title")}
      </motion.h1>
      <motion.div className="flex gap-x-8 lg:pb-16 pb-8">
        <SkillCircle state={state} loading={loading} />
        <Skills
          type={state[0]}
          loading={loading[0]}
          skills={skills[state[0]]}
        />
      </motion.div>
      <motion.p className="text-white text-xl italic">
        {t.rich("thanks", {
          theo: (chunk) => (
            <a
              className="text-primary text-2xl"
              href="https://t3.gg/"
              target="_blank"
              rel="noreferrer"
            >
              {chunk}
            </a>
          ),
          prime: (chunk) => (
            <a
              className="text-primary text-2xl"
              href="https://www.twitch.tv/theprimeagen"
              target="_blank"
              rel="noreferrer"
            >
              {chunk}
            </a>
          ),
        })}
      </motion.p>
    </motion.section>
  );
};
