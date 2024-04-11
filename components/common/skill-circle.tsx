"use client";

import { SkillKeys } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { Dispatch, FC, MouseEvent, SetStateAction } from "react";

interface SkillCircleProps {
  state: [SkillKeys, Dispatch<SetStateAction<SkillKeys>>];
  loading: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const SkillCircle: FC<SkillCircleProps> = ({ state, loading }) => {
  const [_, setLoad] = loading;
  const [clicked, setClicked] = state;
  const [scope, animate] = useAnimate();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setLoad(true);
    setClicked(event.currentTarget.id as SkillKeys);
    animate(
      scope.current,
      {
        rotate: [0, 720],
      },
      {
        duration: 2,
        ease: "backInOut",
        onComplete: () => setLoad(false),
      },
    );
  }

  return (
    <ul ref={scope} className={"circle"}>
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
