"use client";
import React, { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";

interface LeadModalProps {
  phone: string;
  standalone?: boolean;
  webhookUrl?: string;
}

export default function LeadModal({ phone, webhookUrl }: LeadModalProps) {
  const { isModalOpen, closeModal } = useModal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    zip: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Autofill phone if provided
  useEffect(() => {
    if (phone) {
      setForm((prev) => ({ ...prev, phone }));
    }
  }, [phone]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const leadData = {
      ...form,
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    const existingLeads = JSON.parse(
      localStorage.getItem("vently_leads") || "[]",
    );

    localStorage.setItem(
      "vently_leads",
      JSON.stringify([leadData, ...existingLeads]),
    );

    const targetWebhook =
      webhookUrl || localStorage.getItem("vently_webhook_url");

    if (targetWebhook) {
      try {
        await fetch(targetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (err) {
        console.error("Webhook failed:", err);
      }
    }

    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-2xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 bg-slate-50 border border-slate-200 outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky";

  const services = [
    "Air Duct Cleaning",
    "Dryer Vent Cleaning",
    "Chimney Cleaning",
    "Furnace Cleaning",
    "Air Quality Testing",
    "UV Light Installation",
    "Multiple Services",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 animate-scaleIn">
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition"
        >
          ✕
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-brand-navy mb-3">
                You're All Set!
              </h3>
              <p className="text-slate-500 mb-6">
                Our specialist will call you at{" "}
                <strong className="text-brand-sky">{form.phone}</strong> within
                15 minutes.
              </p>

              <button
                onClick={closeModal}
                className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-sky transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-brand-sky/10 text-brand-sky text-xs font-bold uppercase tracking-wider mb-3">
                  Priority Service
                </span>

                <h2 className="text-4xl font-extrabold text-brand-navy mb-3">
                  Schedule Free{" "}
                  <span className="text-brand-sky">Inspection</span>
                </h2>

                <p className="text-slate-500">
                  Or call{" "}
                  <a
                    href={`tel:${phone}`}
                    className="text-brand-sky font-bold hover:underline"
                  >
                    {phone}
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select Service Type
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <input
                    required
                    maxLength={5}
                    placeholder="Zip Code"
                    value={form.zip}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        zip: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-brand-navy text-black font-bold py-4 hover:bg-brand-sky transition disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Claim Priority Inspection →"}
                </button>

                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                  Secure & Encrypted • No Obligation Quote
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
