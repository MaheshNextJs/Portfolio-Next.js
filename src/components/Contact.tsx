"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-lg border border-[#bae6fd] bg-[#e8f1ff] p-6 shadow-[0_20px_60px_rgba(37,99,235,0.12)] md:p-10"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-[#2563eb]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#101828] md:text-4xl">
            If the role needs strong UI execution, I can contribute quickly.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#475467]">
            I am open to frontend opportunities involving React, Next.js, React
            Native, and modern product UI work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:9502558103"
            className="rounded-lg border border-[#101828] bg-[#101828] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
          >
            9502558103
          </a>
          <a
            href="mailto:maheshbairi3@gmail.com"
            className="rounded-lg border border-[#d0d5dd] bg-white px-5 py-3 text-sm font-bold text-[#101828] transition hover:-translate-y-0.5 hover:border-[#0f766e]"
          >
            maheshbairi3@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
