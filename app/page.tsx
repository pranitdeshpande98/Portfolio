import Floor from "@/components/Floor";
import DockDemo from "@/components/DockDemo";
import Incidents from "@/components/Incidents";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Floor />
      <main className="mx-auto max-w-page px-6 md:px-10">
        <DockDemo />
        <Incidents />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
