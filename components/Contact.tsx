"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-[#0d1424] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-amber">
            CONTACT
          </span>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.15]">
              Let's build something exceptional together.
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              {profile.availability}. Whether you have a project in mind, an engineering role, or just want to connect — reach out directly.
            </p>
          </div>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left Column: Direct Info & Socials */}
          <div className="space-y-4">
            <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                DIRECT INBOX
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-accent-teal transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-accent-teal" />
                  <span>{profile.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#121a2d] px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white transition-all w-fit"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent-teal" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0f1d] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex items-center gap-3.5 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#121a2d] text-accent-teal group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
                    PROFESSIONAL
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-accent-teal transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0f1d] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex items-center gap-3.5 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#121a2d] text-accent-teal group-hover:scale-110 transition-transform">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
                    CODE REPOSITORY
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-accent-teal transition-colors">
                    GitHub Profile
                  </span>
                </div>
              </a>
            </div>

            <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-5 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#121a2d] text-accent-amber">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
                  BASE LOCATION
                </span>
                <span className="text-sm font-semibold text-white">
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-4 block">
              SEND A DIRECT MESSAGE
            </span>

            {submitted ? (
              <div className="p-6 text-center space-y-2 bg-accent-teal/10 border border-accent-teal/30 rounded-xl my-auto">
                <p className="text-sm font-bold text-accent-teal">Thank you for your message!</p>
                <p className="text-xs text-slate-300">I will review and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#121a2d] border border-white/10 focus:border-accent-teal rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-[#121a2d] border border-white/10 focus:border-accent-teal rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Vishal, I'd like to talk about..."
                    className="w-full bg-[#121a2d] border border-white/10 focus:border-accent-teal rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-accent-teal/50 bg-accent-teal/20 hover:bg-accent-teal/30 px-5 py-3 text-sm font-semibold text-accent-teal transition-all shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
