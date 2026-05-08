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
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Courses",  href: "/Courses" },
  { label: "Academic", href: "/Academic" },
  {
    label: "People",
    children: [
      { label: "All Staff",  href: "/People" },
      { label: "Faculty",    href: "/People" },
      { label: "Our Team",   href: "/People" },
    ],
  },
  { label: "Blog",    href: "/Blog" },
  { label: "Contact", href: "/Connect" },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden z-50">
      {items.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={`block px-4 py-3 text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors ${
            i !== 0 ? "border-t border-[var(--border)]" : ""
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]           = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 130);
  };
  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(250,248,242,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(10,77,53,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

          {/* LOGO */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Inspired Institute"
              width={160}
              height={60}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-all">
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`text-[var(--text-faint)] transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && <DropdownMenu items={item.children} />}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-all"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <a
            href="/Connect"
            className="hidden lg:inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl flex-shrink-0 transition-all"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
              boxShadow: "0 3px 12px var(--accent-glow)",
            }}
          >
            Get Admission
            <span className="bg-white/20 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md">
              2026
            </span>
          </a>

          {/* BURGER */}
          <button
            className="lg:hidden p-2 rounded-xl text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[var(--border)] px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180 text-[var(--accent)]" : "text-[var(--text-faint)]"
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[var(--primary-light)] pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] font-medium transition-colors"
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
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <div className="pt-3 border-t border-[var(--border)] mt-2">
              <a
                href="/Connect"
                className="flex items-center justify-center w-full text-white text-sm font-bold py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))" }}
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