import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahesh Bairi | Frontend Developer",
  description: "Portfolio of Mahesh Bairi - Frontend Web & Mobile Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
