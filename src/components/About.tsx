"use client";

import { highlights } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">About</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Frontends that stay fast, clear, and maintainable.
        </h2>
      </div>

      <div className="space-y-5 text-slate-300">
        <p className="leading-8">
          I enjoy turning complex product requirements into clear, polished
          interfaces. My work is centered on reusable components, clean
          structure, responsive behavior, and delivery quality that supports
          real production teams.
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
  );
}
