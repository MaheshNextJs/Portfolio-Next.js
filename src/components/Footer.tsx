"use client";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-[#d0d5dd] pt-6 text-sm font-medium text-[#667085]">
      Copyright {new Date().getFullYear()} Mahesh Bairi. Built with Next.js and
      Tailwind CSS.
    </footer>
  );
}
