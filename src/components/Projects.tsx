"use client";

import { featuredProjects } from "@/lib/data";

export default function Projects() {
  return (
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
          This section highlights the kind of systems and product surfaces I
          have worked on, with emphasis on UX quality, scale, and maintainable
          implementation.
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
  );
}
