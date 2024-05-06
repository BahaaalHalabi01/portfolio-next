"use server";

import type { Project } from "../types/project";

export async function getProject({ id }: { id: string }): Promise<Project> {
  await fetch("https://google.com");

  /**todo get data from database*/
  const project = { id } as Project;

  return project;
}
