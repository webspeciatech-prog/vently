"use client";
import React from "react";

export interface VerifiedAuthorityProps {
  sectionLabel: string;
  heading: string;
  authorities: {
    icon: string;
    title?: string;
    text?: string;
    detail: string;
  }[];
}

export default function VerifiedAuthority({
  sectionLabel,
  heading,
  authorities,
}: VerifiedAuthorityProps) {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="text-center mb-12">
            <span className="text-brand-sky font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
              {sectionLabel}
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">
              {heading}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {authorities.map((a, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-4xl mb-6 mx-auto group-hover:bg-brand-sky/10 group-hover:border-brand-sky/20 group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
                  {a.icon}
                </div>
                <h4 className="font-bold text-brand-navy mb-1">
                  {a.title || a.text}
                </h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
