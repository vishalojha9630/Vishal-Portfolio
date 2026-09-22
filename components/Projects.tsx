import { projects } from "@/lib/data";
import { BookOpen, LayoutGrid } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent-amber">
              PROJECTS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15] max-w-3xl">
              Featured work across scalable web apps, interactive dashboards, and mobile platforms.
            </h2>
          </div>

          {/* <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0f1d] px-4 py-2 text-xs font-mono text-slate-300 hover:border-white/20 hover:text-white transition-all w-fit shadow-sm"
          >
            <LayoutGrid className="h-3.5 w-3.5 text-slate-400" />
            <span>Browse all projects</span>
          </a> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-[#0a0f1d] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="space-y-3">
                {/* <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {p.category}
                </span> */}

                <h3 className="text-xl font-bold text-white leading-snug">
                  {p.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-300 pt-1">
                  {p.description}
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-[#121a2d] px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Case Study Button */}
                {/* <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-all w-fit"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Open case study</span>
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
