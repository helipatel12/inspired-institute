import React, { useEffect, useRef, useState } from "react";
import Image from "@/components/site/SiteImage";

/* ── GALLERY MOSAIC CONFIG ── */
const galleryItems = [
  { src: "/photo-1.jpg",  alt: "Students in class",      col: "col-start-1 col-span-2", row: "row-start-1 row-span-2", radius: "1.5rem" },
  { src: "/photo-2.jpg",  alt: "Science lab session",    col: "col-start-3 col-span-2", row: "row-start-1 row-span-1", radius: "1.5rem" },
  { src: "/photo-3.jpg",  alt: "Faculty mentoring",      col: "col-start-5 col-span-2", row: "row-start-1 row-span-3", radius: "9999px" },
  { src: "/photo-4.jpg",  alt: "Group study",            col: "col-start-7 col-span-2", row: "row-start-1 row-span-2", radius: "1.5rem" },
  { src: "/photo-5.jpg",  alt: "Whiteboard explanation", col: "col-start-9 col-span-2", row: "row-start-1 row-span-1", radius: "1.5rem" },
  { src: "/photo-6.jpg",  alt: "Award ceremony",         col: "col-start-3 col-span-2", row: "row-start-2 row-span-2", radius: "1.5rem" },
  { src: "/photo-7.jpg",  alt: "Chemistry experiment",   col: "col-start-9 col-span-2", row: "row-start-2 row-span-2", radius: "1.5rem" },
  { src: "/photo-8.jpg",  alt: "Library reading",        col: "col-start-1 col-span-2", row: "row-start-3 row-span-1", radius: "1.5rem" },
  { src: "/photo-11.jpg", alt: "Outdoor event",          col: "col-start-7 col-span-2", row: "row-start-3 row-span-1", radius: "1.5rem" },
];

const testimonials = [
  {
    stars: 5,
    text: "Inspired Institute changed how I think about Physics. The concept-first approach made JEE preparation feel natural rather than overwhelming. My confidence grew with every class.",
    name: "Rahul M.",
    role: "JEE Advanced Qualifier · AIR 412",
    initials: "RM",
    color: "var(--primary)",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    stars: 5,
    text: "The personal attention my daughter received here was unmatched. The weekly tests and detailed analysis gave us clarity on exactly where to focus each week. Highly recommend.",
    name: "Mrs. Patel",
    role: "Parent · Class 11 Student",
    initials: "MP",
    color: "var(--accent)",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    stars: 5,
    text: "I love the variety of teaching styles here. Whether it's diagrams, story-based learning, or rigorous practice — Inspired Institute always has the perfect approach for every concept.",
    name: "Ananya D.",
    role: "NEET Aspirant · Score 680/720",
    initials: "AD",
    color: "var(--primary-mid)",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    stars: 5,
    text: "The faculty here genuinely cares. They pushed me when I needed it and supported me when I doubted myself. The structured plan made all the difference in my preparation.",
    name: "Karan S.",
    role: "JEE Main · 99.2 Percentile",
    initials: "KS",
    color: "var(--primary-dark)",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
  {
    stars: 5,
    text: "From foundation classes in Class 9 to NEET prep, Inspired has been with me every step. The mentorship and weekly analytics kept me consistently improving.",
    name: "Priya R.",
    role: "NEET 2025 · AIR 1,204",
    initials: "PR",
    color: "var(--accent-dark)",
    avatar: "https://i.pravatar.cc/120?img=44",
  },
];

/* Fallback colored placeholder for missing images */
function GalleryImg({
  src, alt, radius, index,
}: {
  src: string; alt: string; radius: string; index: number;
}) {
  const [err, setErr] = useState(false);
  const colors = ["#342C68", "#F58220", "#4C438A", "#241E4E", "#2E285C", "#F59E0B"];
  return (
    <div
      className="w-full h-full overflow-hidden relative group"
      style={{ borderRadius: radius, boxShadow: "0 8px 32px rgba(36, 30, 78, 0.10)" }}
    >
      {!err ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            onError={() => setErr(true)}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(36,30,78,0.55) 100%)" }}
          />
        </>
      ) : (
        <div
          className="w-full h-full flex items-end p-3"
          style={{ background: `linear-gradient(135deg, ${colors[index % colors.length]}dd, ${colors[index % colors.length]}88)` }}
        >
          <span className="text-white/60 text-[10px] font-semibold leading-tight">{alt}</span>
        </div>
      )}
    </div>
  );
}

