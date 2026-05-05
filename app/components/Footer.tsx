const services = ["Planning", "Research", "Consulting", "Analysis", "User Testing"];
const companyLinks = ["Who We Are", "Our Services", "Our Clients", "Pricing", "Contact Us"];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">

        {/* 🏢 BRAND & ABOUT */}
        <div className="md:col-span-4">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
            Inspired Institute
          </h2>
          <p className="text-red-500 font-bold mt-1 text-lg italic">
            Empowering Future Scientists
          </p>
          
          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">About Us</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Dedicated coaching for Class 6–12 Science, JEE, and NEET. 
              We focus on delivering high-quality education through conceptual clarity 
              and consistent student mentorship.
            </p>
          </div>
        </div>

        {/* 📚 SERVICES (COURSES) */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🏛️ COMPANY */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 CONTACT & NEWSLETTER */}
        <div className="md:col-span-4">
          <h4 className="font-bold text-lg mb-6">Contact us</h4>
          <div className="space-y-4 mb-8">
            <div>
              <p className="font-bold text-sm">Call :</p>
              <p className="text-gray-600 text-sm">+91 XXXXX XXXXX</p>
            </div>
            <div>
              <p className="font-bold text-sm">Email:</p>
              <p className="text-gray-600 text-sm">inspiredinstitute234@gmail.com</p>
            </div>
            <div className="w-8 h-1 bg-red-500 rounded-full" />
          </div>

          {/* NEWSLETTER */}
          <div className="relative mb-6">
            <input 
              type="email" 
              placeholder="Write Email" 
              className="w-full bg-gray-100 border-none rounded py-3 px-4 text-sm focus:ring-1 focus:ring-red-500 outline-none"
            />
            <button className="absolute right-0 top-0 h-full bg-red-500 text-white px-3 rounded-r hover:bg-red-600 transition-colors">
              ▶
            </button>
          </div>

          {/* SOCIALS */}
          <div className="mt-6">
            <div className="flex gap-3 mb-3">
              {['F', 'T', 'L', 'W', 'I'].map((icon, idx) => (
                <div 
                  key={idx} 
                  className={`w-9 h-9 rounded-full flex items-center justify-center border text-sm font-bold cursor-pointer transition-colors
                    ${idx === 0 ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'}`}
                >
                  {icon}
                </div>
              ))}
            </div>
            <p className="font-bold text-lg text-slate-900">Follow Us</p>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="bg-[#0f172a] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400">Privacy Policy</a>
            <span className="text-red-500">|</span>
            <a href="#" className="hover:text-red-400">Our History</a>
            <span className="text-red-500">|</span>
            <a href="#" className="hover:text-red-400">What We Do</a>
          </div>
          <p className="text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Inspired Institute. All images are for demo purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}