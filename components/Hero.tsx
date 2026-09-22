import Image from "next/image";
import { profile, featuredSkills, siteSections, statsOverview } from "@/lib/data";
import { Briefcase, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-8">
      {/* Main Hero Card */}
      <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10 items-start">
          {/* Left Column: Bio & Intro + Info Cards + CTA */}
          <div className="flex flex-col justify-between space-y-6 h-full">
            <div className="space-y-4">
              <span className="text-base sm:text-lg font-semibold uppercase tracking-widest text-accent-teal">
                {profile.roleLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]">
                {profile.tagline}
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl">
                {profile.bio}
              </p>
            </div>

            {/* Quick Info Cards (Moved here to fill space cleanly) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {statsOverview.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 flex flex-col justify-between space-y-1.5 hover:border-white/20 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-widest text-slate-300">
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {item.value}
                  </p>
                  {/* <p className="text-xs text-slate-400">
                    {item.subtext}
                  </p> */}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-between">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-accent-teal/50 bg-accent-teal/10 px-5 py-2.5 text-sm font-medium text-accent-teal hover:bg-accent-teal/20 transition-all shadow-sm"
              >
                <Briefcase className="h-4 w-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-accent-amber/50 bg-accent-amber/10 px-5 py-2.5 text-sm font-medium text-amber-300 hover:bg-accent-amber/20 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>Get in touch</span>
              </a>

              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Box with Skills & Navigation */}
          <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-6 flex flex-col space-y-6 shadow-xl">
            {/* Photo */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <Image
                priority
                fill
                src="/profile.png"
                alt={profile.name}
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Featured Skills */}
            <div>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Featured Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#121a2d] px-3.5 py-1 text-sm font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10 w-full" />
            {/* Site Sections */}
            <div>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Site Sections
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="rounded-full border border-white/10 bg-[#121a2d] px-3.5 py-1 text-sm font-medium text-slate-300 hover:border-accent-teal/50 hover:text-accent-teal transition-colors"
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