/* Animate-in on scroll */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AboutPage() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ═══════════════════════════════════════
          MOSAIC + TESTIMONIALS HERO
      ═══════════════════════════════════════ */}
      <section className="relative px-4 md:px-8 pt-16 pb-24 overflow-hidden">
        {/* Ambient gradient mesh */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 70%)" }}
          />
          <div
            className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 70%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* ── HEADLINE ── */}
          <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
            <span className="section-label mb-5">Voices of Inspired</span>
            <h1
              className="font-display font-black leading-[1.05] mt-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", color: "var(--text)" }}
            >
              Trusted by{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                students &amp; families
              </em>
              <br className="hidden sm:block" />
              <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.7em" }}>
                from across Vadodara
              </span>
            </h1>
          </div>

          {/* ── IMAGE MOSAIC ── */}
          <div
            className="grid gap-3 md:gap-4"
            style={{
              gridTemplateColumns: "repeat(10, 1fr)",
              gridTemplateRows: "repeat(3, minmax(110px, 160px))",
              height: "clamp(360px, 48vw, 540px)",
            }}
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.src}
                className={`${item.col} ${item.row} overflow-hidden`}
                style={{ borderRadius: item.radius, minHeight: 0 }}
              >
                <GalleryImg src={item.src} alt={item.alt} radius={item.radius} index={i} />
              </div>
            ))}
          </div>

          {/* ── GLASS TESTIMONIAL CAROUSEL ── */}
          <div
            className="relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="relative mx-auto overflow-hidden rounded-[2rem]"
              style={{
                maxWidth: 880,
                minHeight: 320,
                background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                border: "1px solid rgba(255,255,255,0.7)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                boxShadow:
                  "0 30px 80px -20px rgba(36,30,78,0.25), 0 0 0 1px rgba(228,230,241,0.6) inset",
              }}
            >
              {/* Decorative quote */}
              <div
                aria-hidden
                className="absolute top-6 right-8 font-display select-none pointer-events-none"
                style={{
                  fontSize: "8rem",
                  lineHeight: 1,
                  color: "var(--primary)",
                  opacity: 0.08,
                }}
              >
                ”
              </div>

              <div className="relative" style={{ minHeight: 320 }}>
                {testimonials.map((t, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={t.name}
                      className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-all duration-700 ease-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: `translateX(${isActive ? 0 : i < active ? -40 : 40}px)`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-5">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <svg
                            key={si}
                            viewBox="0 0 20 20"
                            width="18"
                            height="18"
                            fill={si < t.stars ? "var(--warning)" : "var(--border)"}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p
                        className="font-display text-xl md:text-2xl leading-relaxed mb-7"
                        style={{ color: "var(--text)", fontStyle: "italic" }}
                      >
                        “{t.text}”
                      </p>

                      {/* Reviewer */}
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-display font-black text-white text-base flex-shrink-0"
                          style={{
                            background: t.color,
                            boxShadow: "0 6px 18px rgba(36,30,78,0.18)",
                          }}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{ color: "var(--text)" }}>
                            {t.name}
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-7">
              <button
                onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 14px rgba(36,30,78,0.08)",
                }}
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === active ? 28 : 8,
                      height: 8,
                      background:
                        i === active
                          ? "linear-gradient(90deg, var(--primary), var(--accent))"
                          : "var(--border-hover)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setActive((p) => (p + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 14px rgba(36,30,78,0.08)",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION STATS BAND
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: "var(--primary)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "1,000+", label: "Students Trained" },
                { num: "95%",    label: "Success Rate" },
                { num: "10+",    label: "Years of Excellence" },
                { num: "50+",    label: "Top Rankers" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display text-4xl md:text-5xl font-black"
                    style={{ color: "var(--accent)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mt-2 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION + STORY
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <FadeIn>
            <div>
              <span className="section-label mb-5">Our Story</span>
              <h2
                className="font-display text-4xl font-black mt-5 mb-5 leading-tight"
                style={{ color: "var(--text)" }}
              >
                A decade of turning<br />
                <em className="not-italic" style={{ color: "var(--accent)" }}>potential into performance</em>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Founded in Vadodara in 2015, Inspired Institute was built on a simple belief:
                every student — regardless of their starting point — has the potential to excel
                when given the right environment, the right mentors, and the right methods.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                Over the past decade we've trained over 1,000 students for JEE, NEET, Board
                Exams, Olympiads, and NTSE — with a consistent 95% success rate that speaks
                for itself. Our concept-first teaching philosophy and personal mentorship model
                are what set us apart.
              </p>
              <a href="/Connect" className="btn-primary">Join Our 2026 Batch →</a>
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn delay={150}>
            <div className="space-y-5">
              {[
                { year: "2015", event: "Founded in Vadodara with a small batch of dedicated students and a big mission.", color: "var(--primary)" },
                { year: "2018", event: "Launched full JEE & NEET preparation programs with specialized faculty wings.", color: "var(--accent)" },
                { year: "2021", event: "500+ students trained; first batch of JEE top-100 achievers graduated.", color: "var(--red)" },
                { year: "2023", event: "Introduced Foundation Program for Class 6–10 and NTSE coaching track.", color: "#7c3aed" },
                { year: "2024", event: "Crossed 1,000 students trained with 95% success rate across all programs.", color: "#0369a1" },
              ].map((m, i) => (
                <div key={m.year} className="flex gap-5 items-start group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-white text-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: m.color }}
                  >
                    {m.year}
                  </div>
                  <div
                    className="flex-1 py-3 px-4 rounded-xl transition-colors duration-200 group-hover:bg-white"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VALUES GRID
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="section-label mb-3">What We Stand For</span>
              <h2 className="font-display text-3xl md:text-4xl font-black mt-4" style={{ color: "var(--text)" }}>
                Our Core Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "💡", title: "Conceptual First",    desc: "We never teach to memorize. Every lesson begins with the 'why' — because understanding compounds.", color: "var(--accent)" },
              { icon: "🤝", title: "Personal Mentorship", desc: "Every student gets one-on-one attention. We know our students by name, not by roll number.", color: "var(--primary)" },
              { icon: "📊", title: "Data-Driven Growth",  desc: "Weekly tests and performance analytics ensure no student falls behind without us noticing.", color: "#7c3aed" },
              { icon: "🎯", title: "Goal-Aligned Plans",  desc: "Whether JEE, NEET, or boards — every student gets a roadmap tailored to their specific target.", color: "var(--red)" },
              { icon: "🔬", title: "Hands-On Learning",   desc: "Lab sessions and practice workshops complement theory, building real exam-day problem-solving skills.", color: "#0369a1" },
              { icon: "❤️", title: "Student Well-being",  desc: "We care about the whole student — their confidence, mental health, and long-term love of learning.", color: "#065f46" },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="card p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: `${v.color}15` }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: v.color }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)" }}
        />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Admissions open for 2026 batch — limited seats across all programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/Connect" className="btn-accent">Apply Now →</a>
            <a href="/Courses" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
              View Courses
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;