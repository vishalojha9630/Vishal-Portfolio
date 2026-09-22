import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// const display = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-display",
// });

// const body = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-body",
// });

// const mono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

export const metadata: Metadata = {
  title: "Vishal Ojha | Senior Frontend Developer",
  description:
    "Senior Frontend Developer building scalable web & mobile apps with high performance and scalability.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      {/* <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-background text-slate-200 antialiased min-h-screen selection:bg-accent-teal/30 selection:text-white`}
      > */}
      <body className="font-sans bg-background text-slate-200 antialiased min-h-screen selection:bg-accent-teal/30 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
