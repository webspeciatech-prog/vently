"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  sectionLabel: string;
  heading: string;
  headingAccent: string;
  items?: FAQItem[];
  certBadge: {
    icon: string;
    title: string;
    text: string;
  };
}

export default function FAQV2({
  sectionLabel,
  heading,
  headingAccent,
  items,
  certBadge,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = items && items.length > 0 ? items : [];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          {/* LEFT SIDE */}
          <div>
            <span className="text-brand-sky font-bold text-xs uppercase tracking-[0.3em] mb-6 block">
              {sectionLabel}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-10">
              {heading}{" "}
              <span className="text-brand-sky relative inline-block">
                {headingAccent}
                <span className="absolute left-0 -bottom-1 w-full h-0.75 bg-brand-sky/30 rounded-full" />
              </span>
            </h2>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/40 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-5 transition-transform duration-500 hover:scale-110">
                {certBadge.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight text-brand-navy">
                {certBadge.title}
              </h4>
              <p className="text-slate-500 leading-relaxed italic text-sm sm:text-base">
                "{certBadge.text}"
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FAQ */}
          <div className="space-y-5">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-3xl transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? "bg-white border-brand-sky/40 shadow-xl shadow-brand-sky/10"
                      : "bg-white border-slate-200 hover:border-brand-sky/30 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span
                      className={`font-semibold text-base sm:text-lg transition-colors ${
                        isOpen
                          ? "text-brand-sky"
                          : "text-brand-navy group-hover:text-brand-sky"
                      }`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ml-4 ${
                        isOpen
                          ? "bg-brand-sky border-brand-sky shadow-md shadow-brand-sky/20"
                          : "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-brand-sky/10 group-hover:border-brand-sky/40 group-hover:text-brand-sky"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-all duration-300 ${
                          isOpen ? "text-black rotate-180" : "text-current"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Accordion */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-8 pt-2">
                        <div className="w-12 h-0.5 bg-brand-sky/30 rounded-full mb-5" />
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
