import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
