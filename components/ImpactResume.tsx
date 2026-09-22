import { profile, impactMetrics } from "@/lib/data";
import { Award, FileText, Download } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ImpactResume() {
  return (
    <section id="impact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card: IMPACT */}
        <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between space-y-8">
          <div>
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent-amber">
              IMPACT
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Latency reduced, systems scaled, migrations stabilized.
              </h2>
              {/* <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0a0f1d] px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:border-white/20 whitespace-nowrap self-start sm:self-center">
                  <Award className="h-3.5 w-3.5 text-accent-amber" />
                  <span>See all achievements</span>
                </button> */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactMetrics.map((m) => (
              <div
                key={m.title}
                className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    {m.company}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug mt-1">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: RESUME + GITHUB */}
        <div id="resume-github" className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              RESUME + GITHUB
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mt-3">
              Source code, engineering history, and detailed background.
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Browse my GitHub profile and access the current resume version.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-accent-teal/50 bg-accent-teal/10 px-5 py-3 text-sm font-medium text-accent-teal hover:bg-accent-teal/20 transition-all shadow-sm"
            >
              <FileText className="h-4 w-4" />
              <span>View Resume</span>
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#0a0f1d] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* GitHub Footprint Sub-card */}
          <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-5 space-y-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                GITHUB & ENGINEERING FOOTPRINT
              </span>
              <p className="text-base font-bold text-white mt-1">
                {profile.githubHandle}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Repository, contribution, and activity visibility are now updated.
              </p>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#121a2d] px-4 py-2 text-xs font-mono text-slate-200 hover:border-accent-teal/40 hover:text-accent-teal transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Visit GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}