"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PROFILES = [
  { id: "admin", name: "Executive Admin", img: "👤", color: "from-emerald-400 to-cyan-500" },
  { id: "guest", name: "Guest Viewer", img: "👁️", color: "from-slate-400 to-slate-600" },
];

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(PROFILES[0].id);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "vently_admin") {
      sessionStorage.setItem("vently_admin_auth", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid secret key");
    }
  };

  return (
    <div className="min-h-screen bg-[#040812] flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m-6.364.636l.707.707M3 12h1m.636 6.364.707-.707M12 21v-1m6.364-.636-.707-.707M21 12h-1m-.636-6.364-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-2xl tracking-tighter">Vently<span className="text-emerald-400">Admin</span></span>
            </div>
            <h1 className="text-xl font-bold text-white">Welcome Back</h1>
            <p className="text-slate-500 text-sm mt-1">Select profile and enter your credentials</p>
          </div>

          {/* Profile Selection */}
          <div className="flex justify-center gap-6 mb-10">
            {PROFILES.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfile(p.id)}
                className={`group relative flex flex-col items-center gap-2 transition-all duration-300 ${selectedProfile === p.id ? "scale-110" : "opacity-40 hover:opacity-70 scale-95"}`}
              >
                <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${p.color} flex items-center justify-center text-4xl shadow-xl transition-transform duration-300 group-hover:rotate-6`}>
                  {p.img}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedProfile === p.id ? "text-emerald-400" : "text-slate-400"}`}>
                  {p.name}
                </span>
                {selectedProfile === p.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#071120] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" required placeholder="Username"
                  className="w-full rounded-2xl px-5 py-4 bg-white/5 border border-white/10 text-white outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                  value={username} onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative">
                <input 
                  type="password" required placeholder="Secret Key"
                  className="w-full rounded-2xl px-5 py-4 bg-white/5 border border-white/10 text-white outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn-premium w-full py-4.5 rounded-2xl font-black text-sm shadow-xl shadow-emerald-500/10 cursor-pointer mt-2">
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center mb-3">Temporary Test Access</p>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] text-slate-400 flex justify-between px-4 py-2 bg-white/5 rounded-lg border border-white/5 font-mono">
                <span className="text-slate-600">User ID:</span>
                <span className="text-emerald-400">admin_demo</span>
              </p>
              <p className="text-[11px] text-slate-400 flex justify-between px-4 py-2 bg-white/5 rounded-lg border border-white/5 font-mono">
                <span className="text-slate-600">Password:</span>
                <span className="text-emerald-400">vently_admin</span>
              </p>
            </div>
          </div>

          <p className="text-center text-[10px] text-slate-600 mt-8 font-bold uppercase tracking-[0.2em]">
            Protected Environment · v4.0.2
          </p>
        </div>
      </div>
    </div>
  );
}
