import React, { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   SOCIAL LINKS
───────────────────────────────────────────────────────── */
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@ConceptCapsuleEdu";
const INSTAGRAM_URL       = "https://www.instagram.com/inspired_institute/";
const FACEBOOK_URL        = "https://www.facebook.com/InspiredInstituteVadodara/";

/* ─────────────────────────────────────────────────────────
   INLINE SVG ICONS  (lucide-react v1 doesn't have social icons)
───────────────────────────────────────────────────────── */
function YtIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function IgIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function FbIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   VIDEOS — replace VIDEO_ID_N with real YouTube video IDs
   How: open any video → copy the part after watch?v=
───────────────────────────────────────────────────────── */
const videos = [
  { id: "Q-NDYCowi-Q", title: "Physics Class 10 One Shot Revision",      subject: "Physics",     duration: "18 min", color: "var(--primary)" },
  { id: "9oZQewQlkdo", title: "MOST PROBABLE MCQs FOR CLASS 10 SCIENCE",         subject: "Biology",     duration: "10 min", color: "#065f46"         },
  { id: "niKXU51kFWc", title: "Inverse Trigonometric Functions",     subject: "Mathematics", duration: "14 min", color: "#7c3aed"         },
  { id: "ay9xNDZTT4Y", title: "Acids, Bases and Salts",     subject: "Chemistry",   duration: "22 min", color: "#0369a1"         },
  { id: "wxDhXiYvNYI", title: "Nationalism in India",     subject: "Social Science",     duration: "16 min", color: "var(--primary)" },
  { id: "4FV1j5neIQE", title: "Subject-Wise Marks Breakdown & Chapter Wise Weightage",  subject: "CBSE Class 10 Blueprint 2025-26",   duration: "20 min", color: "#0369a1"         },
];

type Tab = "All" | "Physics" | "Chemistry" | "Biology" | "Mathematics";
const tabs: Tab[] = ["All", "Physics", "Chemistry", "Biology", "Mathematics"];

/* ── Thumbnail — shows image, click plays inline ── */
function VideoThumb({ video, aspectClass = "aspect-video" }: { video: typeof videos[0]; aspectClass?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-[var(--muted)] ${aspectClass}`}>
      {!playing ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/15" />
          <button onClick={() => setPlaying(true)} aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center">
            <span className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl
              transition-all duration-300 group-hover:scale-110" style={{ background: "#FF0000" }}>
              <Play size={18} fill="white" stroke="none" />
            </span>
          </button>
        </>
      ) : (
        <iframe className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      )}
    </div>
  );
}

/* ── Subject pill ── */
function Pill({ subject, color }: { subject: string; color: string }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
      style={{ background: `${color}18`, color }}>
      {subject}
    </span>
  );
}

/* ── Meta line ── */
function Meta({ duration, color, subject }: { duration: string; color: string; subject: string }) {
  return (
    <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-faint)" }}>
      <span style={{ color: "#FF0000" }}><YtIcon size={11} /></span>
      <span style={{ color: "#FF0000", fontWeight: 700 }}>Concept Capsule</span>
      <span>·</span>
      <span style={{ color, fontWeight: 700 }}>{subject}</span>
      <span>·</span>
      <span>{duration}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   FEATURED SECTION — big card + medium card + sidebar list
───────────────────────────────────────────────────────── */
function FeaturedSection({ items }: { items: typeof videos }) {
  const [main, second, ...rest] = items;
  const sidebar = rest.slice(0, 3);

  return (
    <div>
      <div className="mb-6 pb-3" style={{ borderBottom: "2px solid var(--text)" }}>
        <h2 className="font-display text-xl font-black" style={{ color: "var(--text)" }}>
          Latest from Concept Capsule
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

        {/* Big card */}
        {main && (
          <div className="lg:col-span-4 group cursor-pointer flex flex-col gap-3">
            <VideoThumb video={main} aspectClass="aspect-[4/3]" />
            <Pill subject={main.subject} color={main.color} />
            <h3 className="font-display text-xl font-black leading-snug
              group-hover:text-[var(--primary)] transition-colors"
              style={{ color: "var(--text)" }}>
              {main.title}
            </h3>
            <Meta duration={main.duration} color={main.color} subject={main.subject} />
          </div>
        )}

        {/* Medium card */}
        {second && (
          <div className="lg:col-span-4 group cursor-pointer flex flex-col gap-3">
            <VideoThumb video={second} aspectClass="aspect-[4/3]" />
            <Pill subject={second.subject} color={second.color} />
            <h3 className="font-display text-lg font-bold leading-snug
              group-hover:text-[var(--primary)] transition-colors"
              style={{ color: "var(--text)" }}>
              {second.title}
            </h3>
            <Meta duration={second.duration} color={second.color} subject={second.subject} />
          </div>
        )}

        {/* Sidebar list — small thumbnail + text */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {sidebar.map((v) => (
            <div key={v.id} className="group cursor-pointer flex gap-3 items-start">
              <div className="relative flex-shrink-0 w-24 h-16 overflow-hidden rounded-xl bg-[var(--muted)]">
                <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,0,0,0.85)" }}>
                    <Play size={10} fill="white" stroke="none" />
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm leading-snug mb-1.5
                  group-hover:text-[var(--primary)] transition-colors line-clamp-2"
                  style={{ color: "var(--text)" }}>
                  {v.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-faint)" }}>
                  <span style={{ color: v.color, fontWeight: 700 }}>{v.subject}</span>
                  <span>·</span><span>{v.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LATEST GRID — 2-col grid (left side of bottom section)
───────────────────────────────────────────────────────── */
function LatestGrid({ items }: { items: typeof videos }) {
  return (
    <div>
      <div className="mb-6 pb-3" style={{ borderBottom: "2px solid var(--text)" }}>
        <h2 className="font-display text-xl font-black" style={{ color: "var(--text)" }}>
          Latest Videos
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((v) => (
          <div key={v.id} className="group cursor-pointer flex flex-col gap-3">
            <VideoThumb video={v} aspectClass="aspect-video" />
            <Pill subject={v.subject} color={v.color} />
            <h3 className="font-display text-base font-bold leading-snug
              group-hover:text-[var(--primary)] transition-colors"
              style={{ color: "var(--text)" }}>
              {v.title}
            </h3>
            <Meta duration={v.duration} color={v.color} subject={v.subject} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   POPULAR SIDEBAR — numbered list + social cards
───────────────────────────────────────────────────────── */
function PopularSidebar({ items }: { items: typeof videos }) {
  const socialCards = [
    {
      href: INSTAGRAM_URL,
      icon: <IgIcon size={18} />,
      bg: "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
      label: "Follow on Instagram",
      sub: "@inspired_institute",
    },
    {
      href: FACEBOOK_URL,
      icon: <FbIcon size={18} />,
      bg: "#1877F2",
      label: "Like on Facebook",
      sub: "Inspired Institute Vadodara",
    },
    {
      href: YOUTUBE_CHANNEL_URL,
      icon: <YtIcon size={18} />,
      bg: "#FF0000",
      label: "Subscribe on YouTube",
      sub: "Concept Capsule",
    },
  ];

  return (
    <div>
      <div className="mb-6 pb-3" style={{ borderBottom: "2px solid var(--text)" }}>
        <h2 className="font-display text-xl font-black" style={{ color: "var(--text)" }}>
          Popular Videos
        </h2>
      </div>

      {/* Numbered list */}
      <div className="flex flex-col gap-5 mb-8">
        {items.map((v, i) => (
          <div key={v.id} className="group cursor-pointer flex gap-4 items-start">
            <span className="font-display font-black flex-shrink-0"
              style={{ fontSize: "2rem", color: "var(--border-hover)", lineHeight: 1, minWidth: 36 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0 pt-1">
              <h4 className="font-bold text-sm leading-snug mb-1.5
                group-hover:text-[var(--primary)] transition-colors"
                style={{ color: "var(--text)" }}>
                {v.title}
              </h4>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-faint)" }}>
                <span style={{ color: v.color, fontWeight: 700 }}>{v.subject}</span>
                <span>·</span><span>{v.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social platform cards */}
      <div className="flex flex-col gap-3">
        {socialCards.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl group
              transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center
              flex-shrink-0 text-white transition-transform duration-300 group-hover:scale-110"
              style={{ background: s.bg }}>
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{s.label}</p>
              <p className="text-xs" style={{ color: "var(--text-faint)" }}>{s.sub}</p>
            </div>
            <ExternalLink size={13} style={{ color: "var(--text-faint)", flexShrink: 0 }} />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? videos
      : videos.filter((v) => v.subject === activeTab);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── CATEGORY TABS — mirrors the reference's top nav row ── */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="flex-shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-widest
                  transition-colors border-b-2"
                style={{
                  borderBottomColor: activeTab === tab ? "var(--text)" : "transparent",
                  color: activeTab === tab ? "var(--text)" : "var(--text-faint)",
                  background: "transparent",
                }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ── PAGE HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label mb-3">From Our Channels</span>
            <h1 className="font-display font-black leading-tight mt-3"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--text)" }}>
              Content &amp; Updates
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { href: YOUTUBE_CHANNEL_URL, icon: <YtIcon size={13} />, label: "Subscribe", bg: "#FF0000" },
              { href: INSTAGRAM_URL, icon: <IgIcon size={13} />, label: "Follow", bg: "linear-gradient(135deg,#e6683c,#cc2366)" },
              { href: FACEBOOK_URL, icon: <FbIcon size={13} />, label: "Like", bg: "#1877F2" },
            ].map((b) => (
              <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl
                  text-white transition-opacity hover:opacity-90"
                style={{ background: b.bg }}>
                {b.icon} {b.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── FEATURED ── */}
        <div className="mb-16">
          <FeaturedSection items={filtered.length >= 6 ? filtered : videos} />
        </div>

        <div className="mb-16" style={{ borderTop: "1px solid var(--border)" }} />

        {/* ── LATEST + POPULAR split ── */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <LatestGrid items={filtered.slice(0, 4)} />
          </div>
          <div className="lg:col-span-4">
            <PopularSidebar items={[...filtered].reverse().slice(0, 5)} />
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-20 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: "var(--primary)" }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)" }} />
          <h2 className="font-display text-3xl font-black text-white mb-3 relative z-10">
            Watch Free Lessons on Concept Capsule
          </h2>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto relative z-10">
            JEE · NEET · Class 5–12 · Taught by Vadodara's top faculty.
            New videos every week — subscribe so you never miss one.
          </p>
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl
              text-white relative z-10 transition-opacity hover:opacity-90"
            style={{ background: "#FF0000" }}>
            <YtIcon size={16} /> Go to Concept Capsule →
          </a>
        </div>

      </div>
    </div>
  );
}