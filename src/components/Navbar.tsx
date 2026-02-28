"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export type NavLink = { label: string; href: string };

interface NavbarProps {
  logo: { name: string; accent: string };
  links: NavLink[];
  phone: string;
  ctaLabel: string;
}

export default function Navbar({ logo, links, phone, ctaLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
          : "bg-gradient-to-b from-white/80 via-white/40 to-transparent backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-sky flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-brand-navy font-bold text-lg">✓</span>
            </div>

            <span className="font-bold text-2xl tracking-tight text-brand-navy uppercase">
              {logo.name}
              <span className="text-brand-sky">{logo.accent}</span>
            </span>
          </Link>

          {/* LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-sky transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="hidden md:flex items-center gap-2 text-brand-navy font-semibold text-sm"
            >
              📞 {phone}
            </a>

            <button
              onClick={openModal}
              className="px-6 py-3 rounded-xl bg-brand-sky text-brand-navy font-semibold text-sm shadow-md hover:bg-brand-navy hover:text-white transition-all active:scale-95"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
