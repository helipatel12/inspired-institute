const academicFeatures = [
  {
    icon: "💡",
    title: "Conceptual Clarity",
    desc: "We focus on the 'why' and 'how' behind every concept — building deep understanding rather than rote memorization.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    desc: "One-on-one guidance sessions ensure every student gets individualized attention and a clear path forward.",
  },
  {
    icon: "📊",
    title: "Regular Analysis",
    desc: "Weekly tests with detailed performance tracking help students and parents understand progress in real time.",
  },
  {
    icon: "📚",
    title: "Structured Curriculum",
    desc: "Carefully sequenced syllabi aligned with board, JEE, and NEET patterns ensure complete coverage without gaps.",
  },
  {
    icon: "🔬",
    title: "Lab & Practice Sessions",
    desc: "Hands-on problem-solving workshops complement theory classes and build exam-day confidence.",
  },
  {
    icon: "🎯",
    title: "Target-Oriented Planning",
    desc: "Each student gets a personalized study roadmap aligned to their specific exam goals and timeline.",
  },
];

import galleryPicnic from "@/assets/gallery-picnic.jpg";
import gallery68 from "@/assets/gallery-class-6-8.jpg";
import gallery910 from "@/assets/gallery-class-9-10.jpg";
import gallery1112 from "@/assets/gallery-class-11-12.jpg";

const gallery = [
  { title: "Picnic",       src: galleryPicnic, desc: "Fun beyond the classroom" },
  { title: "Class 6–8",    src: gallery68,     desc: "Foundation builders" },
  { title: "Class 9–10",   src: gallery910,    desc: "Board-ready minds" },
  { title: "Class 11–12",  src: gallery1112,   desc: "JEE & NEET aspirants" },
];

function AcademicPage() {
  return (
    <section id="academic" className="py-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-4">How We Teach</span>
          <h1 className="font-display text-5xl font-black mt-4" style={{ color: "var(--text)" }}>
            Academic Excellence
          </h1>
          <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Our academic framework is built around understanding, not memorization —
            because real exam success comes from thinking clearly, not just studying hard.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {academicFeatures.map((f) => (
            <div key={f.title} className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "var(--primary-light)" }}
              >
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="section-label mb-3">Photo Gallery</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-3" style={{ color: "var(--text)" }}>
              Moments from our campus
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
              A glimpse into our classes, picnics, and everyday learning life.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <div
                key={g.title}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                style={{ boxShadow: "0 10px 30px -12px rgba(52,44,104,0.25)" }}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(36,30,78,0.85) 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-display text-lg font-bold">{g.title}</h3>
                  <p className="text-xs text-white/80">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: "var(--primary)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)" }}
          />
          <h2 className="font-display text-3xl font-black text-white mb-3">
            See Our Approach in Action
          </h2>
          <p className="text-white/60 mb-6 text-sm">
            Book a free demo class and experience the Inspired Institute difference.
          </p>
          <a href="/Connect" className="btn-accent">Book a Demo Class</a>
        </div>
      </div>
    </section>
  );
}

export default AcademicPage;