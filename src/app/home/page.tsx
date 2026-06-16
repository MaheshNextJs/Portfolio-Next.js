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
    <div className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#101828]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[linear-gradient(135deg,_#e0f2fe_0%,_#f8fafc_38%,_#ecfdf5_72%,_#fff7ed_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[640px] h-px bg-[#d8dee8]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-5 md:px-8 lg:px-10">
        <Header />

        <main className="space-y-16 md:space-y-20">
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
