"use client";

import { experiencePoints } from "@/lib/data";

export default function Experience() {
  return (
    <div className="rounded-lg border border-[#d0d5dd] bg-[#101828] p-6 text-white shadow-sm md:p-8">
      <p className="text-sm font-black uppercase text-[#7dd3fc]">
        Experience
      </p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white">
        Delivery patterns that matter in real teams.
      </h2>
      <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
        {experiencePoints.map((item) => (
          <div
            key={item.title}
            className="py-5"
          >
            <p className="text-xs font-bold uppercase text-[#98a2b3]">
              {item.period}
            </p>
            <h3 className="mt-2 text-lg font-black text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#d0d5dd]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
