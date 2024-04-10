"use client";

import { cn } from "@/lib/utils";
import { Dispatch, FC, MouseEvent, SetStateAction } from "react";

interface SkillCircleProps {
  state: [string, Dispatch<SetStateAction<string>>];
}

export const SkillCircle: FC<SkillCircleProps> = ({ state }) => {
  const [clicked, setClicked] = state;

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setClicked(event.currentTarget.id);
  }

  return (
    <ul className={cn("circle")}>
      <li>
        <button
          className={cn(
            "text",
            clicked === "frontend" && "scale-150 italic text-secondary",
          )}
          id="frontend"
          onClick={handleClick}
        >
          Frontend
        </button>
      </li>
      <li>
        <button
          className={cn(
            "text",
            clicked === "backend" && "scale-150 italic text-secondary",
          )}
          id="backend"
          onClick={handleClick}
        >
          Backend
        </button>
      </li>
      <li>
        <button
          className={cn(
            "text",
            clicked === "tooling" && "scale-150 italic text-secondary ",
          )}
          id="tooling"
          onClick={handleClick}
        >
          Tooling
        </button>
      </li>
    </ul>
  );
};
