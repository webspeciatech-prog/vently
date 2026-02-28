"use client";
import React, { useRef, useEffect, useState } from "react";

export interface ReviewSliderProps {
  heading: string;
  badgeText: string;
  googleRatingText: string;
  reviews: {
    name: string;
    text: string;
    avatar: string;
    color: string;
  }[];
}

export default function ReviewSlider({
  heading,
  badgeText,
  googleRatingText,
  reviews,
}: ReviewSliderProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const loopReviews = [...reviews, ...reviews];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let paused = false;
    const speed = 0.5;

    const updateActive = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const containerCenter = el.scrollLeft + el.offsetWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = i;
        }
      });

      setActiveIndex(closest);
    };

    const animate = () => {
      if (!paused) {
        el.scrollLeft += speed;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }

        updateActive();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    el.addEventListener("mouseenter", () => (paused = true));
    el.addEventListener("mouseleave", () => (paused = false));

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1 text-amber-400 text-lg">★★★★★</div>
              <span className="font-bold text-brand-navy text-lg">
                {badgeText}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
              {heading}
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-4 h-4"
            />
            <span className="text-xs font-bold text-slate-500">
              {googleRatingText}
            </span>
          </div>
        </div>
      </div>

      {/* 3D Slider */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden px-6 md:px-[12%]"
        style={{ perspective: "1400px" }}
      >
        {loopReviews.map((r, i) => {
          const diff = i - activeIndex;

          let scale = 0.85;
          let rotate = 0;
          let opacity = 0.4;
          let blur = 3;

          if (diff === 0) {
            scale = 1;
            rotate = 0;
            opacity = 1;
            blur = 0;
          } else if (diff === -1) {
            scale = 0.92;
            rotate = 8;
            opacity = 0.7;
            blur = 1;
          } else if (diff === 1) {
            scale = 0.92;
            rotate = -8;
            opacity = 0.7;
            blur = 1;
          }

          return (
            <div
              key={i}
              className="shrink-0 w-70 md:w-90 transition-all duration-500"
              style={{
                transform: `scale(${scale}) rotateY(${rotate}deg)`,
                opacity,
                filter: `blur(${blur}px)`,
              }}
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold`}
                  >
                    {r.avatar}
                  </div>
                  <h4 className="font-bold text-brand-navy">{r.name}</h4>
                </div>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  "{r.text}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
