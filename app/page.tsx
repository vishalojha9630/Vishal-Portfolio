import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import ImpactResume from "@/components/ImpactResume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen py-10 bg-[#080c14] bg-ambient-glow text-slate-200">
      <Hero />
      <Experience />
      <Stack />
      <Projects />
      <ImpactResume />
      <Contact />
    </main>
  );
}
