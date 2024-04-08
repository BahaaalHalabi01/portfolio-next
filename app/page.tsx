import Image from "next/image";
import { AnimatedSection } from "./animated-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 container">
      <AnimatedSection></AnimatedSection>
    </main>
  );
}
