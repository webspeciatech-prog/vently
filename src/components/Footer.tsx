"use client";

export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContact = { icon: string; label: string; href?: string };
export type FooterCert = string;
export type SocialLink = { initial: string; href: string; label: string };

interface FooterProps {
  variant?: 1 | 2 | 3 | 4 | 5;
  logo: { name: string; accent: string };
  tagline: string;
  socials: SocialLink[];
  columns: FooterColumn[];
  contact: FooterContact[];
  certifications: FooterCert[];
  phone: string;
  email: string;
  bottomLeft: string;
  bottomRight: string;
}

export default function Footer({
  logo,
  tagline,
  socials,
  columns,
  contact,
  certifications,
  phone,
  email,
  bottomLeft,
  bottomRight,
}: FooterProps) {
  return (
    <footer className="bg-sky-400 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-brand-sky flex items-center justify-center shadow-md">
                <span className="text-brand-navy font-bold text-lg">✓</span>
              </div>

              <span className="text-brand-navy font-bold text-2xl uppercase tracking-tight">
                {logo.name}
                <span className="text-brand-sky">{logo.accent}</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xs">
              {tagline}
            </p>

            {/* <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 text-sm font-semibold transition-all hover:bg-brand-sky hover:border-brand-sky hover:text-brand-navy shadow-sm"
                >
                  {s.initial}
                </a>
              ))}
            </div> */}
          </div>

          {/* LINK COLUMNS */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-6">
                {col.heading}
              </h4>

              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-slate-600 text-sm hover:text-brand-sky transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h4 className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-6">
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-brand-sky transition-colors"
              >
                <span className="text-brand-sky">📞</span>
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-brand-sky transition-colors"
              >
                <span className="text-brand-sky">✉️</span>
                {email}
              </a>

              {contact.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span className="text-brand-sky shrink-0">{c.icon}</span>
                  <span dangerouslySetInnerHTML={{ __html: c.label }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>{bottomLeft}</p>
          <p>{bottomRight}</p>
        </div>
      </div>
    </footer>
  );
}
