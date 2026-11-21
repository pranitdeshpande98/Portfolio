import { profile } from "@/data";

export default function Contact() {
  return (
    <footer id="contact" className="mt-8 bg-ink text-paper">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
          Hiring a forward deployed or software engineer? I&apos;d like to hear about it.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-xl underline decoration-[#5B6B82] underline-offset-[6px] hover:decoration-paper md:text-2xl"
        >
          {profile.email}
        </a>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#2C3D58] pt-6 text-[15px] text-[#C9D1DA] sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
