import { profile } from "@/lib/data";
import { FileText, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#080c14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-white transition-colors hover:text-accent-teal"
        >
          <span className="h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
          <span>{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 transition-colors hover:text-accent-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:border-white/20 hover:text-white transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-lg border border-accent-teal/40 bg-accent-teal/10 px-3.5 py-1.5 text-xs font-medium text-accent-teal hover:bg-accent-teal/20 transition-all shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
