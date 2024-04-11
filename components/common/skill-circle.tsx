"use client";
import type {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
} from "react";
import { useAnimate } from "framer-motion";
import { type SkillKeys } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SkillCircleProps {
  state: [SkillKeys, Dispatch<SetStateAction<SkillKeys>>];
  loading: [boolean, Dispatch<SetStateAction<boolean>>];
}

export function SkillCircle({ state, loading }: SkillCircleProps): ReactNode {
  const [_, setLoad] = loading;
  const [clicked, setClicked] = state;
  const [scope, animate] = useAnimate();

  function handleClick(event: MouseEvent<HTMLButtonElement>):void {
    setLoad(true);
    setClicked(event.currentTarget.id as SkillKeys);
    void animate(
      scope.current,
      {
        rotate: [0, 720],
      },
      {
        duration: 2,
        ease: "backInOut",
        onComplete: () => {
          setLoad(false);
        },
      },
    );
  }

  return (
    <div className="">
      <ul ref={scope} className="circle">
        <li>
          <button
            type="button"
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
            type="button"
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
            type="button"
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
    </div>
  );
}
