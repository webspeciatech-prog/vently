"use client";
import { useModal } from "@/context/ModalContext";

export type ServiceItem = {
  emoji: string;
  title: string;
  description: string;
  highlight?: string | null;
  accentColor: string;
  glowColor: string;
};

interface ServicesProps {
  sectionLabel: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  items: ServiceItem[];
  bottomPrompt: string;
  bottomCtaLabel: string;
}

export default function Services({
  sectionLabel,
  heading,
  headingAccent,
  subheading,
  items,
  bottomPrompt,
  bottomCtaLabel,
}: ServicesProps) {
  const { openModal } = useModal();

  return (
    <section
      id="services"
      className="py-20 lg:py-28 relative overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00132e 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-sky mb-4">
            {sectionLabel}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            {heading} <span className="text-brand-sky">{headingAccent}</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items?.map((svc) => (
            <div
              key={svc.title}
              onClick={openModal}
              className="group relative rounded-3xl bg-white p-8 transition-all duration-300 cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Hover Glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: svc.glowColor }}
              />

              {/* Highlight Badge */}
              {svc.highlight && (
                <span
                  className="absolute top-6 right-6 text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase"
                  style={{ backgroundColor: svc.accentColor }}
                >
                  {svc.highlight}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: svc.glowColor }}
              >
                {svc.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 grow">
                {svc.description}
              </p>

              {/* Button */}
              <button className="relative w-full py-4 px-6 rounded-xl font-semibold flex justify-between items-center border border-slate-200 bg-white overflow-hidden group/btn transition-all duration-300">
                {/* Sliding Background */}
                <span
                  className="absolute inset-0 w-0 group-hover/btn:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: svc.accentColor }}
                />

                {/* Text */}
                <span className="relative z-10 text-sm sm:text-base text-brand-navy group-hover/btn:text-white transition-colors duration-300">
                  Book Service Now
                </span>

                {/* Arrow */}
                <span className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 group-hover/btn:bg-white transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: svc.accentColor }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
