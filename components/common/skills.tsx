import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface SkillsProps {
  type: string;
  loading: boolean;
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ type, loading, skills }) => {
  if (loading) {
    return (
      <div className="space-x-8 space-y-10 px-8 my-auto">
        {new Array(3).fill(0).map((_, i) => (
          <>
            <Skeleton
              className={cn(
                "w-[160px] rounded-xl h-20 inline-block",
                i === 0 && "ml-8",
              )}
            />
          </>
        ))}
      </div>
    );
  }

  return (
    <ul className="skill space-x-8 space-y-10 px-8 my-auto">
      {skills.map((s, i) => (
        <li key={i} className={i === 0 ? "ml-8" : ""}>
          {s}
        </li>
      ))}
    </ul>
  );
};
