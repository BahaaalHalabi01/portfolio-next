"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@Ui/card";

import { Button } from "@Ui/button";

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
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src="" height={80} width={80} alt={title} />
      </CardContent>
      <CardFooter>
        <Button />
      </CardFooter>
    </Card>
  );
}
