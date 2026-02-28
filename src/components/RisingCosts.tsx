"use client";
import Image from "next/image";

export interface RisingCostsProps {
  sectionLabel: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  image: {
    src: string;
    alt: string;
    badgeTitle: string;
    badgeText: string;
  };
  alert: {
    icon: string;
    text: string;
  };
  factors: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function RisingCosts({
  sectionLabel,
  heading,
  headingAccent,
  subheading,
  image,
  alert,
  factors,
}: RisingCostsProps) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-brand-sky/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sky/10 border border-brand-sky/20 text-brand-sky text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse" />
                {sectionLabel}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy leading-tight mb-4">
                {heading}{" "}
                <span className="text-brand-sky">{headingAccent}</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-64 shadow-xl border-4 border-white group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-brand-sky font-bold text-xs uppercase tracking-widest mb-1">
                  {image.badgeTitle}
                </p>
                <p className="text-white text-sm sm:text-base font-medium">
                  {image.badgeText}
                </p>
              </div>
            </div>

            {/* Alert Box */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-xl">
                {alert.icon}
              </div>
              <p className="text-sm sm:text-base font-semibold text-brand-navy">
                {alert.text}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-0.5 bg-linear-to-b from-brand-sky/50 via-brand-sky/20 to-transparent" />

            <div className="space-y-6">
              {factors.map((f, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="hidden sm:block absolute -left-2.25 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-sky border-4 border-white shadow" />

                  {/* Icon */}
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-3xl border border-slate-100">
                    {f.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                      {f.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
