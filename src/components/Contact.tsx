"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-sky-400/15 via-white/5 to-amber-300/15 p-8 md:p-10"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            If the role needs strong UI execution, I can contribute quickly.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            I am open to frontend opportunities involving React, Next.js, React
            Native, and modern product UI work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:9502558103"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            9502558103
          </a>
          <a
            href="mailto:maheshbairi3@gmail.com"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            maheshbairi3@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
