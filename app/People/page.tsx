"use client";

import React, { useState } from "react";
import { Twitter, Linkedin, Github, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Dr. Aryan Sharma",
    role: "Head of Physics",
    bio: "With over 15 years of experience in JEE coaching, Dr. Sharma specializes in making conceptual physics intuitive and engaging for students.",
    image: "/faculty1.jpg",
  },
  {
    name: "Sneha Kapur",
    role: "Senior Biology Faculty",
    bio: "Sneha leads our NEET preparation wing, focusing on memory-mapping techniques and deep-dive conceptual understanding of Botany and Zoology[cite: 3].",
    image: "/faculty2.jpg",
  },
  {
    name: "Vikram Mehta",
    role: "Mathematics Mentor",
    bio: "A specialist in calculus and algebra, Vikram has helped hundreds of students achieve top ranks in competitive engineering exams[cite: 3].",
  },
  {
    name: "Priya Das",
    role: "Chemistry Specialist",
    bio: "Priya focuses on Organic and Inorganic chemistry, ensuring students master the foundational logic behind every reaction[cite: 3].",
  },
];

export default function People() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => setActiveIndex((prev) => (prev + 1) % team.length);
  const prevMember = () => setActiveIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <section id="people" className="relative bg-white py-24 overflow-hidden">
      {/* ── BACKGROUND WATERMARK ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="font-display text-[20vw] font-black whitespace-nowrap uppercase text-[#0d1b3e]">
          {team[activeIndex].name.split(" ")[1]}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1a3a6e] mb-2">Team Members</p>
        </div>

        {/* ── ACTIVE MEMBER DISPLAY ── */}
        <div className="flex flex-col items-center">
          {/* Main Background Image Silhouette */}
          <div className="w-full max-w-2xl aspect-square bg-slate-100 rounded-full mb-[-150px] opacity-20 grayscale" />

          {/* Member Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-8 max-w-xl w-full text-center border border-slate-50 relative">
            {/* Small Avatar */}
            <div className="w-24 h-24 bg-slate-200 rounded-2xl mx-auto mt-[-70px] mb-6 overflow-hidden border-4 border-white shadow-lg" />
            
            <h3 className="font-display text-3xl font-black text-[#0d1b3e] mb-1">
              {team[activeIndex].name}
            </h3>
            <p className="text-[#1a3a6e] font-bold text-sm mb-4 uppercase tracking-tighter">
              {team[activeIndex].role}
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-4 text-slate-400 mb-6">
              <Twitter size={18} className="hover:text-[#1a3a6e] cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-[#1a3a6e] cursor-pointer transition-colors" />
              <Github size={18} className="hover:text-[#1a3a6e] cursor-pointer transition-colors" />
              <Globe size={18} className="hover:text-[#1a3a6e] cursor-pointer transition-colors" />
            </div>

            <p className="text-[#5a5a7a] text-sm leading-relaxed mb-8">
              {team[activeIndex].bio}
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-1">
              <button 
                onClick={prevMember}
                className="bg-[#1a3a6e] text-white p-3 rounded-l-full hover:bg-[#0d1b3e] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextMember}
                className="bg-[#3b82f6] text-white p-3 rounded-r-full hover:bg-[#1d4ed8] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ── THUMBNAIL SELECTORS ── */}
        <div className="flex justify-center items-center gap-8 mt-20">
          {team.map((member, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                activeIndex === idx 
                  ? "border-[#1a3a6e] scale-125 shadow-xl" 
                  : "border-transparent grayscale opacity-40 hover:opacity-100"
              } bg-slate-200 overflow-hidden`}
            >
              {/* Profile Image placeholder */}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}