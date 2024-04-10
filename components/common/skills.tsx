import { Loader } from "lucide-react";
import { FC } from "react";

interface SkillsProps {
  type: string;
  loading: boolean;
}

export const Skills: FC<SkillsProps> = ({ type, loading }) => {
  if (loading) {
    return <Loader className="animate-spin size-16 ml-8" />;
  }

  return (
    <ul className="skill space-x-6 space-y-8 px-8">
      <li className="ml-6">Typescript,JsDoc</li>
      <li>NextJs,React</li>
      <li>Sveltekit</li>
      <li>Prisma,Drizzle </li>
      <li>Tailwindcss, MaterialUi, RadixUi</li>
      <li>TanStack Query,</li>
      <li>Redux Toolkit</li>
      <li>Framer Motion</li>
    </ul>
  );
};
