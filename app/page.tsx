const courses = [
  {
    title: "Class 6–10 Foundation",
    description:
      "Build strong fundamentals with conceptual learning designed to prepare students for competitive exams ahead.",
    accent: "bg-[#1a3a6e]",
    icon: "📚",
  },
  {
    title: "Class 11–12 Science",
    description:
      "Rigorous board exam preparation integrated with JEE/NEET readiness for science stream students.",
    accent: "bg-[#f5c842]",
    icon: "🔬",
  },
  {
    title: "JEE & NEET Preparation",
    description:
      "Dedicated long-term programs and crash courses for engineering and medical entrance aspirants.",
    accent: "bg-[#e04040]",
    icon: "🎯",
  },
];

const stats = [
  { number: "1,000+", label: "Students Trained" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Top Rankers" },
];

const whyUs = [
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    description:
      "Our teachers bring years of expertise and a passion for making complex concepts approachable.",
  },
  {
    icon: "📊",
    title: "Regular Tests & Analysis",
    description:
      "Weekly tests with detailed performance analysis to track and accelerate every student's progress.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    description:
      "One-on-one guidance to ensure every student gets the attention and direction they need to succeed.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f7f3] text-[#0d1b3e] min-h-screen">

      {/* ── HERO ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left copy */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-[#1a3a6e] uppercase bg-blue-100 rounded-full">
              Admissions Open 2026
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-[1.08] text-[#0d1b3e] mb-6">
              Shaping the Future of{" "}
              <em className="not-italic text-[#1a3a6e]">Science Education</em>
            </h1>
            <p className="text-base md:text-lg text-[#5a5a7a] leading-relaxed mb-8 max-w-md">
              Empowering students through concept clarity and expert mentorship
              for JEE, NEET, and Board Exams.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#1a3a6e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#0d1b3e] transition-colors"
              >
                Get Admission
              </a>
              <a
                href="#courses"
                className="bg-white border border-[#1a3a6e] text-[#1a3a6e] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
            <p className="text-xs font-semibold text-[#1a3a6e] uppercase tracking-widest mb-5">
              Our Achievements
            </p>
            <div className="grid grid-cols-3 gap-4 mb-7">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-black text-[#f5c842]">
                    {s.number}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold text-[#1a3a6e] uppercase tracking-widest mb-4">
              Programs Offered
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Class 6–10 Foundation", color: "bg-[#1a3a6e]" },
                { label: "Class 11–12 Science", color: "bg-[#f5c842]" },
                { label: "JEE & NEET Preparation", color: "bg-[#e04040]" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-xl"
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.color}`} />
                  <span className="text-sm font-medium text-gray-700">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#1a3a6e] py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-black text-[#f5c842]">
                {s.number}
              </div>
              <div className="text-xs text-white/60 uppercase tracking-widest mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-black text-center text-[#0d1b3e] mb-2">
            Our Courses
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            Structured learning with expert faculty and regular assessments
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`h-1 ${c.accent}`} />
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0d1b3e] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#f0ede6] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-black text-center text-[#0d1b3e] mb-2">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            What sets our institute apart from the rest
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4">
                  {w.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0d1b3e] mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #1a3a6e 100%)" }}
      >
        <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-white/60 text-base mb-8">
          Admissions Open for 2026 Batch — Limited seats available
        </p>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f5c842] text-[#0d1b3e] px-9 py-4 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors"
        >
          Apply Now
        </a>
      </section>

    </main>
  );
}