"use client";

import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Skills</p>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Core technologies I use regularly.
      </h2>
      <div className="mt-8 space-y-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
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
  );
}
