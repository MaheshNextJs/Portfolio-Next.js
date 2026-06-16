"use client";

import Image from "next/image";
import myPhoto from "../app/images/profile.jpg";
import { contactLinks } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pb-10 pt-4">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-lg border border-[#bae6fd] bg-white/80 px-4 py-2 text-xs font-bold uppercase text-[#0369a1] shadow-sm">
            Available for frontend roles
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[#101828] md:text-6xl">
            Frontend developer crafting clean product experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#475467] md:text-lg">
            I am Mahesh Bairi. I build fast, responsive, production-ready
            interfaces with React, Next.js, and React Native.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={
                  index === 2
                    ? "rounded-lg border border-[#0f766e] bg-[#0f766e] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#115e59]"
                    : "rounded-lg border border-[#d0d5dd] bg-white px-5 py-3 text-sm font-bold text-[#101828] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f766e] hover:text-[#0f766e]"
                }
              >
                {link.label} {index === 2 ? "->" : ""}
              </a>
            ))}
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-[#d0d5dd] bg-white/80 p-4 shadow-sm">
              <p className="text-3xl font-black text-[#2563eb]">5+</p>
              <p className="mt-2 text-sm font-medium text-[#475467]">
                Years experience
              </p>
            </div>
            <div className="rounded-lg border border-[#d0d5dd] bg-white/80 p-4 shadow-sm">
              <p className="text-3xl font-black text-[#f97316]">10+</p>
              <p className="mt-2 text-sm font-medium text-[#475467]">
                Projects shipped
              </p>
            </div>
            <div className="rounded-lg border border-[#d0d5dd] bg-white/80 p-4 shadow-sm">
              <p className="text-3xl font-black text-[#0f766e]">3+</p>
              <p className="mt-2 text-sm font-medium text-[#475467]">
                Product domains
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/70 bg-white/75 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="flex items-center gap-4 border-b border-[#e4e7ec] pb-5">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#d0d5dd] bg-white p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#d8dee8]">
                <Image
                  src={myPhoto}
                  alt="Mahesh Bairi portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-[#0f766e]">
                Mahesh Bairi
              </p>
              <p className="mt-1 text-2xl font-black text-[#101828]">
                UI engineer with product focus
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-[#0f172a] p-5 font-mono text-sm text-[#cbd5e1]">
            <p>
              <span className="text-[#38bdf8]">const</span> role ={" "}
              <span className="text-[#86efac]">&quot;Frontend Developer&quot;</span>;
            </p>
            <p className="mt-2">
              <span className="text-[#38bdf8]">const</span> stack = [
              <span className="text-[#fde68a]">&quot;React&quot;</span>,{" "}
              <span className="text-[#fde68a]">&quot;Next.js&quot;</span>,{" "}
              <span className="text-[#fde68a]">&quot;React Native&quot;</span>];
            </p>
            <p className="mt-2 text-[#94a3b8]">
              build.cleanUI({"{ responsive: true, scalable: true }"});
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "Next.js", "React Native", "TypeScript"].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#d0d5dd] bg-[#f8fafc] px-3 py-1.5 text-sm font-bold text-[#344054]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
