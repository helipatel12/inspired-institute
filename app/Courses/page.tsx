"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Search, BookOpen, Users, Star, ArrowRight, Zap } from "lucide-react";

/* ── CATEGORIES ── */
const categories = [
  { label: "Mathematics",  icon: "⏳", color: "#7c3aed", bg: "#f3f0ff" },
  { label: "Physics",      icon: "💡", color: "#e8880a", bg: "#fff7ed" },
  { label: "Chemistry",    icon: "🧪", color: "#0369a1", bg: "#e0f2fe" },
  { label: "Biology",      icon: "🌿", color: "#065f46", bg: "#d1fae5" },
  { label: "Foundation",   icon: "🏗️",  color: "#d94040", bg: "#fef2f2" },
  { label: "JEE",          icon: "🎯", color: "#0a4d35", bg: "#e6f4ee" },
  { label: "NEET",         icon: "🔬", color: "#be185d", bg: "#fce7f3" },
  { label: "Olympiad",     icon: "⚡", color: "#b45309", bg: "#fef9c3" },
];

/* ── COURSES ── */
const courseList = [
  {
    title: "Class 6–10 Foundation Program",
    category: "Foundation",
    categoryColor: "#d94040",
    instructor: "Rahul Joshi",
    lessons: 120,
    students: "500+",
    rating: 4.9,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/foundation.jpg",
    tag: "FREE",
  },
  {
    title: "JEE Main & Advanced Mastery",
    category: "JEE",
    categoryColor: "#0a4d35",
    instructor: "Dr. Aryan Sharma",
    lessons: 350,
    students: "250+",
    rating: 5.0,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/jee.jpg",
    tag: "TOP PICK",
  },
  {
    title: "NEET Biology & Physics",
    category: "NEET",
    categoryColor: "#be185d",
    instructor: "Sneha Kapur",
    lessons: 320,
    students: "300+",
    rating: 4.8,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/neet.jpg",
    tag: "FREE",
  },
  {
    title: "Class 11–12 Science Stream",
    category: "Foundation",
    categoryColor: "#d94040",
    instructor: "Vikram Mehta",
    lessons: 200,
    students: "400+",
    rating: 4.9,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/science-stream.jpg",
    tag: "FREE",
  },
  {
    title: "Advanced Mathematics",
    category: "Mathematics",
    categoryColor: "#7c3aed",
    instructor: "Suresh Kumar",
    lessons: 180,
    students: "220+",
    rating: 4.8,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/mathematics.jpg",
    tag: null,
  },
  {
    title: "Organic & Inorganic Chemistry",
    category: "Chemistry",
    categoryColor: "#0369a1",
    instructor: "Priya Das",
    lessons: 150,
    students: "180+",
    rating: 4.7,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/chemistry.jpg",
    tag: null,
  },
  {
    title: "Olympiad & NTSE Coaching",
    category: "Olympiad",
    categoryColor: "#b45309",
    instructor: "Anita Rao",
    lessons: 90,
    students: "100+",
    rating: 4.7,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/olympiad.jpg",
    tag: null,
  },
  {
    title: "Crash Course – JEE/NEET",
    category: "JEE",
    categoryColor: "#0a4d35",
    instructor: "Dr. Manish Gupta",
    lessons: 60,
    students: "150+",
    rating: 4.8,
    price: "Enquire",
    originalPrice: null,
    photo: "/courses/crash-course.jpg",
    tag: "LIMITED",
  },
];

/* ── FALLBACK for missing images ── */
const catColors: Record<string, string> = {
  Foundation:  "#d94040",
  JEE:         "#0a4d35",
  NEET:        "#be185d",
  Mathematics: "#7c3aed",
  Chemistry:   "#0369a1",
  Biology:     "#065f46",
  Olympiad:    "#b45309",
};

function CourseImg({ src, alt, category }: { src: string; alt: string; category: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-2"
        style={{ background: `${catColors[category] ?? "#888"}22` }}
      >
        <span className="text-4xl">📚</span>
        <span className="text-xs font-semibold" style={{ color: catColors[category] ?? "#888" }}>
          {category}
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setErr(true)}
    />
  );
}

