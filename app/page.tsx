import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import DockDemo from "@/components/DockDemo";
import Incidents from "@/components/Incidents";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-page px-6 md:px-10">
        <Systems />
        <DockDemo />
        <Incidents />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
