"use client";
import { useModal } from "@/context/ModalContext";

export type BenefitItem = { icon: string; title: string; description: string; color: string };
export type StatItem = { v: string; l: string };
export type CertItem = string;

interface WhyUsProps {
  variant?: 1 | 2 | 3 | 4 | 5;
  sectionLabel: string;
  heading: string;
  headingAccent: string;
  body: string;
  certifications: CertItem[];
  stats: StatItem[];
  ctaLabel: string;
  ctaHref: string;
  benefits: BenefitItem[];
}

export default function WhyUs({
  variant = 1,
  sectionLabel, heading, headingAccent, body, certifications = [], stats = [], ctaLabel, ctaHref, benefits = [],
}: WhyUsProps) {
  const { openModal } = useModal();

  return (
    <section id="why-us" className="py-28 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(rgba(0,19,46,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,19,46,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-50 blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="section-label-light mb-6 inline-block bg-brand-sky/10 border-brand-sky/20">{sectionLabel}</div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
              {heading}{" "}
              <span className="text-brand-sky relative inline-block">
                {headingAccent}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-sky/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium max-w-xl">{body}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {certifications?.map((cert) => (
                <div key={cert} className="flex items-center gap-2 rounded-xl px-4 py-2 bg-white border border-slate-200 shadow-sm hover:border-brand-sky/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-brand-navy text-sm font-bold tracking-tight">{cert}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12">
              {stats?.map((s) => (
                <div key={s.l} className="relative group rounded-4xl p-6 text-center bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-b from-brand-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tighter mb-1 relative z-10 group-hover:text-brand-sky transition-colors">{s.v}</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest relative z-10">{s.l}</p>
                </div>
              ))}
            </div>

            <button onClick={openModal} className="btn-primary px-10 py-4 shadow-xl shadow-brand-sky/20 group">
              <span className="relative z-10 flex items-center gap-2 text-base">
                {ctaLabel}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right: bento grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:pl-10 relative">
            {/* Decorative background for the grid */}
            <div className="absolute inset-0 bg-brand-sky/5 rounded-[3rem] -m-6 hidden lg:block border border-brand-sky/10" />

            {benefits?.map((b) => (
              <div key={b.title}
                className="group relative rounded-[2.5rem] p-8 transition-all duration-500 border border-slate-100 bg-white hover:shadow-2xl hover:shadow-brand-sky/10 hover:-translate-y-2 z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-sky/10 transition-colors" />
                <div className="text-4xl mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-slate-50 border border-slate-100 shadow-sm relative z-10">
                  <span className="drop-shadow-sm">{b.icon}</span>
                </div>
                <h3 className="font-extrabold text-xl mb-3 text-brand-navy group-hover:text-brand-sky transition-colors relative z-10">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium relative z-10">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
