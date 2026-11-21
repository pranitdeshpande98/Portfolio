import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-page px-6 md:px-10">
        <Hero />
        <Work />
        <Experience />
        <Approach />
      </main>
      <Contact />
    </>
  );
}
