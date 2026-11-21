import { navItems, profile } from "@/data";

export default function Nav() {
  return (
    <header className="border-b border-wire/60">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-10" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-[15px] text-graphite sm:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-ink">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.github} className="text-[15px] font-medium sm:hidden" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
