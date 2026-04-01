"use client";

import Image from "next/image";
import myPhoto from "../app/images/profile.jpg";
import { contactLinks } from "@/lib/data";

export default function Hero() {
  return (
    <section className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">
          Available for frontend roles
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Designing sharp, production-ready interfaces for web and mobile
          products.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          I build clean and scalable user interfaces with React, Next.js, and
          React Native. My focus is practical: reliable delivery, strong UX, and
          maintainable frontend systems that hold up as products grow.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
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
  );
}
