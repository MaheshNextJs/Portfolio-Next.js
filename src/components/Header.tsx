"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 mb-8 border-b border-[#d8dee8] bg-[#f7f9fb]/80 py-4 px-5 backdrop-blur md:mb-12 lg:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="leading-none">
          <p className="text-base font-black uppercase tracking-wide text-[#0f766e]">
            Mahesh Bairi
          </p>
          <p className="mt-2 text-sm text-[#667085]">
            Frontend Web and Mobile Developer
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-7 text-sm font-semibold text-[#344054]">
          <a className="transition hover:text-[#0f766e] hover:underline hover:underline-offset-8" href="#about">
            About
          </a>
          <a className="transition hover:text-[#0f766e] hover:underline hover:underline-offset-8" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#0f766e] hover:underline hover:underline-offset-8" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-[#0f766e] hover:underline hover:underline-offset-8" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
