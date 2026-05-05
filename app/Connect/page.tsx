"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Connect() {
  return (
    <section id="connect" className="bg-[#f8f7f3] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER SECTION ── */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-black text-[#0d1b3e] mb-4">
            Contact Us
          </h1>
          <p className="text-[#5a5a7a] max-w-2xl mx-auto">
            Have questions about our JEE/NEET programs? Reach out to us for 
            expert guidance and admission details for the 2026 session[cite: 3].
          </p>
        </div>

        {/* ── FORM & NEWSLETTER GRID ── */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Main Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#eef2f3] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#1a3a6e] outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-[#eef2f3] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#1a3a6e] outline-none"
                />
              </div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#eef2f3] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#1a3a6e] outline-none"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-[#eef2f3] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#1a3a6e] outline-none"
              />
              <button className="bg-[#1a3a6e] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0d1b3e] transition-colors shadow-lg shadow-blue-100">
                Submit Button
              </button>
            </form>
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#5a6b7d] p-8 rounded-3xl text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Our Newsletters</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Stay updated with the latest exam schedules and campus news.
            </p>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white rounded-xl py-3 px-4 text-slate-900 text-sm mb-4 outline-none"
            />
            <button className="w-full bg-[#0d1b3e] text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors">
              Submit Button
            </button>
          </div>
        </div>

        {/* ── INFO CARDS ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-[#a8b8c0] p-8 rounded-3xl text-white flex flex-col items-center text-center">
            <Phone className="mb-4" size={28} />
            <h4 className="font-bold text-lg mb-2">+91 XXXXX XXXXX</h4>
            <p className="text-sm text-white/80">Call us for direct inquiry[cite: 4].</p>
          </div>
          
          {/* Email */}
          <div className="bg-[#cedde3] p-8 rounded-3xl text-[#0d1b3e] flex flex-col items-center text-center">
            <Mail className="mb-4" size={28} />
            <h4 className="font-bold text-lg mb-2">inspiredinstitute234@gmail.com</h4>
            <p className="text-sm text-slate-500">Official support email[cite: 4].</p>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <MapPin className="text-[#1a3a6e] mb-4" size={28} />
            <h4 className="font-bold text-lg mb-2 text-[#0d1b3e]">Vadodara, Gujarat</h4>
            <p className="text-sm text-slate-500">Visit our campus center[cite: 2].</p>
          </div>
        </div>

        {/* ── MAP PLACEHOLDER ── */}
        <div className="w-full h-80 bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
           {/* Replace this div with an iframe for Google Maps */}
           <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium italic">
             Interactive Map Integration (Vadodara Center)[cite: 2]
           </div>
        </div>

      </div>
    </section>
  );
}