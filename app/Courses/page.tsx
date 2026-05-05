"use client";

import React from "react";
import { Search, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const courseList = [
  {
    title: "Class 6–10 Foundation",
    category: "Foundation",
    lessons: 120,
    students: "500+",
    rating: 4.9,
    price: "Enquire Now",
    icon: "📚",
  },
  {
    title: "JEE Main & Advanced Mastery",
    category: "Competitive",
    lessons: 350,
    students: "250+",
    rating: 5.0,
    price: "Enquire Now",
    icon: "🎯",
  },
  {
    title: "NEET Biology & Physics Intensive",
    category: "Medical",
    lessons: 320,
    students: "300+",
    rating: 4.8,
    price: "Enquire Now",
    icon: "🔬",
  },
  {
    title: "Class 11–12 Science Integrated",
    category: "Boards",
    lessons: 200,
    students: "450+",
    rating: 4.7,
    price: "Enquire Now",
    icon: "📊",
  },
  {
    title: "Olympiad & NTSE Prep",
    category: "Special",
    lessons: 80,
    students: "150+",
    rating: 4.9,
    price: "Enquire Now",
    icon: "🏅",
  },
  {
    title: "Personal Mentorship Program",
    category: "Premium",
    lessons: "Unlimited",
    students: "50+",
    rating: 5.0,
    price: "Enquire Now",
    icon: "🤝",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#f8f7f3] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="mb-12">
          <h1 className="font-display text-5xl font-black text-[#0d1b3e] mb-2">
            Courses Layout 2
          </h1>
          <p className="text-[#5a5a7a] text-sm italic">
            Courses that help beginners and advanced students become true achievers.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* ── SIDEBAR FILTERS ── */}
          <div className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search course..." 
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm outline-none focus:ring-1 focus:ring-[#1a3a6e]"
              />
              <Search className="absolute right-4 top-3 text-gray-400" size={18} />
            </div>

            <div>
              <h3 className="font-bold text-[#0d1b3e] mb-4 text-sm uppercase tracking-wider">Category</h3>
              <ul className="space-y-3 text-sm text-[#5a5a7a]">
                {["Foundation (12)", "JEE/NEET (24)", "Boards (18)", "Competitive (10)"].map(cat => (
                  <li key={cat} className="flex justify-between hover:text-[#1a3a6e] cursor-pointer transition-colors">
                    <span>{cat.split(' (')[0]}</span>
                    <span className="text-gray-400">({cat.split('(')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0d1b3e] mb-4 text-sm uppercase tracking-wider">Course Level</h3>
              <div className="space-y-3">
                {["Beginner", "Intermediate", "Advanced"].map(level => (
                  <label key={level} className="flex items-center gap-3 text-sm text-[#5a5a7a] cursor-pointer">
                    <input type="checkbox" className="accent-[#1a3a6e]" />
                    {level}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ── COURSE GRID ── */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <p className="text-xs text-gray-400 font-medium">Showing 1–6 of 24 results</p>
              <select className="bg-transparent text-xs font-bold text-[#0d1b3e] outline-none">
                <option>Default sorting</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courseList.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="h-40 bg-slate-100 relative">
                    <span className="absolute top-3 left-3 bg-[#1a3a6e] text-white text-[10px] font-bold px-2 py-1 rounded">
                      {c.category}
                    </span>
                    <div className="flex items-center justify-center h-full text-4xl">{c.icon}</div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-[#0d1b3e] mb-4 min-h-[40px] group-hover:text-[#1a3a6e] transition-colors leading-tight">
                      {c.title}[cite: 3]
                    </h4>
                    <div className="flex items-center justify-between text-gray-400 text-[10px] mb-4 border-b border-slate-50 pb-4">
                      <span className="flex items-center gap-1"><BookOpen size={12}/> {c.lessons} lessons</span>
                      <span className="flex items-center gap-1"><Users size={12}/> {c.students} Students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#f5c842] text-xs font-bold">
                        <Star size={12} fill="#f5c842"/> {c.rating}
                      </div>
                      <span className="text-sm font-black text-[#1a3a6e]">{c.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center gap-3 mt-12">
              <button className="w-10 h-10 rounded-full bg-[#1a3a6e] text-white font-bold text-sm">1</button>
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0d1b3e] font-bold text-sm">2</button>
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0d1b3e] font-bold text-sm">3</button>
            </div>
          </div>
        </div>

        {/* ── JOIN US CTA ── */}
        <div className="mt-24 bg-[#6366f1] rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
          <div className="relative z-10 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 block">Join Us</span>
            <h2 className="text-4xl font-display font-black mb-6">
              Join us and achieve <br /> your goals.[cite: 3]
            </h2>
            <p className="text-white/70 text-sm mb-8">
              Expert mentorship and conceptual clarity for JEE, NEET, and Science Board Exams 2026[cite: 3].
            </p>
            <button className="bg-[#f5c842] text-[#0d1b3e] px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
              Get started today
            </button>
          </div>
          <div className="relative mt-8 md:mt-0">
             {/* Character graphic placeholder as seen in image */}
             <div className="w-64 h-64 bg-white/20 rounded-full blur-3xl absolute -right-20 -top-20" />
             <div className="w-48 h-64 bg-slate-200 rounded-2xl relative z-10 flex items-center justify-center italic text-slate-400 text-xs text-center px-4">
               Faculty & Mentors Illustration[cite: 3]
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}