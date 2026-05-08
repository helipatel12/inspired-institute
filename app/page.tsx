"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, ArrowRight, ChevronDown, ChevronRight, Star, Users, TrendingUp, Award } from "lucide-react";

/* ── HELPERS ── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function Img({ src, alt, fill, className, style, priority }: { src: string; alt: string; fill?: boolean; className?: string; style?: React.CSSProperties; priority?: boolean }) {
  const [err, setErr] = useState(false);
  if (fill) return err ? <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--muted)]" /> :
    <Image src={src} alt={alt} fill className={className} style={style} onError={() => setErr(true)} priority={priority} />;
  return err ? <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--muted)] rounded-inherit" /> :
    <Image src={src} alt={alt} fill className={className} style={style} onError={() => setErr(true)} priority={priority} />;
}

/* ── COUNTER ANIMATION ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let start = 0; const dur = 1800;
      const step = (ts: number) => {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / dur, 1);
        setVal(Math.floor(prog * target));
        if (prog < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── DATA ── */
const testimonials = [
  { name: "Rohan Mehta",   role: "JEE Advanced · AIR 280",  stars: 5, text: "The concept-first teaching at Inspired Institute changed how I approach every problem. I cleared JEE Advanced with confidence I never thought I'd have.", initials: "RM", color: "#0a4d35" },
  { name: "Priya Shah",    role: "NEET · Score 688/720",     stars: 5, text: "My biology scores went from average to exceptional in just one semester. The personal mentorship here is truly unmatched.",                          initials: "PS", color: "#e8880a" },
  { name: "Kiran Patel",   role: "Class 10 · Board 97.4%",  stars: 5, text: "Foundation program built my confidence from the ground up. I went from dreading maths to actually enjoying problem-solving sessions.", initials: "KP", color: "#7c3aed" },
  { name: "Anjali Desai",  role: "Parent · Class 11",        stars: 5, text: "Weekly test reports and one-on-one sessions gave us clarity on where to focus. My daughter improved 30% in three months.",                           initials: "AD", color: "#d94040" },
];

const newsItems = [
  { date: "May 08, 2026", title: "2026 Batch Admissions Open — Apply Before Seats Fill Up",        hot: true },
  { date: "Apr 28, 2026", title: "JEE Main Results: 12 Inspired Institute Students in Top 500",    hot: false },
  { date: "Apr 15, 2026", title: "NEET 2026 Preparation Workshop — Enroll for Free Demo Class",    hot: false },
  { date: "Mar 30, 2026", title: "Foundation Program Expanded to Include Class 6 & 7",             hot: false },
  { date: "Mar 10, 2026", title: "Inspired Institute Recognized Among Top Coaching Centers, Vadodara", hot: false },
];

const faqs = [
  { q: "What programs does Inspired Institute offer?",                    a: "We offer Foundation (Class 6–10), Class 11–12 Science, JEE Main & Advanced, NEET, Olympiad & NTSE coaching — all with dedicated faculty and weekly tests." },
  { q: "How can I apply for admission?",                                  a: "Visit our Contact page, fill in the enquiry form, and our counselors will reach out within 24 hours to guide you through the admission process." },
  { q: "Are scholarships or fee waivers available?",                      a: "Yes — merit-based fee concessions are available for students with strong academic records or financial need. Speak to our counselors for details." },
  { q: "What is the batch size for each program?",                        a: "We maintain small batches (15–25 students) to ensure every student receives personal attention from faculty." },
  { q: "Are demo or trial classes available before enrolling?",           a: "Absolutely. We offer free demo sessions for all programs. Book yours through the Contact page — no commitment required." },
];

