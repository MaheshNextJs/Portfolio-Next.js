"use client";

import { highlights } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-8 rounded-lg border border-[#d0d5dd] bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div>
        <p className="text-sm font-black uppercase text-[#2563eb]">About</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-[#101828] md:text-4xl">
          Frontends that stay fast, clear, and maintainable.
        </h2>
      </div>

      <div className="space-y-6 text-[#475467]">
        <p className="text-lg leading-8">
          I enjoy turning complex product requirements into clear, polished
          interfaces. My work is centered on reusable components, clean
          structure, responsive behavior, and delivery quality that supports
          real production teams.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border-l-4 border-[#0f766e] bg-[#f2f4f7] px-4 py-4 text-sm font-semibold text-[#344054]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
