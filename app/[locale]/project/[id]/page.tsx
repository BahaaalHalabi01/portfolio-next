import Link from "next/link";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
//
import { Button } from "@/components/ui/button";
import { getProject } from "@/server/actions/get-project";

export default async function Project(params: {
  id: string;
}): Promise<ReactNode> {
  const data = await getProject({ id: params.id });

  if (!data) redirect("/");

  return (
    <div className="pt-12 min-w-full">
      <h1 className="text-6xl pb-8">title</h1>
      <h2 className="text-4xl pb-8">description</h2>
      <div className="grid grid-cols-2 gap-x-2 min-w-full place-items-center">
        <div>stack section</div>
        <div>image section</div>
      </div>
      {data.url ? (
        <Button>
          <Link href={data.url} target="_blank" rel="noreferrer">
            Go to the website
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
