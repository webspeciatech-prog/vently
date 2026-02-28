"use client";
import React, { useState, useEffect } from "react";

export interface ActivityToastProps {
  activities: {
    zip: string;
    service: string;
  }[];
}

export default function ActivityToast({ activities }: ActivityToastProps) {
  const [current, setCurrent] = useState<typeof activities[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showRandom = () => {
      const random = activities[Math.floor(Math.random() * activities.length)];
      setCurrent(random);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimer = setTimeout(showRandom, 8000);
    
    // Interval
    const interval = setInterval(showRandom, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <div 
      className={`fixed bottom-24 left-4 md:left-8 z-40 transition-all duration-700 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-4 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl p-5 shadow-2xl shadow-slate-200/50 max-w-xs group overflow-hidden relative">
        {/* Animated accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-sky" />
        
        <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
          <span className="text-2xl">✨</span>
        </div>
        
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-[10px] text-brand-sky font-bold uppercase tracking-[0.2em] mb-1">Live Activity</p>
          <p className="text-sm text-brand-navy font-medium leading-normal">
            Someone from <span className="font-bold underline decoration-brand-sky/30">{current.zip}</span> just booked <span className="text-brand-sky font-bold uppercase text-[10px] tracking-widest">{current.service}</span>
          </p>
          <p className="text-[9px] text-slate-400 mt-1 font-medium italic">Verified 2 minutes ago</p>
        </div>

        <button 
          onClick={() => setVisible(false)}
          className="text-slate-300 hover:text-brand-navy transition-colors shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
