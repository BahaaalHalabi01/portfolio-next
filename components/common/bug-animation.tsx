"use client";
import { type FC } from "react";
import { type Variants, motion } from "framer-motion";
import { Bug } from "lucide-react";

const container: Variants = {
  start: {
    right: "97vw",
  },
  animate: {
    right: "3vw",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 24,
      
    },
  },
};

const animateItem = {
  variants: container,
  animate: "animate",
  initial: "start",
};

export const BugAnimation: FC = () => {
  return (
    <motion.div className="absolute -bottom-4" {...animateItem}>
      <Bug className='-rotate-90'/>
    </motion.div>
  );
};
