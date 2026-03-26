import Image from "next/image";
import myPhoto from "../images/profile.jpg";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Responsive UI", "App Performance"],
  },
  {
    title: "Architecture",
    items: ["Redux", "Zustand", "Reusable Systems", "API Integration"],
  },
];

const featuredProjects = [
  {
    title: "Insurance Self-Service Platform",
    description:
      "Built responsive customer journeys for policy management, payments, and claims with a focus on speed, reliability, and conversion.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "E-commerce Experience Layer",
    description:
      "Delivered storefront UI modules, reusable product flows, and performance improvements for high-traffic browsing and checkout journeys.",
    tags: ["React", "Tailwind", "State Management"],
  },
  {
    title: "SaaS Admin Dashboard",
    description:
      "Created scalable dashboard surfaces with reusable components, filters, and data-heavy workflows designed for daily operational use.",
    tags: ["Next.js", "Design Systems", "Optimization"],
  },
];

const highlights = [
  "5+ years building production web and mobile interfaces",
  "Shipped 10+ projects across insurance, e-commerce, and SaaS",
  "Strong focus on performance, maintainability, and pixel-accurate UI",
];

const experiencePoints = [
  {
    period: "Frontend Engineering",
    title: "Scalable UI Delivery",
    description:
      "Built reusable components and structured frontends that stayed maintainable as product scope expanded.",
  },
  {
    period: "Performance Work",
    title: "Faster Interfaces",
    description:
      "Improved perceived speed through code splitting, bundle cleanup, and smoother client-side interactions.",
  },
  {
    period: "Team Collaboration",
    title: "Design to Production",
    description:
      "Worked closely with product, backend, and design teams to turn complex requirements into simple user flows.",
  },
];

const contactLinks = [
  {
    label: "Call",
    href: "tel:9502558103",
  },
  {
    label: "Email",
    href: "mailto:maheshbairi.dev@gmail.com",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/uc?export=download&id=1hRWh1ZGm2wNQaquY4BBy6otkiEc9-1qu",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.14),_transparent_24%),linear-gradient(180deg,_#08101d_0%,_#07111f_45%,_#020617_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
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

        <main className="space-y-24">
          <section className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">
                Available for frontend roles
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Designing sharp, production-ready interfaces for web and
                mobile products.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I build clean and scalable user interfaces with React,
                Next.js, and React Native. My focus is practical: reliable
                delivery, strong UX, and maintainable frontend systems that
                hold up as products grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-sky-300">5+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Years of frontend experience
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-amber-300">10+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Projects shipped in production
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-emerald-300">3+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Product domains delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40">
                <div className="mb-5 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Frontend profile
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    UI engineer with product focus
                  </p>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={myPhoto}
                    alt="Mahesh Bairi portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["React", "Next.js", "React Native"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-center text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Frontends that stay fast, clear, and maintainable.
              </h2>
            </div>

            <div className="space-y-5 text-slate-300">
              <p className="leading-8">
                I enjoy turning complex product requirements into clear,
                polished interfaces. My work is centered on reusable
                components, clean structure, responsive behavior, and delivery
                quality that supports real production teams.
              </p>
              <div className="grid gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Featured Work
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Product-facing projects and delivery strengths.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                This section highlights the kind of systems and product surfaces
                I have worked on, with emphasis on UX quality, scale, and
                maintainable implementation.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-6 transition hover:-translate-y-1 hover:border-sky-300/40"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Case Study
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Delivery patterns that matter in real teams.
              </h2>
              <div className="mt-8 space-y-5">
                {experiencePoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <section
              id="skills"
              className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Core technologies I use regularly.
              </h2>
              <div className="mt-8 space-y-5">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-950"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section
            id="contact"
            className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-sky-400/15 via-white/5 to-amber-300/15 p-8 md:p-10"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  If the role needs strong UI execution, I can contribute
                  quickly.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  I am open to frontend opportunities involving React, Next.js,
                  React Native, and modern product UI work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:9502558103"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  9502558103
                </a>
                <a
                  href="mailto:maheshbairi.dev@gmail.com"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  maheshbairi.dev@gmail.com
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} Mahesh Bairi. Built with Next.js
          and Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}
