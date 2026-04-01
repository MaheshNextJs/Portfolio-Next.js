"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
      Copyright {new Date().getFullYear()} Mahesh Bairi. Built with Next.js and
      Tailwind CSS.
    </footer>
  );
}
