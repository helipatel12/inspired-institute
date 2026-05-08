"use client";

import React from "react";
import { ArrowRight, Clock } from "lucide-react";

const secondaryPosts = [
  { title: "From Ideas to Impact in a Student's Journey",      date: "May 20, 2026" },
  { title: "Navigating the JEE Landscape with Confidence",     date: "May 18, 2026" },
  { title: "Behind the Scenes of Our Science Lab",             date: "May 15, 2026" },
];

const articleGrid = [
  { title: "Empowering Future Scientists: Success Unveiled",   date: "May 12, 2026", tag: "Success Stories" },
  { title: "Thriving in a Dynamic Academic Landscape",         date: "May 10, 2026", tag: "Study Tips" },
  { title: "Strategies Propelling Students to Success",        date: "May 08, 2026", tag: "Exam Prep" },
  { title: "Pioneering the Future in Our Physics Showcase",    date: "May 05, 2026", tag: "Events" },
  { title: "AI's Impact on Modern Science Education",          date: "May 03, 2026", tag: "Trends" },
  { title: "Healthy Study Habits for a Busy Lifestyle",        date: "May 01, 2026", tag: "Wellness" },
];

const tagColors: Record<string, string> = {
  "Success Stories": "var(--accent)",
  "Study Tips":      "var(--primary)",
  "Exam Prep":       "var(--red)",
  "Events":          "#7c3aed",
  "Trends":          "#0369a1",
  "Wellness":        "#065f46",
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-4">From Our Desk</span>
          <h1 className="font-display text-5xl font-black mt-4" style={{ color: "var(--text)" }}>
            Our Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm" style={{ color: "var(--text-muted)" }}>
            Explore articles on JEE/NEET preparation, conceptual science learning,
            and student success stories from Inspired Institute.
          </p>
        </div>

        {/* Featured section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Main featured post */}
          <div
            className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl h-[480px] flex flex-col justify-end p-8"
            style={{ background: "linear-gradient(to top, var(--primary-dark) 40%, rgba(10,77,53,0.3) 100%)" }}
          >
            <span
              className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "var(--accent)", color: "white" }}
            >
              Featured
            </span>
            <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
              <Clock size={13} /> <span>May 25, 2026</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
              Exploring Future Science & Tech Innovations
            </h3>
            <p className="text-white/60 text-sm max-w-md line-clamp-2 mb-4">
              Join us as we dive into the realm of innovation and the transformative power
              of conceptual education for the next generation of scientists and engineers.
            </p>
            <button className="self-start flex items-center gap-2 text-xs font-bold text-white border border-white/30 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">
              Read More <ArrowRight size={13} />
            </button>
          </div>

          {/* Sidebar posts */}
          <div className="flex flex-col gap-5">
            {secondaryPosts.map((post, i) => (
              <div key={i} className="card p-4 flex gap-4 group cursor-pointer">
                <div
                  className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: "var(--muted)" }}
                >
                  📖
                </div>
                <div>
                  <h4
                    className="font-bold text-sm leading-snug group-hover:text-[var(--primary)] transition-colors mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-faint)" }}>
                    <Clock size={11} /> <span className="text-xs">{post.date}</span>
                  </div>
                  <button
                    className="flex items-center gap-1 mt-2 text-[11px] font-bold uppercase tracking-wide transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    Read <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles grid header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="font-display text-3xl font-black" style={{ color: "var(--text)" }}>
            Latest Articles
          </h2>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Stay updated with the latest educational trends and insights shared by our expert faculty.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {articleGrid.map((article, idx) => (
            <div key={idx} className="card overflow-hidden group cursor-pointer">
              <div
                className="h-44 flex items-center justify-center text-5xl"
                style={{ background: "var(--muted)" }}
              >
                📝
              </div>
              <div className="p-6">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: `${tagColors[article.tag]}20`,
                    color: tagColors[article.tag],
                  }}
                >
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 mb-3" style={{ color: "var(--text-faint)" }}>
                  <Clock size={11} /> <span className="text-xs">{article.date}</span>
                </div>
                <h4
                  className="font-bold leading-snug mb-4 group-hover:text-[var(--primary)] transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {article.title}
                </h4>
                <button
                  className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide"
                  style={{ color: "var(--primary)" }}
                >
                  Read More <ArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <button className="btn-primary">
            View All Articles
          </button>
        </div>

      </div>
    </section>
  );
}