import { profile } from "@/data";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-24">
        <h2 className="wider max-w-4xl text-3xl font-extrabold leading-[1.15] md:text-[3.4rem]">Have a floor that needs running?</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
          ERP integrations, data pipelines, payroll systems, or an AI assistant people actually use. I&apos;m in{" "}
          {profile.location} and happy to talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-stamp-soft">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:border-white">
            LinkedIn
          </a>
          <a href={profile.github} className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:border-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
