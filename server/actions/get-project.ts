"use server";
import { eq } from "drizzle-orm";
//
import db from "@/db/client";
import { projects } from "@/db/schema";
import type { Project } from "@/db/types";

export async function getProject({
  id,
}: {
  id: string;
}): Promise<Project | undefined> {
  let project;
  try {
    project = await db.query.projects.findFirst({
      where: eq(projects.id, id),
    });
  } catch (err) {
    console.error(err);
  }

  return project;
}
