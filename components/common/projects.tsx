"use client";
import { type Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";
//
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@Ui/carousel";
import { Button } from "@Ui/button";
import { ProjectCard } from "./project-card";

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

export function Projects(): ReactNode {
  const t = useTranslations("Projects");

  const [view, setView] = useState("carousel");

  interface Data {
    id: string;
    title: string;
    img: string;
    description: Parameters<typeof t>[0];
  }

  const data: Data[] = [
    {
      title: "Trip Creator",
      id: "bedu",
      img: "/bedu/3.jpeg",
      description: "description.bedu",
    },
    {
      title: "Battery Test Flow",
      id: "dox",
      img: "/dox/4.jpeg",
      description: "description.dox",
    },
    {
      title: "Shop",
      id: "shop",
      img: "/shop/2.jpeg",
      description: "description.shop",
    },
    {
      title: "Landing Page",
      id: "landing",
      img: "/landing/3.jpeg",
      description: "description.landing",
    },
    {
      title: "Movie Picker",
      id: "movie",
      img: "/movie/1.jpeg",
      description: "description.movie",
    },
    {
      title: "Interactive Comments Section",
      id: "interactive-comments-section",
      img: "/interactive-comments-section/1.jpeg",
      description: "description.interactive-comments-section",
    },
    {
      title: "Age Calculator",
      id: "calculator",
      img: "/calculator/1.jpeg",
      description: "description.agecalculator",
    },
    {
      title: "Newsletter",
      id: "newsletter",
      img: "/subscribe/1.jpeg",
      description: "description.newsletter",
    },
    {
      title: "Recipe",
      id: "recipe",
      img: "/recipe/1.jpeg",
      description: "description.recipe",
    },
  ];

  function toggle(): void {
    if (view === "carousel") setView("grid");
    else setView("carousel");
  }

  /**todo add projects to turso db/local host it on vps **/
  return (
    <motion.section
      className="text-start py-6 lg:py-14 relative min-h-section space-y-3 min-w-full"
      variants={container}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      <motion.h1 className="text-9xl pb-2" {...animateItem}>
        {t("title")}
      </motion.h1>
      <motion.p className="text-start py-6 text-3xl italic">
        {t.rich("h2")}
      </motion.p>

      <Button onClick={toggle}>Toggle this</Button>
      {view === "grid" ? (
        <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-8">
          {data.map((d) => (
            <ProjectCard {...d} key={d.id} />
          ))}
        </div>
      ) : null}
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="max-w-[84rem]"
      >
        <CarouselContent>
          {data.map((d) => (
            <CarouselItem className="lg:basis-1/3 md:basis-1/2 " key={d.id}>
              <ProjectCard {...d} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  );
}
