import Hero from "@/components/Hero";
import Evals from "@/components/Evals";
import AskBox from "@/components/AskBox";
import Systems from "@/components/Systems";
import DockDemo from "@/components/DockDemo";
import Projects from "@/components/Projects";
import Incidents from "@/components/Incidents";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-page px-6 md:px-10">
        <Evals />
        <AskBox />
        <Systems />
        <Projects />
        <DockDemo />
        <Incidents />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
