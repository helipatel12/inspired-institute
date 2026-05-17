import React, { useState, useEffect, useRef } from "react";
import Image from "@/components/site/SiteImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── INLINE BRAND ICONS ── */
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

/* ── TEAM DATA ── */
const team = [
  {
    name: "Arvid Bharadwaj",
    role: "Founder of Ispired Institute",
    subject: "Founder & Mentor",
    exp: "15 yrs",
    bio: "With 15+ years in JEE coaching, Arvid Bharadwaj specializes in making conceptual Physics intuitive. His structured approach has helped hundreds crack top-tier engineering exams with clarity and confidence.",
    photo: "/team/aryan-sharma.jpg",
    initials: "AB",
    color: "#0a4d35",
  },
  {
    name: "Aanad Bharadwaj",
    role: "Co-Founder & Educator",
    subject: "Co-Founder",
    exp: "11 yrs",
    bio: "Sneha leads the NEET preparation wing with memory-mapping techniques and deep conceptual Biology. Known for her vibrant, story-driven teaching, her students consistently score above 165 in Biology.",
    photo: "/team/sneha-kapur.jpg",
    initials: "AB",
    color: "#e8880a",
  },
  {
    name: "Robin Tomar",
    role: "Physic Specialist",
    subject: "Physics",
    exp: "13 yrs",
    bio: "A specialist in calculus and algebra, Vikram's rigorous problem-solving workshops build the exam-day confidence students need. Numerous JEE top-100 achievers credit him as their turning point.",
    photo: "/team/vikram-mehta.jpg",
    initials: "RT",
    color: "#7c3aed",
  },
  {
    name: "Megha Nair",
    role: "Chemistry Specialist",
    subject: "Chemistry",
    exp: "10 yrs",
    bio: "Priya teaches Organic, Inorganic, and Physical Chemistry through simplified reaction frameworks. Her students excel at the logic behind reactions, not just the memorized steps.",
    photo: "/team/priya-das.jpg",
    initials: "MN",
    color: "#d94040",
  },
  {
    name: "Karan Gajera",
    role: "Biology & Science Mentor",
    subject: "Biology",
    exp: "9 yrs",
    bio: "Rahul builds strong academic roots for Class 6–10 students through interactive problem-solving. His sessions make even reluctant learners develop a genuine curiosity for science.",
    photo: "/team/rahul-joshi.jpg",
    initials: "KG",
    color: "#0369a1",
  },
  {
    name: "Priti Bhabhor",
    role: "Mathematics & Mentorship Lead",
    subject: "Mathematics",
    exp: "8 yrs",
    bio: "Nisha creates personalized study roadmaps and provides motivational support through the toughest exam seasons. Her empathetic approach has turned many struggling students into confident achievers.",
    photo: "/team/nisha-patel.jpg",
    initials: "PB",
    color: "#065f46",
  },
  {
    name: "Dr. Manish Gupta",
    role: "Organic Chemistry Lead",
    subject: "Chemistry",
    exp: "12 yrs",
    bio: "Dr. Gupta's PhD in Organic Chemistry brings research-level depth to classroom teaching. His reaction mechanism workshops are legendary among NEET and JEE Advanced students.",
    photo: "/team/manish-gupta.jpg",
    initials: "MG",
    color: "#b45309",
  },
  {
    name: "Anita Rao",
    role: "Physics & Olympiad Coach",
    subject: "Physics",
    exp: "14 yrs",
    bio: "Anita trained at IIT Bombay and specializes in preparing students for Science Olympiads and JEE Advanced. Her conceptual depth and love of problem-solving is infectious.",
    photo: "/team/anita-rao.jpg",
    initials: "AR",
    color: "#be185d",
  },
  {
    name: "Suresh Kumar",
    role: "Mathematics Faculty",
    subject: "Mathematics",
    exp: "10 yrs",
    bio: "Suresh focuses on Coordinate Geometry and Statistics, breaking down complex problems into clean, repeatable approaches. His mock test series is a student favorite before board exams.",
    photo: "/team/suresh-kumar.jpg",
    initials: "SK",
    color: "#1d4ed8",
  },
  {
    name: "Kavita Shah",
    role: "Zoology & Botany Faculty",
    subject: "Biology",
    exp: "9 yrs",
    bio: "Kavita's diagram-based teaching makes plant physiology and animal biology come alive. She has helped over 200 NEET aspirants score above 340 in their Biology section.",
    photo: "/team/kavita-shah.jpg",
    initials: "KS",
    color: "#047857",
  },
  {
    name: "Rohan Desai",
    role: "Physical Chemistry Mentor",
    subject: "Chemistry",
    exp: "7 yrs",
    bio: "Rohan specializes in Thermodynamics, Electrochemistry, and Chemical Kinetics. His ability to connect real-world examples to textbook theory is what makes his classes unmissable.",
    photo: "/team/rohan-desai.jpg",
    initials: "RD",
    color: "#7e22ce",
  },
  {
    name: "Deepa Verma",
    role: "NTSE & Foundation Coach",
    subject: "All Subjects",
    exp: "11 yrs",
    bio: "Deepa leads NTSE preparation with a comprehensive cross-subject approach. Her systematic method has helped Class 9–10 students consistently clear Stage 1 and Stage 2 of the exam.",
    photo: "/team/deepa-verma.jpg",
    initials: "DV",
    color: "#c2410c",
  },
];

