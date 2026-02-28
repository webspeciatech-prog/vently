"use client";
import React from "react";

export interface CustomerCountProps {
  sectionLabel: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  reasons: {
    title: string;
    text: string;
    icon: string;
  }[];
  guaranteeBadge: {
    icon: string;
    title: string;
    text: string;
  };
  ctaLabel: string;
  ctaAction?: () => void;
}

export default function CustomerCount({
  sectionLabel,
  heading,
  headingAccent,
  subheading,
  reasons,
}: CustomerCountProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-sky/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sky/10 border border-brand-sky/20 text-brand-sky text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse" />
            {sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6 tracking-tight">
            {heading}{" "}
            <span className="text-brand-sky relative inline-block">
              {headingAccent}
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-brand-sky/30"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 50 20 100 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative p-8 lg:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-brand-sky/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-sky/10 transition-colors" />

              <div className="text-4xl mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 bg-slate-50 border border-slate-100 shadow-sm relative z-10">
                <span className="drop-shadow-sm">{r.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-sky transition-colors relative z-10">
                {r.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed font-medium relative z-10">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