const whyUs = [
  { icon: "🎓", title: "Inspiring Student Life",    desc: "A community of motivated learners, regular events, and a culture that celebrates curiosity and growth at every level.",      color: "var(--primary)" },
  { icon: "💰", title: "Education Affordability",   desc: "Quality coaching should be accessible. We offer merit scholarships, flexible fee plans, and free demo sessions for all.",  color: "var(--accent)"  },
  { icon: "🏆", title: "Core-Level Academics",      desc: "Curriculum built on conceptual depth, not rote learning — aligned with JEE, NEET, Board, Olympiad, and NTSE patterns.",  color: "#7c3aed"       },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: "var(--bg)" }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-16 md:py-0"
        style={{ background: "linear-gradient(135deg, #f0faf5 0%, #fffbf2 60%, #e6f4ee 100%)" }}>

        {/* Decorative dots */}
        <div className="absolute bottom-16 left-6 opacity-20 pointer-events-none" style={{ display:"grid", gridTemplateColumns:"repeat(7,8px)", gap:"8px" }}>
          {Array.from({length:35}).map((_,i)=><div key={i} className="w-1.5 h-1.5 rounded-full" style={{background:"var(--accent)"}}/>)}
        </div>
        <div className="absolute top-8 right-10 opacity-15 pointer-events-none" style={{ display:"grid", gridTemplateColumns:"repeat(5,8px)", gap:"8px" }}>
          {Array.from({length:20}).map((_,i)=><div key={i} className="w-1.5 h-1.5 rounded-full" style={{background:"var(--primary)"}}/>)}
        </div>
        {/* Color blobs */}
        <div className="absolute top-20 right-1/3 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{background:"var(--accent)",filter:"blur(80px)"}}/>
        <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-8 pointer-events-none" style={{background:"var(--primary)",filter:"blur(80px)"}}/>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

          {/* ── LEFT ── */}
          <div style={{zIndex:1}}>
            <FadeIn>
              <div className="flex items-center gap-2 mb-5">
                <span className="section-label">✦ Educate · Innovate · Lead</span>
              </div>
              <h1 className="font-display font-black leading-[1.05] mb-5"
                style={{fontSize:"clamp(2.8rem,5.5vw,4.5rem)", color:"var(--text)"}}>
                Turn Your Ambition<br/>
                into{" "}
                <em className="not-italic relative"
                  style={{color:"var(--primary)", fontStyle:"italic", fontFamily:"Playfair Display"}}>
                  Achievement
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 10" fill="none">
                    <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </em>
              </h1>
              <p className="text-sm leading-relaxed mb-8 max-w-md" style={{color:"var(--text-muted)"}}>
                Empowering students with concept clarity, personal mentorship, and
                a proven track record — right here in Vadodara.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="/Connect" className="btn-primary">Apply Now →</a>
                <a href="/About" className="btn-outline flex items-center gap-1.5">
                  <Play size={13}/> Explore More
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <div className="font-display text-4xl font-black" style={{color:"var(--primary)"}}>
                    <Counter target={95} suffix="%"/>
                  </div>
                  <div className="text-xs font-semibold mt-0.5" style={{color:"var(--text-faint)"}}>Our Success Rate</div>
                </div>
                <div className="w-px h-10 self-stretch" style={{background:"var(--border)"}}/>
                {/* Stacked avatars */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {["#0a4d35","#e8880a","#7c3aed","#d94040"].map((c,i)=>(
                      <div key={c} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-bold text-white text-[10px]"
                        style={{background:c, marginLeft:i>0?-8:0, zIndex:4-i}}>
                        {["R","S","V","P"][i]}
                      </div>
                    ))}
                    <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black -ml-2"
                      style={{background:"var(--accent)",color:"white"}}>+2K</span>
                  </div>
                  <div className="text-xs font-semibold" style={{color:"var(--text-faint)"}}>
                    <Counter target={1000} suffix="+"/> Total Students
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT — photo mosaic ── */}
          <FadeIn delay={150} className="relative h-[420px] md:h-[520px] hidden md:block">
            {/* Main big photo */}
            <div className="absolute right-0 top-0 w-[62%] h-[75%] rounded-3xl overflow-hidden shadow-2xl" style={{zIndex:2}}>
              <Img src="/home/hero-main.jpg" alt="Students at institute" fill className="object-cover" priority/>
            </div>
            {/* Bottom-left photo */}
            <div className="absolute left-0 bottom-0 w-[48%] h-[50%] rounded-3xl overflow-hidden shadow-xl" style={{zIndex:2}}>
              <Img src="/home/hero-students.jpg" alt="Group of students" fill className="object-cover"/>
            </div>
            {/* Floating stat card */}
            <div className="absolute bottom-12 right-4 rounded-2xl p-4 shadow-2xl" style={{background:"white",border:"1px solid var(--border)",zIndex:3,minWidth:160}}>
              <div className="flex items-center gap-2 mb-1">
                <Award size={16} style={{color:"var(--accent)"}}/>
                <span className="text-xs font-bold" style={{color:"var(--text-muted)"}}>Top Rated</span>
              </div>
              <div className="font-display text-2xl font-black" style={{color:"var(--primary)"}}>50+</div>
              <div className="text-xs" style={{color:"var(--text-faint)"}}>JEE/NEET Top Rankers</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT / OPPORTUNITY SECTION
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{background:"var(--primary)"}}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Photos */}
          <FadeIn className="relative h-[420px]">
            {/* Main graduation photo */}
            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-3xl overflow-hidden shadow-2xl" style={{zIndex:2}}>
              <Img src="/home/about-main.jpg" alt="Graduation ceremony" fill className="object-cover"/>
            </div>
            {/* Secondary photo */}
            <div className="absolute right-0 bottom-0 w-[52%] h-[58%] rounded-3xl overflow-hidden shadow-xl" style={{zIndex:2}}>
              <Img src="/home/about-secondary.jpg" alt="Students celebrating" fill className="object-cover"/>
            </div>
            {/* Badge */}
            <div className="absolute top-4 right-4 rounded-2xl px-4 py-2.5 shadow-lg" style={{background:"var(--accent)",zIndex:3}}>
              <div className="text-xs font-bold text-white/70 uppercase tracking-widest">Since</div>
              <div className="font-display text-lg font-black text-white">2015</div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={100}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{background:"rgba(232,136,10,0.2)",color:"var(--accent)"}}>Since 2015</span>
            <h2 className="font-display font-black leading-tight mb-5 text-white"
              style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)"}}>
              The right opportunity can<br/>
              turn dreams into{" "}
              <em className="not-italic" style={{color:"var(--accent)"}}>limitless potential.</em>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Founded in 2015, Inspired Institute is a student-driven coaching community
              in Vadodara renowned for its unique concept-first teaching model.
              We've shaped hundreds of JEE, NEET, and Board toppers — and we're just getting started.
            </p>

            {/* Animated stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                {num:30, suffix:"%", label:"Daily Growing Students", sub:"Are still growing"},
                {num:95, suffix:"%", label:"Are in a job related",   sub:"To their field of study"},
              ].map(s=>(
                <div key={s.label}>
                  <div className="font-display text-4xl md:text-5xl font-black mb-1" style={{color:"var(--accent)"}}>
                    <Counter target={s.num} suffix={s.suffix}/>
                  </div>
                  <div className="text-white/80 text-xs font-semibold">{s.label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
                  <div className="mt-2 h-1 rounded-full overflow-hidden" style={{background:"rgba(255,255,255,0.15)"}}>
                    <div className="h-full rounded-full" style={{width:`${s.num}%`,background:"var(--accent)",transition:"width 1.5s ease"}}/>
                  </div>
                </div>
              ))}
            </div>
            <a href="/About" className="btn-accent">Learn Our Story →</a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{background:"var(--bg)"}}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-label mb-4">Why Choose Us</span>
              <h2 className="font-display font-black mt-4" style={{fontSize:"clamp(1.6rem,3vw,2.5rem)",color:"var(--text)"}}>
                One of the most trusted,<br/>
                <span style={{color:"var(--primary)"}}>dedicated coaching centers</span> in Vadodara
              </h2>
              <p className="text-sm mt-3 max-w-xl mx-auto" style={{color:"var(--text-muted)"}}>
                Home to students from across the city, fostering discipline, inclusion, and
                world-class academic excellence since 2015.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {whyUs.map((w,i)=>(
              <FadeIn key={w.title} delay={i*100}>
                <div className="card p-7 text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{background:`${w.color}15`}}>
                    {w.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3" style={{color:w.color}}>{w.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{color:"var(--text-muted)"}}>{w.desc}</p>
                  <a href="/About" className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:underline" style={{color:w.color}}>
                    Read More <ArrowRight size={12}/>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VIDEO / EVENT BANNER
      ═══════════════════════════════════════ */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Img src="/home/event-bg.jpg" alt="Annual ceremony" fill className="object-cover"/>
        <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(10,77,53,0.85) 0%, rgba(6,29,19,0.75) 100%)"}}/>
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="max-w-xl" style={{zIndex:1}}>
            {/* Play btn */}
            <button
              onClick={()=>setVideoPlaying(true)}
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5 shadow-xl transition-transform hover:scale-105"
              style={{background:"white"}}>
              <Play size={18} fill="var(--primary)" stroke="var(--primary)" style={{marginLeft:2}}/>
            </button>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-2">
              Annual Results Ceremony 2026
            </h2>
            <p className="text-white/60 text-sm">
              Time &amp; Venue: 5:30 PM · Inspired Institute, Vadodara
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{background:"var(--muted)"}}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="section-label mb-4">Testimonials</span>
              <h2 className="font-display text-3xl md:text-4xl font-black mt-4" style={{color:"var(--text)"}}>
                Voices From Our<br/>
                <span style={{color:"var(--primary)"}}>Student Community</span>
              </h2>
            </div>
          </FadeIn>

          {/* Featured big testimonial */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <FadeIn>
              <div className="card p-8 h-full flex flex-col relative overflow-hidden"
                style={{border:`2px solid ${testimonials[activeTestimonial].color}30`}}>
                <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                  style={{background:testimonials[activeTestimonial].color}}/>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length:5}).map((_,si)=>(
                    <Star key={si} size={16} fill="#f59e0b" stroke="none"/>
                  ))}
                </div>
                <p className="text-base leading-relaxed flex-1 mb-6 font-medium italic"
                  style={{color:"var(--text-muted)"}}>
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-black text-white text-base"
                    style={{background:testimonials[activeTestimonial].color}}>
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{color:"var(--text)"}}>{testimonials[activeTestimonial].name}</p>
                    <p className="text-xs" style={{color:"var(--text-faint)"}}>{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Mini testimonial grid */}
            <div className="grid grid-cols-2 gap-4">
              {testimonials.map((t,i)=>(
                <button key={t.name} onClick={()=>setActiveTestimonial(i)}
                  className="card p-4 text-left transition-all duration-300"
                  style={activeTestimonial===i?{border:`1.5px solid ${t.color}`,transform:"translateY(-2px)",boxShadow:`0 8px 24px ${t.color}20`}:{}}>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({length:t.stars}).map((_,si)=><Star key={si} size={11} fill="#f59e0b" stroke="none"/>)}
                  </div>
                  <p className="text-[11px] leading-snug mb-2" style={{color:"var(--text-muted)"}}>
                    "{t.text.slice(0,70)}…"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-white text-[9px] flex-shrink-0"
                      style={{background:t.color}}>{t.initials}</div>
                    <div>
                      <p className="font-bold text-[10px]" style={{color:"var(--text)"}}>{t.name}</p>
                      <p className="text-[9px]" style={{color:"var(--text-faint)"}}>{t.role.split("·")[0]}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_,i)=>(
              <button key={i} onClick={()=>setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300"
                style={{width:i===activeTestimonial?24:8,height:8,background:i===activeTestimonial?"var(--primary)":"var(--border)"}}/>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWS / BLOG
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{background:"var(--bg)"}}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* News list */}
          <FadeIn>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="section-label mb-3">News &amp; Events</span>
                <h2 className="font-display text-2xl md:text-3xl font-black mt-3" style={{color:"var(--text)"}}>
                  News about our institute
                </h2>
              </div>
              <a href="/Blog" className="text-xs font-bold flex items-center gap-1 hover:underline flex-shrink-0" style={{color:"var(--primary)"}}>
                View All <ArrowRight size={11}/>
              </a>
            </div>
            <div className="space-y-3">
              {newsItems.map((n,i)=>(
                <div key={n.title}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer group transition-all hover:shadow-md"
                  style={{background:"var(--surface)",border:"1px solid var(--border)"}}>
                  <div className="flex-shrink-0 text-center">
                    <div className="text-xs font-bold" style={{color:"var(--text-faint)"}}>{n.date.split(",")[0].split(" ").slice(0,2).join(" ")}</div>
                  </div>
                  <div className="w-px h-8 flex-shrink-0" style={{background:"var(--border)"}}/>
                  <p className="text-sm font-semibold flex-1 group-hover:text-[var(--primary)] transition-colors" style={{color:"var(--text)"}}>
                    {n.title}
                  </p>
                  {n.hot && (
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0" style={{background:"var(--red)",color:"white"}}>
                      New
                    </span>
                  )}
                  <ChevronRight size={14} style={{color:"var(--text-faint)", flexShrink:0}}/>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Photo + stats */}
          <FadeIn delay={120}>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Img src="/home/news-photo.jpg" alt="Institute building" fill className="object-cover"/>
              <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(10,77,53,0.8) 0%, transparent 50%)"}}/>
              {/* Stat pills */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                {[
                  {icon:<TrendingUp size={14}/>, label:"1,000+ Alumni"},
                  {icon:<Users size={14}/>,      label:"50+ Top Rankers"},
                  {icon:<Award size={14}/>,       label:"10+ Years"},
                ].map(s=>(
                  <div key={s.label} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white"
                    style={{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)"}}>
                    {s.icon}{s.label}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6" style={{background:"var(--muted)"}}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* FAQ photo */}
          <FadeIn className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Img src="/home/faq-photo.jpg" alt="Institute campus" fill className="object-cover"/>
            <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(10,77,53,0.3), transparent)"}}/>
          </FadeIn>

          {/* FAQ list */}
          <FadeIn delay={100}>
            <span className="section-label mb-4">FAQ</span>
            <h2 className="font-display text-3xl font-black mt-4 mb-8" style={{color:"var(--text)"}}>
              Frequently Asked<br/>Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq,i)=>(
                <div key={faq.q}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{background:"var(--surface)",border:`1.5px solid ${openFaq===i?"var(--primary)":"var(--border)"}`}}>
                  <button
                    onClick={()=>setOpenFaq(openFaq===i?null:i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-3">
                    <span className="font-semibold text-sm" style={{color:"var(--text)"}}>{faq.q}</span>
                    <ChevronDown size={16} style={{color:"var(--text-faint)",transform:openFaq===i?"rotate(180deg)":"none",transition:"transform 0.3s",flexShrink:0}}/>
                  </button>
                  {openFaq===i && (
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed" style={{color:"var(--text-muted)"}}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <Img src="/home/cta-bg.jpg" alt="Campus background" fill className="object-cover"/>
        <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(10,77,53,0.93) 0%, rgba(6,45,31,0.88) 100%)"}}/>
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{background:"rgba(232,136,10,0.25)",color:"var(--accent)"}}>
              2026 Admissions Open
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Start Your Journey<br/>
              <em className="not-italic" style={{color:"var(--accent)"}}>Toward a Brighter Future.</em>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Join a diverse, forward-thinking academic community committed to excellence,
              innovation, and global opportunity — starting right here in Vadodara.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/Connect" className="btn-accent text-base px-8 py-4">Apply Now →</a>
              <a href="/Courses" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">
                View Courses
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}