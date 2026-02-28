"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

interface HeroProps {
  badge: string;
  headline: {
    main: string;
    accent: string;
    highlight: string;
  };
  subtext: string;
  benefits: string[];
  primaryCta: {
    label: string;
    href?: string;
    modal?: boolean;
  };
  phone: string;
  image: {
    src: string;
    alt: string;
  };
  stats?: {
    icon: string;
    value: string;
    label: string;
  }[];
}

export default function Hero({
  headline,
  subtext,
  benefits,
  primaryCta,
  phone,
  image,
  stats,
}: HeroProps) {
  const { openModal } = useModal();

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-0 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full">
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#00132e] leading-tight tracking-tight mb-6">
              {headline.main}{" "}
              <span className="text-[#67b1e1]">{headline.accent}</span>{" "}
              {headline.highlight}
            </h1>

            <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-xl">
              {subtext}
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#67b1e1] text-lg mt-1">✓</span>
                  <span className="text-[#00132e] font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {primaryCta.modal ? (
                <button
                  onClick={openModal}
                  className="px-8 py-4 rounded-xl bg-[#ffcc00] hover:bg-[#ffb300] text-[#00132e] font-bold text-base sm:text-lg shadow-md hover:-translate-y-1 transition-all"
                >
                  {primaryCta.label}
                </button>
              ) : (
                <Link
                  href={primaryCta.href || "#"}
                  className="px-8 py-4 rounded-xl bg-[#ffcc00] hover:bg-[#ffb300] text-[#00132e] font-bold text-base sm:text-lg shadow-md hover:-translate-y-1 transition-all text-center"
                >
                  {primaryCta.label}
                </Link>
              )}

              <a
                href={`tel:${phone}`}
                className="px-6 py-4 rounded-xl border-2 border-gray-200 font-semibold text-[#00132e] hover:bg-gray-50 transition-all text-center"
              >
                📞 {phone}
              </a>
            </div>

            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-6 max-w-md">
                {stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-lg sm:text-xl font-bold text-[#00132e]">
                      {s.value}
                    </p>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-70 sm:h-95 md:h-112.5 lg:h-137.5">
            <div className="relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#67b1e1]/10 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