/* ── AVATAR COMPONENT ── */
function Avatar({
  member,
  size,
  isActive,
  onClick,
  animated = false,
}: {
  member: (typeof team)[0];
  size: number;
  isActive: boolean;
  onClick?: () => void;
  animated?: boolean;
}) {
  const [err, setErr] = useState(false);
  return (
    <button
      onClick={onClick}
      title={member.name}
      className="relative flex-shrink-0 rounded-full overflow-hidden focus:outline-none"
      style={{
        width: size,
        height: size,
        border: isActive ? `3px solid ${member.color}` : "3px solid transparent",
        boxShadow: isActive ? `0 0 0 3px ${member.color}40, 0 8px 24px ${member.color}30` : "none",
        filter: isActive ? "none" : "grayscale(100%) brightness(0.65)",
        transform: isActive ? "scale(1.12)" : "scale(1)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {!err ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          onError={() => setErr(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center font-display font-black text-white"
          style={{
            background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`,
            fontSize: size * 0.28,
          }}
        >
          {member.initials}
        </div>
      )}
    </button>
  );
}

/* ── MAIN PAGE ── */
function PeoplePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx]     = useState<number | null>(null);
  const [animDir, setAnimDir]     = useState<"left" | "right">("right");
  const [visible, setVisible]     = useState(true);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = team[activeIdx];

  /* animated transition */
  const go = (idx: number, dir: "left" | "right") => {
    if (idx === activeIdx) return;
    setVisible(false);
    setAnimDir(dir);
    setTimeout(() => {
      setPrevIdx(activeIdx);
      setActiveIdx(idx);
      setVisible(true);
    }, 280);
  };

  const prev = () => go((activeIdx - 1 + team.length) % team.length, "left");
  const next = () => go((activeIdx + 1) % team.length, "right");

  /* auto-rotate every 5s */
  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveIdx((i) => {
        const ni = (i + 1) % team.length;
        setAnimDir("right");
        setVisible(false);
        setTimeout(() => { setActiveIdx(ni); setVisible(true); }, 280);
        return i;
      });
    }, 5000);
  };

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const handleClick = (idx: number) => {
    resetAuto();
    go(idx, idx > activeIdx ? "right" : "left");
  };

  /* scroll avatar strip to keep active visible */
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const btn = strip.children[activeIdx] as HTMLElement;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeIdx]);

  const slideStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0) scale(1)"
      : animDir === "right"
        ? "translateX(30px) scale(0.97)"
        : "translateX(-30px) scale(0.97)",
    transition: "opacity 0.35s ease, transform 0.35s ease",
  };

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ═══════════════════════════════════════
          HERO — full viewport showcase
      ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "90vh", display: "flex", flexDirection: "column" }}
      >
        {/* BIG GHOST NAME */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-display font-black uppercase whitespace-nowrap leading-none"
            style={{
              ...slideStyle,
              fontSize: "clamp(4rem, 13vw, 17rem)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(10,77,53,0.2)",
              letterSpacing: "-0.03em",
            }}
          >
            {active.name.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>

        {/* LARGE PHOTO — centered */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ zIndex: 1, width: "min(340px, 55vw)", height: "72vh" }}
        >
          <div style={{ ...slideStyle, position: "relative", width: "100%", height: "100%" }}>
            <div
              className="w-full h-full relative overflow-hidden"
              style={{ borderRadius: "9999px 9999px 0 0" }}
            >
              <Image
                src={active.photo}
                alt={active.name}
                fill
                className="object-cover object-top"
                style={{ filter: "grayscale(15%)" }}
                key={active.photo}
                onError={() => {}}
              />
              {/* fallback overlay if no image */}
              <div
                className="absolute inset-0 flex items-center justify-center font-display font-black text-white"
                style={{
                  background: `linear-gradient(160deg, ${active.color}aa, ${active.color}44)`,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  opacity: 0,
                }}
              >
                {active.initials}
              </div>
            </div>
            {/* bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "45%",
                background: "linear-gradient(to top, var(--bg) 20%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* COLOR ACCENT BLOB */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            zIndex: 0,
            width: "min(380px, 60vw)",
            height: "50vh",
            background: `radial-gradient(ellipse at 50% 100%, ${active.color}22 0%, transparent 70%)`,
            transition: "background 0.6s ease",
          }}
        />

        {/* MEMBER CARD — bottom left (desktop) / below hero (mobile) */}
        <div
          className="absolute bottom-8 left-4 md:left-10 z-10 w-72 md:w-80 hidden sm:block"
          style={slideStyle}
        >
          <div
            className="rounded-2xl p-5 shadow-2xl"
            style={{ background: "white", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Avatar member={active} size={44} isActive={true} />
              <div>
                <p className="font-bold text-sm leading-tight" style={{ color: "var(--text)" }}>
                  {active.name}
                </p>
                <p className="text-xs font-semibold mt-0.5" style={{ color: active.color }}>
                  {active.role}
                </p>
              </div>
            </div>

            {/* exp + subject badges */}
            <div className="flex gap-2 mb-3">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${active.color}18`, color: active.color }}>
                {active.subject}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--muted)", color: "var(--text-faint)" }}>
                {active.exp} exp
              </span>
            </div>

            {/* social icons */}
            <div className="flex gap-2 mb-3">
              {[
                { icon: <XIcon />, label: "X" },
                { icon: <LinkedinIcon />, label: "LinkedIn" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <FacebookIcon />, label: "Facebook" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-md"
                  style={{ background: "var(--muted)", color: "var(--text-muted)" }}
                >
                  {s.icon}
                </button>
              ))}
            </div>

            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              {active.bio.slice(0, 130)}…
            </p>

            {/* prev / next */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => { resetAuto(); prev(); }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  style={{ background: "var(--muted)", color: "var(--text-muted)" }}
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => { resetAuto(); next(); }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  style={{ background: active.color, color: "white" }}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
              <span className="text-xs font-bold" style={{ color: "var(--text-faint)" }}>
                {activeIdx + 1} / {team.length}
              </span>
            </div>
          </div>

          <p className="mt-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
            Team Members
          </p>
        </div>

        {/* AVATAR STRIP — right side desktop, hidden on mobile (shown below) */}
        <div
          ref={stripRef}
          className="absolute bottom-8 right-4 md:right-10 z-10 hidden sm:flex flex-row gap-3 items-center max-h-[70vh] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {team.map((m, i) => (
            <Avatar
              key={m.name}
              member={m}
              size={i === activeIdx ? 68 : 52}
              isActive={i === activeIdx}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>

        {/* LABEL TOP LEFT */}
        <div className="relative z-10 p-6 md:p-10">
          <span className="section-label">✦ Our Educators</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MOBILE MEMBER CARD (shown below hero on small screens)
      ═══════════════════════════════════════ */}
      <section className="sm:hidden px-4 py-6" style={{ background: "var(--bg)" }}>
        <div style={slideStyle}>
          <div className="rounded-2xl p-5 shadow-xl mb-5" style={{ background: "white", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3 mb-3">
              <Avatar member={active} size={48} isActive={true} />
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{active.name}</p>
                <p className="text-xs font-semibold" style={{ color: active.color }}>{active.role}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${active.color}18`, color: active.color }}>{active.subject}</span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--muted)", color: "var(--text-faint)" }}>{active.exp} exp</span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{active.bio}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button onClick={() => { resetAuto(); prev(); }} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--muted)", color: "var(--text-muted)" }}>
                  <ChevronLeft size={16} />
                </button>
                <button onClick={() => { resetAuto(); next(); }} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: active.color, color: "white" }}>
                  <ChevronRight size={16} />
                </button>
              </div>
              <span className="text-xs font-bold" style={{ color: "var(--text-faint)" }}>{activeIdx + 1} / {team.length}</span>
            </div>
          </div>

          {/* Mobile avatar strip — horizontal scroll */}
          <div
            ref={stripRef}
            className="flex gap-3 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {team.map((m, i) => (
              <Avatar key={m.name} member={m} size={i === activeIdx ? 64 : 50} isActive={i === activeIdx} onClick={() => handleClick(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BIO SECTION
      ═══════════════════════════════════════ */}
      <section className="py-14 px-6" style={{ background: "var(--muted)" }}>
        <div className="max-w-3xl mx-auto text-center" style={slideStyle}>
          <span className="section-label mb-4">Faculty Profile</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-4 mb-2" style={{ color: "var(--text)" }}>
            {active.name}
          </h2>
          <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: active.color }}>
            {active.role} · {active.exp} experience
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {active.bio}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL GRID — all 12 members
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label mb-3">The Whole Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-4" style={{ color: "var(--text)" }}>
              {team.length} Dedicated Educators
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((m, i) => (
              <button
                key={m.name}
                onClick={() => { handleClick(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="card p-4 text-left group transition-all duration-300 hover:-translate-y-1"
                style={
                  activeIdx === i
                    ? { border: `2px solid ${m.color}`, boxShadow: `0 6px 24px ${m.color}25` }
                    : {}
                }
              >
                {/* mini avatar + color bar */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-white text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: m.color }}
                  >
                    {m.initials}
                  </div>
                  <div
                    className="flex-1 h-0.5 rounded-full opacity-30"
                    style={{ background: m.color }}
                  />
                </div>

                <p className="font-bold text-xs leading-snug mb-0.5" style={{ color: "var(--text)" }}>
                  {m.name}
                </p>
                <p className="text-[11px] font-semibold" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-[10px] mt-1 font-medium" style={{ color: "var(--text-faint)" }}>
                  {m.subject} · {m.exp}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          WORLD MAP — COMMUNITY
      ═══════════════════════════════════════ */}
      <WorldMapSection />

      {/* ═══════════════════════════════════════
          JOIN US CTA
      ═══════════════════════════════════════ */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "var(--primary)" }}
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)" }}
        />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            Join Our Expert Team
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            We're always looking for passionate educators who share our mission of making science accessible.
          </p>
          <a href="/Connect" className="btn-accent">Get in Touch →</a>
        </div>
      </section>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   WORLD MAP COMMUNITY SECTION
   ════════════════════════════════════════════════════════ */

// Nodes placed as percentage (x%, y%) of the SVG viewBox 1000×500
const mapNodes = [
  // ── FACULTY (larger, colored, interactive) ──
  { id:"n0",  x:18,  y:31,  r:28, photo:"/team/aryan-sharma.jpg",  initials:"AS", color:"#0a4d35", name:"Dr. Aryan Sharma",  role:"Head of Physics",     kind:"faculty" },
  { id:"n1",  x:27,  y:48,  r:24, photo:"/team/sneha-kapur.jpg",   initials:"SK", color:"#e8880a", name:"Sneha Kapur",       role:"Biology Faculty",     kind:"faculty" },
  { id:"n2",  x:38,  y:38,  r:26, photo:"/team/vikram-mehta.jpg",  initials:"VM", color:"#7c3aed", name:"Vikram Mehta",      role:"Maths Mentor",        kind:"faculty" },
  { id:"n3",  x:47,  y:55,  r:22, photo:"/team/priya-das.jpg",     initials:"PD", color:"#d94040", name:"Priya Das",         role:"Chemistry",           kind:"faculty" },
  { id:"n4",  x:57,  y:35,  r:26, photo:"/team/rahul-joshi.jpg",   initials:"RJ", color:"#0369a1", name:"Rahul Joshi",       role:"Foundation Lead",     kind:"faculty" },
  { id:"n5",  x:66,  y:50,  r:22, photo:"/team/nisha-patel.jpg",   initials:"NP", color:"#065f46", name:"Nisha Patel",       role:"Counselor",           kind:"faculty" },
  { id:"n6",  x:73,  y:32,  r:24, photo:"/team/manish-gupta.jpg",  initials:"MG", color:"#b45309", name:"Dr. Manish Gupta",  role:"Organic Chemistry",   kind:"faculty" },
  { id:"n7",  x:82,  y:44,  r:22, photo:"/team/anita-rao.jpg",     initials:"AR", color:"#be185d", name:"Anita Rao",         role:"Physics & Olympiad",  kind:"faculty" },
  { id:"n8",  x:55,  y:68,  r:20, photo:"/team/suresh-kumar.jpg",  initials:"SK", color:"#1d4ed8", name:"Suresh Kumar",      role:"Mathematics",         kind:"faculty" },
  { id:"n9",  x:30,  y:65,  r:20, photo:"/team/kavita-shah.jpg",   initials:"KS", color:"#047857", name:"Kavita Shah",       role:"Zoology & Botany",    kind:"faculty" },
  { id:"n10", x:43,  y:75,  r:18, photo:"/team/rohan-desai.jpg",   initials:"RD", color:"#7e22ce", name:"Rohan Desai",       role:"Physical Chemistry",  kind:"faculty" },
  { id:"n11", x:68,  y:70,  r:18, photo:"/team/deepa-verma.jpg",   initials:"DV", color:"#c2410c", name:"Deepa Verma",       role:"NTSE Coach",          kind:"faculty" },

  // ── ALUMNI / STUDENTS (smaller, muted) ──
  { id:"s0",  x:12,  y:44,  r:14, photo:"", initials:"RM", color:"#888", name:"Rahul M.",    role:"JEE 2025 · AIR 412",     kind:"student" },
  { id:"s1",  x:22,  y:58,  r:12, photo:"", initials:"PS", color:"#888", name:"Priya S.",    role:"NEET 2025 · 688/720",     kind:"student" },
  { id:"s2",  x:35,  y:22,  r:16, photo:"", initials:"KP", color:"#888", name:"Kiran P.",    role:"Board · 97.4%",           kind:"student" },
  { id:"s3",  x:50,  y:22,  r:12, photo:"", initials:"AD", color:"#888", name:"Ananya D.",   role:"NEET 2024 · 680/720",     kind:"student" },
  { id:"s4",  x:63,  y:22,  r:14, photo:"", initials:"AR", color:"#888", name:"Arjun V.",    role:"JEE Main · 99.2 %ile",   kind:"student" },
  { id:"s5",  x:78,  y:22,  r:12, photo:"", initials:"MB", color:"#888", name:"Meera J.",    role:"NEET 2024 · 688/720",     kind:"student" },
  { id:"s6",  x:88,  y:30,  r:14, photo:"", initials:"KB", color:"#888", name:"Karan B.",    role:"JEE Main · 98.7 %ile",   kind:"student" },
  { id:"s7",  x:90,  y:56,  r:12, photo:"", initials:"DS", color:"#888", name:"Diya S.",     role:"Board 2025 · 97.4%",      kind:"student" },
  { id:"s8",  x:77,  y:62,  r:16, photo:"", initials:"RK", color:"#888", name:"Rohan K.",    role:"JEE Adv · AIR 280",       kind:"student" },
  { id:"s9",  x:17,  y:68,  r:12, photo:"", initials:"SJ", color:"#888", name:"Sneha J.",    role:"Foundation · Top 5%",     kind:"student" },
  { id:"s10", x:8,   y:56,  r:14, photo:"", initials:"VD", color:"#888", name:"Vikram D.",   role:"JEE 2024 · AIR 512",      kind:"student" },
  { id:"s11", x:48,  y:82,  r:12, photo:"", initials:"NR", color:"#888", name:"Nisha R.",    role:"NEET 2026 Aspirant",       kind:"student" },
  { id:"s12", x:60,  y:82,  r:14, photo:"", initials:"AM", color:"#888", name:"Aryan M.",    role:"Olympiad Silver 2025",    kind:"student" },
  { id:"s13", x:24,  y:78,  r:12, photo:"", initials:"LP", color:"#888", name:"Layla P.",    role:"Class 9 · Foundation",    kind:"student" },
];

// Dotted connection lines between some nodes
const connections = [
  ["n0","n2"],["n2","n4"],["n4","n6"],["n6","n7"],
  ["n1","n3"],["n3","n5"],["n5","n8"],
  ["n0","s0"],["n1","s1"],["n2","s2"],["n2","s3"],
  ["n4","s4"],["n6","s5"],["n7","s6"],["n7","s7"],
  ["n8","s8"],["n9","s9"],["n10","s11"],["n11","s12"],
  ["s0","s10"],["s1","s9"],["s4","s5"],["s6","s7"],
  ["n3","s12"],["n5","s8"],
];

type MapNode = typeof mapNodes[0];

function NodeBubble({ node, hovered, onEnter, onLeave }: {
  node: MapNode;
  hovered: string | null;
  onEnter: (id: string) => void;
  onLeave: () => void;
}) {
  const [imgErr, setImgErr] = React.useState(false);
  const isHov = hovered === node.id;
  const isFac = node.kind === "faculty";
  const cx = node.x / 100 * 1000;
  const cy = node.y / 100 * 500;
  const r  = node.r;

  return (
    <g
      transform={`translate(${cx},${cy})`}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => onEnter(node.id)}
      onMouseLeave={onLeave}
    >
      {/* Pulse ring on hover */}
      {isHov && (
        <circle r={r + 8} fill="none" stroke={isFac ? node.color : "#aaa"} strokeWidth="2" opacity="0.4">
          <animate attributeName="r" from={r + 4} to={r + 16} dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.5" to="0" dur="1s" repeatCount="indefinite"/>
        </circle>
      )}

      {/* Outer ring */}
      <circle
        r={r + (isHov ? 5 : 2)}
        fill="none"
        stroke={isFac ? node.color : "#ccc"}
        strokeWidth={isHov ? 2.5 : 1.5}
        opacity={isHov ? 1 : (isFac ? 0.7 : 0.4)}
        style={{ transition: "all 0.25s" }}
      />

      {/* Clip for photo */}
      <defs>
        <clipPath id={`clip-${node.id}`}>
          <circle r={r} />
        </clipPath>
      </defs>

      {/* Background fill */}
      <circle
        r={r}
        fill={isFac ? `${node.color}22` : "#f0f0f0"}
        style={{ transition: "all 0.25s" }}
      />

      {/* Photo or initials */}
      {node.photo && !imgErr ? (
        <image
          href={node.photo}
          x={-r} y={-r} width={r*2} height={r*2}
          clipPath={`url(#clip-${node.id})`}
          preserveAspectRatio="xMidYMid slice"
          style={{ filter: isHov ? "none" : (isFac ? "grayscale(40%)" : "grayscale(80%) brightness(0.9)"), transition: "filter 0.3s" }}
          onError={() => setImgErr(true)}
        />
      ) : (
        <text
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={r * 0.55}
          fontFamily="Playfair Display, serif"
          fontWeight="900"
          fill={isFac ? node.color : "#aaa"}
          style={{ userSelect: "none" }}
        >
          {node.initials}
        </text>
      )}

      {/* Scale on hover via transform on the whole group is not SVG standard — handled via wrapper */}
    </g>
  );
}

function WorldMapSection() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const hoveredNode = mapNodes.find(n => n.id === hovered);

  // Get cx/cy for a node id
  const cx = (id: string) => mapNodes.find(n => n.id === id)!.x / 100 * 1000;
  const cy = (id: string) => mapNodes.find(n => n.id === id)!.y / 100 * 500;

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-4">Our Community</span>
          <h2 className="font-display text-3xl md:text-4xl font-black mt-4 mb-3" style={{ color: "var(--text)" }}>
            Share Your Stories
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Join the community of inspiring students and educators — tell your story
            and connect with those who've walked the same path.
          </p>
        </div>

        {/* MAP */}
        <div className="relative w-full rounded-3xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <svg
            viewBox="0 0 1000 500"
            width="100%"
            className="block"
            style={{ minHeight: 280 }}
          >
            {/* ── WORLD MAP OUTLINE (simplified continents as paths) ── */}
            <g opacity="0.07" fill="var(--primary)" stroke="none">
              {/* North America */}
              <path d="M95,80 L185,70 L210,90 L215,130 L200,155 L185,175 L170,195 L145,210 L120,220 L100,240 L85,255 L75,270 L80,290 L95,300 L110,290 L120,280 L115,265 L125,250 L140,260 L145,245 L130,230 L135,215 L155,220 L165,235 L175,250 L160,265 L150,280 L155,295 L145,310 L130,315 L120,305 L110,310 L105,325 L115,335 L130,330 L145,340 L140,355 L125,360 L110,350 L100,360 L105,375 L120,380 L135,370 L145,380 L140,395 L120,400 L105,390 L90,395 L80,410 L70,400 L60,385 L55,365 L60,345 L70,330 L65,310 L55,295 L50,275 L55,255 L65,240 L70,220 L65,200 L70,180 L75,160 L80,140 L85,120 Z"/>
              {/* South America */}
              <path d="M175,290 L210,275 L235,280 L255,300 L265,325 L270,355 L265,385 L255,410 L240,430 L220,445 L200,450 L180,445 L165,430 L158,410 L160,385 L165,360 L160,335 L155,310 L165,295 Z"/>
              {/* Europe */}
              <path d="M430,65 L470,60 L500,70 L520,85 L530,100 L520,115 L505,125 L490,130 L475,125 L460,130 L450,145 L435,140 L425,125 L420,110 L425,95 Z"/>
              {/* Africa */}
              <path d="M440,155 L480,145 L510,155 L530,175 L540,205 L545,235 L540,265 L530,295 L515,320 L495,340 L470,350 L445,345 L425,330 L410,305 L405,275 L408,245 L415,215 L420,185 L430,165 Z"/>
              {/* Asia */}
              <path d="M530,55 L600,45 L670,50 L740,60 L800,70 L850,80 L900,90 L930,105 L940,125 L930,145 L910,155 L880,160 L850,155 L820,160 L800,175 L780,185 L760,180 L740,170 L720,175 L700,185 L680,190 L660,185 L640,175 L620,170 L600,165 L580,155 L560,145 L545,130 L535,115 L530,95 Z"/>
              {/* Australia */}
              <path d="M760,300 L810,290 L855,295 L890,315 L910,340 L910,370 L895,395 L865,410 L830,415 L795,405 L770,385 L755,360 L752,330 Z"/>
            </g>

            {/* ── CONNECTION LINES ── */}
            {connections.map(([a, b]) => {
              const ax = cx(a), ay = cy(a), bx = cx(b), by = cy(b);
              const isActive = hovered === a || hovered === b;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={ax} y1={ay} x2={bx} y2={by}
                  stroke={isActive ? "var(--accent)" : "var(--primary)"}
                  strokeWidth={isActive ? 1.5 : 0.8}
                  strokeDasharray="4 4"
                  opacity={isActive ? 0.6 : 0.18}
                  style={{ transition: "all 0.3s" }}
                />
              );
            })}

            {/* ── NODES ── */}
            {mapNodes.map(node => (
              <NodeBubble
                key={node.id}
                node={node}
                hovered={hovered}
                onEnter={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </svg>

          {/* HOVER TOOLTIP */}
          {hoveredNode && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-3 pointer-events-none"
              style={{
                background: "white",
                border: `1.5px solid ${hoveredNode.kind === "faculty" ? hoveredNode.color : "var(--border)"}`,
                minWidth: 220,
                zIndex: 20,
                animation: "fadeUp 0.2s ease",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-white text-sm flex-shrink-0"
                style={{ background: hoveredNode.kind === "faculty" ? hoveredNode.color : "#888" }}
              >
                {hoveredNode.initials}
              </div>
              <div>
                <p className="font-bold text-sm leading-tight" style={{ color: "var(--text)" }}>
                  {hoveredNode.name}
                </p>
                <p className="text-xs mt-0.5 font-medium" style={{ color: hoveredNode.kind === "faculty" ? hoveredNode.color : "var(--text-faint)" }}>
                  {hoveredNode.role}
                </p>
                <p
                  className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-faint)" }}
                >
                  {hoveredNode.kind === "faculty" ? "Faculty" : "Alumni / Student"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Legend + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-6 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: "var(--primary)" }}/>
              Faculty Members
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: "#bbb" }}/>
              Alumni & Students
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-5 border-t-2 border-dashed" style={{ borderColor: "var(--accent)" }}/>
              Connected
            </span>
          </div>
          <a href="/Connect" className="btn-primary text-sm">Join Our Community →</a>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateX(-50%) translateY(6px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}

export default PeoplePage;