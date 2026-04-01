"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.14),_transparent_24%),linear-gradient(180deg,_#08101d_0%,_#07111f_45%,_#020617_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
        <Header />

        <main className="space-y-24">
          <Hero />
          <About />
          <Projects />

          <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Experience />
            <Skills />
          </section>

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
