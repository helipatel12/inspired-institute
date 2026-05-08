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

export default function Academic() {
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