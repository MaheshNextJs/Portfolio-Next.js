"use client";

import { featuredProjects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-[#f97316]">
            Featured Work
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight text-[#101828] md:text-4xl">
            Product-facing projects and delivery strengths.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#667085]">
          This section highlights the kind of systems and product surfaces I
          have worked on, with emphasis on UX quality, scale, and maintainable
          implementation.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-[#d0d5dd] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#93c5fd] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-xl font-black leading-tight text-[#101828]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#475467]">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#d0d5dd] bg-[#f7f9fb] px-3 py-1 text-xs font-bold text-[#344054]"
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
