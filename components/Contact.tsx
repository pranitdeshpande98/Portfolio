import { profile } from "@/data";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line bg-panel text-snow">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <h2 className="wider max-w-4xl text-3xl font-extrabold leading-[1.15] md:text-[3.4rem]">Need someone who ships into the messy parts?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
          AI agents that hold up in production, integrations with ERP and partner systems, and data pipelines people trust. I&apos;m in{" "}
          {profile.location} and happy to talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-volt px-6 py-3 font-semibold text-night hover:bg-snow">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-volt">
            LinkedIn
          </a>
          <a href={profile.github} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-volt">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
