"use client";

import { useState } from "react";
import { skills, allSkillsList } from "@/lib/data";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Stack() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div>
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent-amber">
            SKILLS
          </span>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
              Frontend engineering, design systems, and mobile execution.
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              A modern stack focused on building pixel-perfect user interfaces, high-performance web applications, and seamless cross-platform mobile experiences.
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0f1d] px-4 py-1.5 text-xs font-mono text-slate-300 hover:border-accent-teal/50 hover:text-accent-teal transition-all shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-teal" />
            <span>{showAll ? "Hide full stack" : "See all skills"}</span>
          </button>
        </div>

        {/* Featured Skills Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0a0f1d] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">
                    {skill.name}
                  </h3>
                  <span className="rounded border border-white/10 bg-[#121a2d] px-2 py-0.5 font-mono text-xs text-accent-teal">
                    {skill.percentage}%
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  {skill.category}
                </span>
              </div>

              {/* Gradient Progress Bar */}
              <div className="w-full bg-slate-800/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-accent-teal via-cyan-400 to-accent-amber h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* <div className="pt-1">
                <span className="rounded-full border border-white/10 bg-[#121a2d] px-3 py-0.5 font-mono text-[12.5px] text-slate-400">
                  Featured
                </span>
              </div> */}
            </div>
          ))}
        </div>

        {/* Expandable All Skills list */}
        {showAll && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-fadeIn">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
              Complete Technical Footprint
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {allSkillsList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0f1d] px-3.5 py-2 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
