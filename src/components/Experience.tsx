"use client";

import { experiencePoints } from "@/lib/data";

export default function Experience() {
  return (
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
  );
}
