export default function Academic() {
  const academicFeatures = [
    { title: "Conceptual Clarity", desc: "Focus on 'why' and 'how' rather than rote memorization[cite: 2]." },
    { title: "Personal Mentorship", desc: "One-on-one guidance to ensure every student's success." },
    { title: "Regular Analysis", desc: "Weekly tests with detailed performance tracking[cite: 3]." }
  ];

  return (
    <section id="academic" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-black text-center text-[#0d1b3e] mb-12">Academic Excellence</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {academicFeatures.map((feature) => (
            <div key={feature.title} className="p-6 bg-white rounded-xl border border-slate-100">
              <h3 className="font-bold text-[#1a3a6e] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#5a5a7a]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}