export default function Courses() {
  const [search, setSearch]       = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [liked, setLiked]         = useState<Set<number>>(new Set());
  const allCategories = ["All", ...categories.map((c) => c.label)];

  const filtered = courseList.filter((c) => {
    const matchCat    = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                        c.instructor.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleLike = (i: number) =>
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ═══════════════════════════════════════
          ANNOUNCEMENT BAR
      ═══════════════════════════════════════ */}
      <div
        className="text-center py-2.5 px-4 text-xs font-semibold"
        style={{ background: "var(--primary)", color: "white" }}
      >
        Your learning journey begins here — 2026 Admissions Open!{" "}
        <a href="/Connect" className="underline font-bold" style={{ color: "var(--accent)" }}>
          Apply now →
        </a>
      </div>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-6 py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #f0faf5 0%, #fff8ec 60%, #f0faf5 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-8 right-16 w-40 h-40 rounded-full opacity-20 pointer-events-none"
          style={{ background: "var(--accent)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
          style={{ background: "var(--primary)", filter: "blur(80px)" }} />

        {/* Decorative dots */}
        <div className="absolute top-10 left-10 opacity-20 pointer-events-none" style={{ display: "grid", gridTemplateColumns: "repeat(6, 8px)", gap: "8px" }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">⭐</span>
              <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                Expert-led courses for every level
              </span>
            </div>
            <h1
              className="font-display font-black leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "var(--text)" }}
            >
              Build Your{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--primary)" }}
              >
                Dream Score
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <br />
              with Expert Guidance
            </h1>
            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>
              Choose from JEE, NEET, Foundation, and Olympiad courses — all taught by
              experienced faculty with proven results and personal mentorship built in.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Connect" className="btn-primary">Start Learning Now</a>
              <a href="#courses" className="btn-outline">Browse Courses</a>
            </div>
            <p className="text-xs mt-5" style={{ color: "var(--text-faint)" }}>
              <span style={{ color: "var(--primary)", fontWeight: 700 }}>Admissions Open</span>,{" "}
              For a Better Future
            </p>
          </div>

          {/* Right — hero image + enrolled card */}
          <div className="relative flex justify-center items-end min-h-[340px]">
            {/* Hero student photo */}
            <div
              className="relative w-64 md:w-80 h-72 md:h-96"
              style={{ zIndex: 1 }}
            >
              <div className="w-full h-full relative rounded-3xl overflow-hidden">
                <Image
                  src="/courses/hero-student.png"
                  alt="Student studying"
                  fill
                  className="object-cover object-top"
                  onError={() => {}}
                  priority
                />
                <div
                  className="absolute inset-0 flex items-center justify-center font-display font-black text-white text-6xl"
                  style={{ background: "linear-gradient(135deg, var(--primary)44, var(--accent)22)" }}
                />
              </div>
            </div>

            {/* Enrolled students card */}
            <div
              className="absolute bottom-4 left-0 rounded-2xl p-4 shadow-xl"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                minWidth: 180,
                zIndex: 2,
              }}
            >
              <div className="flex items-center gap-1 mb-2">
                {["#0a4d35", "#e8880a", "#7c3aed", "#d94040"].map((c, i) => (
                  <div
                    key={c}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-bold text-white text-[10px]"
                    style={{ background: c, marginLeft: i > 0 ? -8 : 0, zIndex: 4 - i }}
                  >
                    {["R", "S", "V", "P"][i]}
                  </div>
                ))}
                <span
                  className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black -ml-2 z-0"
                  style={{ background: "var(--accent)", color: "white" }}
                >
                  2K+
                </span>
              </div>
              <div className="font-display text-2xl font-black" style={{ color: "var(--primary)" }}>
                1,000+
              </div>
              <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                Total Enrolled Students
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-6 right-2 rounded-xl px-3 py-2 shadow-lg"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <div className="flex items-center gap-1.5">
                <Zap size={13} />
                <span className="text-xs font-bold">95% Pass Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TOP CATEGORIES
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black" style={{ color: "var(--text)" }}>
              Top Categories
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: "var(--accent)" }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => { setActiveCategory(cat.label); document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: activeCategory === cat.label ? cat.color : cat.bg,
                  color: activeCategory === cat.label ? "white" : cat.color,
                  border: `1.5px solid ${activeCategory === cat.label ? cat.color : "transparent"}`,
                }}
              >
                <span className="text-xl">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2 PROMO BANNERS
      ═══════════════════════════════════════ */}
      <section className="px-6 pb-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">

          {/* Expert Teacher */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            style={{ background: "#e6f4ee", border: "1px solid rgba(10,77,53,0.12)" }}
          >
            <div className="absolute top-4 right-4 w-24 h-24 opacity-10 rounded-full"
              style={{ background: "var(--primary)", filter: "blur(20px)" }} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>
                Learn together with
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--text)" }}>
                Expert Teachers
              </h3>
              <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "var(--text-muted)" }}>
                Study with faculty who've guided hundreds of JEE and NEET toppers through personalized coaching.
              </p>
              <a href="/People" className="btn-primary text-sm px-5 py-2.5">View All Teachers</a>
            </div>
            {/* Decorative image collage */}
            <div className="absolute right-6 bottom-4 flex gap-2 items-end pointer-events-none">
              <div className="w-16 h-20 rounded-2xl overflow-hidden relative opacity-80" style={{ transform: "rotate(-6deg)" }}>
                <Image src="/courses/teacher-1.jpg" alt="" fill className="object-cover" onError={() => {}} />
                <div className="absolute inset-0" style={{ background: "var(--primary)33" }} />
              </div>
              <div className="w-16 h-24 rounded-2xl overflow-hidden relative" style={{ transform: "rotate(4deg)" }}>
                <Image src="/courses/teacher-2.jpg" alt="" fill className="object-cover" onError={() => {}} />
                <div className="absolute inset-0" style={{ background: "var(--accent)22" }} />
              </div>
            </div>
          </div>

          {/* For Individuals */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            style={{ background: "#e0f2fe", border: "1px solid rgba(3,105,161,0.12)" }}
          >
            <div className="absolute top-4 right-4 w-24 h-24 opacity-10 rounded-full"
              style={{ background: "#0369a1", filter: "blur(20px)" }} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#0369a1" }}>
                Get the skills
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--text)" }}>
                For Individuals
              </h3>
              <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "var(--text-muted)" }}>
                Whether you're in Class 6 or preparing for NEET, we have a course tailored exactly to your needs.
              </p>
              <a href="/Connect" className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "#0369a1" }}>
                Find Your Course
              </a>
            </div>
            <div className="absolute right-6 bottom-4 flex gap-2 items-end pointer-events-none">
              <div className="w-16 h-20 rounded-2xl overflow-hidden relative opacity-80" style={{ transform: "rotate(-6deg)" }}>
                <Image src="/courses/individual-1.jpg" alt="" fill className="object-cover" onError={() => {}} />
                <div className="absolute inset-0" style={{ background: "#0369a133" }} />
              </div>
              <div className="w-16 h-24 rounded-2xl overflow-hidden relative" style={{ transform: "rotate(4deg)" }}>
                <Image src="/courses/individual-2.jpg" alt="" fill className="object-cover" onError={() => {}} />
                <div className="absolute inset-0" style={{ background: "#0369a122" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR COURSES
      ═══════════════════════════════════════ */}
      <section id="courses" className="px-6 pb-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black" style={{ color: "var(--text)" }}>
                Popular Courses
              </h2>
              <div className="w-12 h-1 rounded-full mt-3" style={{ background: "var(--accent)" }} />
            </div>
            <a href="/Connect" className="btn-outline text-sm px-5 py-2.5 flex-shrink-0">
              View All Courses
            </a>
          </div>

          {/* Search + filter */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-faint)" }} />
              <input
                type="text"
                placeholder="Search by course or instructor…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border outline-none"
                style={{ background: "white", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                  style={{
                    background: activeCategory === cat ? "var(--primary)" : "white",
                    color: activeCategory === cat ? "white" : "var(--text-muted)",
                    border: `1px solid ${activeCategory === cat ? "var(--primary)" : "var(--border)"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-sm" style={{ color: "var(--text-faint)" }}>
              No courses match "{search}"
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((c, i) => (
                <div
                  key={c.title}
                  className="card group overflow-hidden flex flex-col"
                  style={{ borderRadius: "1rem" }}
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <CourseImg src={c.photo} alt={c.title} category={c.category} />

                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white z-10"
                      style={{ background: c.categoryColor }}
                    >
                      {c.category}
                    </span>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleLike(i)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all hover:scale-110 z-10"
                      style={{ background: "white" }}
                    >
                      <Heart
                        size={14}
                        fill={liked.has(i) ? "#d94040" : "none"}
                        stroke={liked.has(i) ? "#d94040" : "var(--text-faint)"}
                      />
                    </button>

                    {/* Tag badge */}
                    {c.tag && (
                      <span
                        className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full z-10"
                        style={{
                          background: c.tag === "LIMITED" ? "var(--red)" : c.tag === "TOP PICK" ? "var(--accent)" : "var(--primary)",
                          color: "white",
                        }}
                      >
                        {c.tag}
                      </span>
                    )}

                    {/* Instructor avatar */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 z-10">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-white text-[9px] flex-shrink-0"
                        style={{ background: c.categoryColor }}
                      >
                        {c.instructor[0]}
                      </div>
                      <span className="text-[10px] font-semibold" style={{ color: "var(--text)" }}>
                        {c.instructor.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="font-bold text-sm leading-snug mb-3 flex-1 group-hover:text-[var(--primary)] transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {c.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[11px] font-medium mb-3" style={{ color: "var(--text-faint)" }}>
                      <span className="flex items-center gap-1">
                        <BookOpen size={11} /> {c.lessons} Lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={11} /> {c.rating}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px mb-3" style={{ background: "var(--border)" }} />

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="text-sm font-black"
                          style={{ color: c.tag === "FREE" ? "var(--red)" : "var(--primary)" }}
                        >
                          {c.tag === "FREE" ? "Free" : c.price}
                        </span>
                        {c.originalPrice && (
                          <span className="text-xs line-through ml-1.5" style={{ color: "var(--text-faint)" }}>
                            {c.originalPrice}
                          </span>
                        )}
                      </div>
                      <a
                        href="/Connect"
                        className="text-[11px] font-bold flex items-center gap-1 hover:underline"
                        style={{ color: "var(--text-muted)" }}
                      >
                        View Details <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)" }} />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            Not sure which course is right for you?
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Talk to our counselors and get personalized guidance — free of charge.
          </p>
          <a href="/Connect" className="btn-accent">Book a Free Counseling Session</a>
        </div>
      </section>

    </div>
  );
}