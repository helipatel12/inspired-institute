const courseLinks = [
  { label: "Class 6–10 Foundation", href: "/Courses" },
  { label: "Class 11–12 Science",   href: "/Courses" },
  { label: "JEE Preparation",       href: "/Courses" },
  { label: "NEET Preparation",      href: "/Courses" },
  { label: "Olympiad & NTSE",       href: "/Courses" },
];

const pageLinks = [
  { label: "About Us",   href: "/About" },
  { label: "Academic",   href: "/Academic" },
  { label: "Our People", href: "/People" },
  { label: "Blog",       href: "/Blog" },
  { label: "Contact Us", href: "/Connect" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--text)", color: "white" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">

        {/* BRAND */}
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl font-black tracking-tight text-white">
            Inspired Institute
          </h2>
          <p className="font-semibold mt-1 text-base italic" style={{ color: "var(--accent)" }}>
            Empowering Future Scientists
          </p>
          <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-sm">
            Dedicated coaching for Class 6–12 Science, JEE, and NEET in Vadodara.
            We focus on conceptual clarity and consistent personal mentorship.
          </p>

          {/* Contact info */}
          <div className="mt-8 space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Call</span>
              <p className="text-white/70 text-sm mt-0.5">+91 99745 39118</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Email</span>
              <p className="text-white/70 text-sm mt-0.5">inspiredinstitute234@gmail.com</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Location</span>
              <p className="text-white/70 text-sm mt-0.5">Vadodara, Gujarat</p>
            </div>
          </div>
        </div>

        {/* COURSES */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Courses</h4>
          <ul className="space-y-3">
            {courseLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PAGES */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Pages</h4>
          <ul className="space-y-3">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="md:col-span-3">
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Stay Updated</h4>
          <p className="text-white/50 text-sm mb-4 leading-relaxed">
            Get exam tips, result updates, and admission alerts in your inbox.
          </p>
          <div className="relative mb-8">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "var(--accent)" }}
            >
              →
            </button>
          </div>

          {/* Social icons */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/40">Follow Us</p>
            <div className="flex gap-3">
              {[
                { icon: "f",  label: "Facebook",  href: "https://www.facebook.com/InspiredInstituteVadodara/" },
                { icon: "in", label: "Instagram", href: "https://www.instagram.com/inspired_institute/" },
                { icon: "yt", label: "YouTube",   href: "https://www.youtube.com/@ConceptCapsuleEdu" },
                { icon: "x", label: "X",  href: "#" },
              ].map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border text-xs font-black flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: i === 0 ? "var(--accent)" : "transparent",
                    borderColor: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.2)",
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
            <a href="/Connect" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
          <p className="uppercase tracking-widest">
            © {new Date().getFullYear()} Inspired Institute, Vadodara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}