import { Skeleton } from "@Ui/skeleton";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface SkillsProps {
  type: string;
  loading: boolean;
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ loading, skills }) => {
  if (loading) {
    return (
      <div className="space-x-6 space-y-6 px-8 my-auto">
        {new Array(3).fill(0).map((_, i) => (
          <>
            <Skeleton
              className={cn(
                "w-[160px] rounded-xl h-20 inline-block",
                i === 0 && "ml-6",
              )}
            />
          </>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <ul className="skill space-x-6 space-y-6 px-8 my-auto">
        {skills.map((s, i) => (
          <li key={i} className={i === 0 ? "ml-6" : ""}>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};
