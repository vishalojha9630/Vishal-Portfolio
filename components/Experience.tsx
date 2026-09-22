import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div>
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent-amber">
            EXPERIENCE
          </span>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
              Production systems, platform thinking, and measurable impact.
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Roles where I shipped high-throughput dashboards, mobile apps, internal tools, and performance improvements across frontend-heavy teams.
            </p>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {experience.map((job) => (
            <div
              key={job.company + job.period}
              className="bg-[#0a0f1d] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg group hover:shadow-cyan-950/20"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-accent-teal">
                    {job.company} • {job.location}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {job.summary}
                </p>

                {job.highlights && (
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-white/5 pt-3">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-teal mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-4">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-[#121a2d] px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
