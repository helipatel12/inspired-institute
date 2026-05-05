import Image from "next/image";

const testimonials = [
  {
    name: "Joao M.",
    role: "Startup Founder",
    text: "Inspired Institute makes complex science concepts so easy to grasp! The mentorship is top-notch.",
    stars: 5,
  },
  {
    name: "Bruno K.",
    role: "JEE Aspirant",
    text: "Our team needed a disciplined environment for NEET prep, and Inspired Institute delivered exactly that.",
    stars: 5,
  },
  {
    name: "Lais A.",
    role: "Parent",
    text: "I love the personal attention my child receives here. The foundation course has built immense confidence.",
    stars: 5,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto">
        
        {/* ── IMAGE GALLERY (MASONRY STYLE) ── */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16 overflow-hidden">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="w-32 h-40 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-300 animate-pulse" /> 
            </div>
            <div className="w-32 h-48 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-400 animate-pulse" />
            </div>
          </div>
          {/* Column 2 - Taller Middle */}
          <div className="flex flex-col gap-4">
            <div className="w-36 h-56 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-300 animate-pulse" />
            </div>
            <div className="w-36 h-44 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-500 animate-pulse" />
            </div>
          </div>
          {/* Column 3 - Center Hero */}
          <div className="w-44 h-72 bg-gray-200 rounded-3xl overflow-hidden relative">
             <div className="absolute inset-0 bg-slate-600 animate-pulse" />
          </div>
          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <div className="w-36 h-48 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-300 animate-pulse" />
            </div>
            <div className="w-36 h-56 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-400 animate-pulse" />
            </div>
          </div>
          {/* Column 5 */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="w-32 h-44 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            </div>
            <div className="w-32 h-40 bg-gray-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 border border-gray-300 rounded-full text-xs font-medium text-[#5a5a7a] mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0d1b3e] leading-tight">
            Trusted by students and leaders <br />
            <span className="text-[#5a5a7a] font-medium italic">from various backgrounds</span>[cite: 3]
          </h2>
        </div>

        {/* ── TESTIMONIALS GRID ── */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex text-[#f5c842] mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-[#5a5a7a] text-sm leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden" />
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b3e]">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}