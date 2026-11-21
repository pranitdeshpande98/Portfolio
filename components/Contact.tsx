import { profile } from "@/data";

export default function Contact() {
  return (
    <footer id="contact" className="mt-6 rounded-t-[2.5rem] bg-cobalt text-white md:rounded-t-[4rem]">
      <div className="mx-auto max-w-page px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <p className="text-lg text-white/80">Hiring a forward deployed or software engineer?</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-block break-all rounded-2xl bg-white/10 px-5 py-3 font-display text-[1.5rem] font-bold leading-[1.3] transition-colors hover:bg-mint hover:text-ink sm:text-3xl md:text-[2.75rem]"
        >
          {profile.email}
        </a>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/25 pt-6 text-[15px] text-white/75 sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
