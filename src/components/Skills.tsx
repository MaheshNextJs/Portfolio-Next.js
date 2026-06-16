"use client";

import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-lg border border-[#d0d5dd] bg-white p-6 shadow-sm md:p-8"
    >
      <p className="text-sm font-black uppercase text-[#0f766e]">Skills</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[#101828]">
        Core technologies I use regularly.
      </h2>
      <div className="mt-8 grid gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border-l-4 border-[#f97316] bg-[#f7f9fb] p-5"
          >
            <h3 className="text-lg font-black text-[#101828]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[#d0d5dd] bg-white px-3 py-1.5 text-sm font-bold text-[#344054]"
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
