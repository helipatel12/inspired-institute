"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" }, // Changed from "/About"
  { label: "Courses", href: "/#courses" }, // Changed from "/Courses"
  { label: "Academic", href: "/#academic" }, // Changed from "/Academic"
  {
    label: "People",
    children: [
      { label: "Staff", href: "/#people" },
      { label: "Faculty", href: "/#people" },
      { label: "Students", href: "/#people" },
    ],
  },
  { label: "Connect", href: "/#connect" }, // Changed from "/Connect"
  { label: "Blog", href: "/#blog" }, // Changed from "/Blog"
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-44 bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden z-50">
      {items.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={`block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors ${
            i !== 0 ? "border-t border-purple-50" : ""
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <>
      {/* MAIN NAV */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">

          {/* LOGO */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Inspired Institute"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-all">
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`text-slate-400 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 text-purple-500" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <DropdownMenu items={item.children} />
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-all"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* CTA BUTTON */}
          <a
            href="/admission"
            className="hidden lg:inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-orange-200 transition-all flex-shrink-0"
          >
            Get Admission
            <span className="bg-white/25 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-lg">
              2026
            </span>
          </a>

          {/* MOBILE BURGER */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-purple-50 px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`text-slate-400 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180 text-purple-500" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-purple-100 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-500 hover:text-purple-700 font-medium transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}

            <div className="pt-3 border-t border-purple-50 mt-2">
              <a
                href="/admission"
                className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold py-3 rounded-xl shadow-sm shadow-orange-100 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Admission 2026
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}