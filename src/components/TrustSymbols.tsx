import React from "react";

interface TrustSymbol {
  icon: string;
  text: string;
}

interface TrustSymbolsProps {
  symbols: TrustSymbol[];
}

export default function TrustSymbolsV2({ symbols }: TrustSymbolsProps) {
  if (!symbols || symbols.length === 0) return null;

  return (
    <section className="py-12 bg-white flex justify-center border-y border-slate-100">
      <div className="flex flex-wrap justify-center gap-8 px-4 max-w-7xl mx-auto">
        {symbols.map((sym, i) => (
          <div key={i} className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
            <span className="text-2xl">{sym.icon}</span>
            <span className="font-semibold text-brand-navy">{sym.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
