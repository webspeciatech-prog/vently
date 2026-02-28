"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [webhookUrl, setWebhookUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("vently_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      const savedWebhook = localStorage.getItem("vently_webhook_url") || "";
      setWebhookUrl(savedWebhook);
      loadLeads();
    } else {
      router.push("/login");
      setLoading(false);
    }
  }, [router]);

  const loadLeads = () => {
    setLoading(true);
    const saved = JSON.parse(localStorage.getItem("vently_leads") || "[]");
    setLeads(saved);
    setLoading(false);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("vently_webhook_url", webhookUrl);
    alert("Settings saved successfully!");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("vently_admin_auth");
    router.push("/login");
  };

  const deleteLead = (id: string) => {
    if (!confirm("Are you sure?")) return;
    const updated = leads.filter(l => l.id !== id);
    localStorage.setItem("vently_leads", JSON.stringify(updated));
    setLeads(updated);
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["Date", "Name", "Phone", "Email", "Service", "Zip"];
    const rows = leads.map(l => [
      new Date(l.timestamp).toLocaleDateString(),
      l.name,
      l.phone,
      l.email,
      l.service,
      l.zip
    ]);
    
    const csvContent = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vently_leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return <div className="py-40 flex items-center justify-center text-emerald-500">Loading...</div>;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="bg-[#0a0f1e] text-slate-100 pb-20 pt-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Admin Panel</h1>
            <p className="text-slate-400">Manage leads and configure system integrations</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={exportCSV}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              📊 Export CSV
            </button>
            <button 
              onClick={handleLogout}
              className="px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold hover:bg-red-500/20 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content: Leads List */}
          <div className="lg:col-span-2 space-y-8">
            {/* Analytics Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: "Total Leads", value: leads.length, color: "emerald", icon: "💎" },
                { label: "Today", value: leads.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length, color: "cyan", icon: "⚡" },
                { label: "Pending", value: leads.length, color: "blue", icon: "⏳" }
              ].map(stat => (
                <div key={stat.label} className="glass p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest text-${stat.color}-400`}>Active</span>
                  </div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Leads Table */}
            {leads.length === 0 ? (
              <div className="glass p-20 rounded-3xl text-center border border-white/5">
                <div className="text-6xl mb-6 opacity-30">📭</div>
                <h2 className="text-xl font-bold text-white mb-2">No leads yet</h2>
                <p className="text-slate-500 max-w-xs mx-auto text-sm">New inquiries will appear here automatically.</p>
              </div>
            ) : (
              <div className="glass rounded-3xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/2 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Service</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-white/1 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-bold text-white text-sm">{lead.name}</p>
                            <p className="text-[10px] text-slate-500 italic mb-1">{lead.phone} · {lead.zip}</p>
                            <span className="text-[9px] text-slate-600">{new Date(lead.timestamp).toLocaleString()}</span>
                          </td>
                          <td className="px-6 py-4 lowercase">
                            <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                              {lead.service}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => deleteLead(lead.id)} className="opacity-0 group-hover:opacity-100 p-2 text-red-500/50 hover:text-red-500 transition-all font-bold text-xs uppercase tracking-tighter">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Settings */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-3xl border border-white/10 sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20">⚙️</div>
                <h2 className="text-xl font-bold text-white leading-none">Settings</h2>
              </div>
              
              <form onSubmit={handleSaveSettings} className="space-y-5">
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">Webhook URL (Zapier/Make/etc)</label>
                  <input 
                    type="url" 
                    placeholder="https://hooks.zapier.com/..."
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white text-sm outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700"
                  />
                  <p className="text-[10px] text-slate-600 mt-2 leading-relaxed italic">
                    All new leads will be sent to this URL as a POST request.
                  </p>
                </div>
                <button type="submit" className="btn-premium w-full py-3.5 rounded-xl font-bold text-sm">
                  Save Configuration
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">System Health</p>
                <div className="flex items-center justify-between text-xs text-slate-400 py-1.5 px-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <span>Database Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Local Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
