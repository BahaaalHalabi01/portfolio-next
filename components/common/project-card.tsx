"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@Ui/card";
import { buttonVariants } from "@Ui/button";

export function ProjectCard({
  id,
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
  id: string;
}): ReactNode {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="relative h-40 rounded-md">
          <Image src={img} className="w-auto rounded-md" fill alt={title} />
        </div>
      </CardContent>
      <CardFooter className="">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={`/project/${id}`}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
}
