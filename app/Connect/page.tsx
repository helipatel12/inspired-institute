"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Call Us",
    value: "+91 XXXXX XXXXX",
    sub: "Mon–Sat, 9am–7pm",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "inspiredinstitute234@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <MapPin size={20} />,
    label: "Visit Us",
    value: "Vadodara, Gujarat",
    sub: "India",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-4">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-black mt-4" style={{ color: "var(--text)" }}>
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base" style={{ color: "var(--text-muted)" }}>
            Have questions about our JEE/NEET programs? Reach out for expert guidance
            and admission details for the 2026 session.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {contactInfo.map((c) => (
            <div key={c.label} className="card p-6 text-center">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}
              >
                {c.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
                {c.label}
              </p>
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{c.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Form + WhatsApp */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact form */}
          <div className="lg:col-span-2 card p-8">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>
              Send Us a Message
            </h2>
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "var(--text-muted)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                    style={{ background: "var(--muted)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "var(--text-muted)" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 99745 39118"
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                    style={{ background: "var(--muted)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors"
                  style={{ background: "var(--muted)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "var(--text-muted)" }}>
                  Course Interested In
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none"
                  style={{ background: "var(--muted)", border: "1px solid var(--border)", color: "var(--text)" }}
                >
                  <option value="">Select a course...</option>
                  <option>Class 6–10 Foundation</option>
                  <option>Class 11–12 Science</option>
                  <option>JEE Preparation</option>
                  <option>NEET Preparation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals or any questions..."
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none resize-none"
                  style={{ background: "var(--muted)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <button className="btn-primary w-full justify-center">
                Send Message
              </button>
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-col gap-5">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex items-center gap-4 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: "#e7fdf0" }}>
                💬
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>Chat on WhatsApp</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Get instant answers from our team
                </p>
              </div>
              <span className="ml-auto" style={{ color: "var(--primary)" }}>→</span>
            </a>

            {/* Hours */}
            <div className="card p-6">
              <h4 className="font-bold text-sm mb-4" style={{ color: "var(--text)" }}>Office Hours</h4>
              <div className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                  { day: "Saturday",        time: "9:00 AM – 5:00 PM" },
                  { day: "Sunday",          time: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="font-medium">{h.day}</span>
                    <span style={{ color: h.time === "Closed" ? "var(--red)" : "var(--primary)" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission note */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--primary)", color: "white" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                2026 Batch
              </p>
              <p className="font-bold text-sm">Admissions Open</p>
              <p className="text-white/60 text-xs mt-1">Limited seats available — apply early.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}