"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 mb-10 rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur md:mb-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Mahesh Bairi
          </p>
          <p className="text-xs text-slate-400">
            Frontend Web and Mobile Developer
          </p>
        </div>

        <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
