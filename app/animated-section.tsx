"use client";
import { type FC, type PropsWithChildren } from "react";
import { Variants, motion } from "framer-motion";

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

export const AnimatedSection: FC<PropsWithChildren> = ({ children }) => {
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
        Bahaa al Halabi
      </motion.h1>
      <motion.h2
        className="text-foreground text-6xl font-bold pb-4"
        {...animateItem}
      >
        I turn ideas into cool web applications
      </motion.h2>
      <motion.p
        className="text-secondary-foreground text-2xl text-balance px-32 leading-10"
        {...animateItem}
      >
        I am a senior full stack web developer. I mainly use Typescript, React,
        and NextJs to build my frontend apps, and NodeJs with various Amazon Web
        Services for the backend. I worked up until now exclusively with
        startups, constantly taking on difficult tasks outside of my scope,
        enabling me to grow significantly. I would like to believe that i am not
        a "React developer", and that i understand the fundamentals of
        programming will, enabling me to dive into other technologies. Rust and
        Svelte being on top of the list. This website was built using my
        favorite meta-framework SvelteKit, with Svelte5 written using the
        superior text editor NeoVim. I use Linux as my preferred operating
        system. If you are interested,find this website's code on my Github
      </motion.p>
    </motion.section>
  );
};
