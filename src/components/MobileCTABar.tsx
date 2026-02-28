"use client";
import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";

interface MobileCTABarProps {
  phone: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function MobileCTABar({ phone, ctaLabel, ctaHref }: MobileCTABarProps) {
  const [visible, setVisible] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>
      {/* top glow line */}
      <div className="flex gap-4 p-4 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <a href={`tel:${phone.replace(/\D/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 font-bold py-4 rounded-xl text-sm text-brand-navy bg-slate-50 border border-slate-100 shadow-sm active:scale-95 transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now
        </a>
        <button onClick={openModal} className="btn-premium flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm cursor-pointer">
          <span className="relative z-10">📅 {ctaLabel}</span>
        </button>
      </div>
    </div>
  );
}
