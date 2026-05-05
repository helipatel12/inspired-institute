"use client";

import React from "react";
import { ArrowRight, Clock } from "lucide-react";

const secondaryPosts = [
  {
    title: "From Ideas to Impact in a Student's Journey",
    date: "May 20, 2026",
  },
  {
    title: "Navigating the JEE Landscape with Insights",
    date: "May 18, 2026",
  },
  {
    title: "Behind the Scenes of Our Science Lab",
    date: "May 15, 2026",
  },
];

const articleGrid = [
  { title: "Empowering Future Scientists: Success Unveiled", date: "May 12, 2026" },
  { title: "Thriving in a Dynamic Academic Landscape", date: "May 10, 2026" },
  { title: "Strategies Propelling Students to Success", date: "May 08, 2026" },
  { title: "Pioneering the Future in Our Physics Showcase", date: "May 05, 2026" },
  { title: "AI's Impact on Modern Science Education", date: "May 03, 2026" },
  { title: "Healthy Study Habits for a Busy Lifestyle", date: "May 01, 2026" },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#f8f7f3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ── TOP HEADER ── */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0d1b3e] mb-4">
            Our Insightful <span className="border-b-4 border-[#1a3a6e]">Blog</span>
          </h2>
          <p className="text-[#5a5a7a] max-w-2xl mx-auto text-sm">
            Explore articles on JEE/NEET preparation, conceptual science learning, 
            and student success stories from Inspired Institute.
          </p>
        </div>

        {/* ── FEATURED SECTION ── */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {/* Main Featured Post */}
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl bg-[#0d1b3e] h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="flex items-center gap-2 text-white/70 text-xs mb-3">
                <Clock size={14} /> <span>May 05, 2026</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4 group-hover:text-[#f5c842] transition-colors">
                Exploring Future Science & Tech Innovations
              </h3>
              <p className="text-white/60 text-sm max-w-md line-clamp-2">
                Embark on a journey with us as we delve into the realms of innovation 
                and the transformative power of conceptual education[cite: 3].
              </p>
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className="flex flex-col gap-6">
            {secondaryPosts.map((post, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-24 h-24 bg-slate-200 rounded-2xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0d1b3e] text-sm leading-snug group-hover:text-[#1a3a6e] transition-colors mb-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-2">
                    <Clock size={12} /> <span>{post.date}</span>
                  </div>
                  <button className="text-[10px] font-bold flex items-center gap-1 text-[#1a3a6e] uppercase tracking-wider">
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECONDARY HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h3 className="font-display text-3xl font-black text-[#0d1b3e]">
              Explore Our Latest <span className="border-b-4 border-[#1a3a6e]">Articles</span>
            </h3>
          </div>
          <p className="text-[#5a5a7a] text-xs max-w-xs leading-relaxed">
            Stay updated with the latest educational trends and scientific 
            breakthroughs shared by our expert faculty[cite: 3].
          </p>
        </div>

        {/* ── ARTICLES GRID ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articleGrid.map((article, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-48 bg-slate-100" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-3">
                  <Clock size={12} /> <span>{article.date}</span>
                </div>
                <h4 className="font-bold text-[#0d1b3e] mb-4 line-clamp-2 group-hover:text-[#1a3a6e] transition-colors">
                  {article.title}
                </h4>
                <button className="text-[10px] font-bold flex items-center gap-1 text-[#1a3a6e] uppercase tracking-wider">
                  Read More <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── VIEW ALL BUTTON ── */}
        <div className="text-center">
          <button className="bg-[#0d1b3e] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-xl shadow-slate-200">
            View all articles
          </button>
        </div>

      </div>
    </section>
  );
}