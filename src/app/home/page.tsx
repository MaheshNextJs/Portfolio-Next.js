"use client";
import React, { useState } from "react";
import myPhoto from "../images/profile.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  const [hover, setHover] = useState(false);
  const technologies = [
    "Next.js",
    "React.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Redux / Zustand",
  ];

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1Jrnv4kRvP_AsdvVDHHWeOtbsp57uqUDb";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* MAIN */}
      <main className="flex-grow pb-20 px-6 md:px-16 lg:px-24">
        {/* HERO SECTION */}
        <section className="pt-16 md:pt-24 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-sky-300 mb-3">
              Frontend Web / Mobile Developer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-fuchsia-400 to-amber-300">
                Hi, I&apos;m Mahesh Bairi
              </span>
              <span className="block mt-2 text-slate-100">
                I build clean, fast & scalable UIs.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
              I&apos;m a{" "}
              <span className="font-semibold">Frontend Developer</span> with{" "}
              <span className="font-semibold">5+ years</span> of experience
              building high-performance, scalable, and user-friendly{" "}
              <span className="font-semibold">web and mobile applications</span>{" "}
              using{" "}
              <span className="font-semibold">
                React.js, Next.js and React Native
              </span>
              . I love crafting pixel-perfect UIs, optimizing performance, and
              creating smooth user experiences.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-3 px-6 rounded-full shadow-lg shadow-sky-500/30 transition-transform hover:scale-105"
              >
                ⬇️ Download Resume
              </a>

              <a
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="cursor-pointer inline-block bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition transform hover:scale-105"
              >
                {hover ? "9502558103" : "📞 Contact Me"}
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <div>
                <p className="text-2xl font-bold text-sky-300">5+</p>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-fuchsia-300">10+</p>
                <p className="text-slate-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-300">3+</p>
                <p className="text-slate-400">
                  Domains (Insurance, E-com, SaaS)
                </p>
              </div>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto md:mx-0 mt-10 md:mt-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-amber-400 blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-full border border-slate-600/60 bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
              <Image
                src={myPhoto.src}
                alt="Mahesh Bairi Profile"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mt-16 md:mt-20 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-l-4 border-sky-400 pl-3">
            About Me
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            I enjoy turning complex requirements into simple, clean and
            intuitive interfaces. I focus on writing reusable, maintainable
            components, following best practices and collaborating closely with
            designers, backend engineers and stakeholders. I&apos;m comfortable
            working in agile teams, reviewing code, and mentoring junior
            developers.
          </p>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Technologies & Tools
          </h2>
          <p className="text-sm text-slate-400 text-center mb-8">
            These are the main technologies I use on a daily basis.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-slate-900/60 border border-slate-700/70 rounded-xl py-4 px-3 text-center text-sm md:text-base font-medium text-slate-100 shadow-lg shadow-black/40 hover:shadow-sky-500/30 hover:border-sky-400/80 transition-transform hover:scale-105"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* EXPERIENCE HIGHLIGHTS */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white text-center">
            Experience Highlights
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-sky-300 text-sm uppercase tracking-wide">
                Performance & Optimization
              </h3>
              <p className="text-slate-300 text-sm">
                Improved page load and interaction times by applying code
                splitting, lazy loading, memoization and optimizing bundle size
                in React / Next.js apps.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-fuchsia-300 text-sm uppercase tracking-wide">
                Scalable Architecture
              </h3>
              <p className="text-slate-300 text-sm">
                Built reusable component libraries and folder structures,
                integrated state management and followed clean code patterns for
                long-term maintainability.
              </p>
            </div>
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold mb-2 text-amber-300 text-sm uppercase tracking-wide">
                UI / UX Focused
              </h3>
              <p className="text-slate-300 text-sm">
                Translated Figma / design mocks into pixel-perfect UI, ensured
                responsive layouts, smooth micro-interactions and accessibility
                best practices.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-700/60 bg-slate-950/80 text-center py-4 mt-4">
        <p className="text-xs md:text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Mahesh Bairi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
