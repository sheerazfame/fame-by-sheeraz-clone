"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FAME_AI_PACKAGES } from "@/lib/services";
import { SITE } from "@/lib/site";

const fameAiDropdown = FAME_AI_PACKAGES.map((p) => ({
  label: p.shortName,
  href: `/services/${p.slug}`,
}));

const legacyDropdown = [
  { label: "Celebrities", href: "/services/celebrities" },
  { label: "For Entrepreneurs", href: "/services/entrepreneurs" },
  { label: "PR Services", href: "/services/prservices" },
  { label: "Networking", href: "/services/networking" },
];

const navItems = [
  { label: "FAME AI", href: "/fame-ai" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "Press", href: "/press" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function ChevronIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 4l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [servicesOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Hover-intent: open instantly, close after small delay
  const onEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const onLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 220);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0606]/85 backdrop-blur-xl border-b border-[#F5F0E8]/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Fame by Sheeraz — Home">
            <Image
              src="/images/logo.png"
              alt="Fame by Sheeraz"
              width={88}
              height={61}
              className="w-[68px] h-auto sm:w-[80px]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link
              href="/"
              className={`text-[12px] uppercase tracking-[0.22em] font-sans transition-colors duration-200 ${
                isActive("/") ? "text-[#F5F0E8]" : "text-[#F5F0E8]/65 hover:text-[#F5F0E8]"
              }`}
            >
              Home
            </Link>

            {/* Services hover dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.22em] font-sans text-[#F5F0E8]/65 hover:text-[#F5F0E8] transition-colors duration-200"
              >
                Services
                <span
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>

              {/* Hover bridge — kills the gap that closes the menu prematurely */}
              <div
                aria-hidden="true"
                className={`absolute left-0 right-0 h-3 top-full ${
                  servicesOpen ? "" : "pointer-events-none"
                }`}
              />

              {/* Dropdown panel */}
              <div
                role="menu"
                className={`absolute top-[calc(100%+12px)] -left-6 w-[520px] bg-[#0A0606]/96 backdrop-blur-xl border border-[#F5F0E8]/10 transition-all duration-300 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-[#F5F0E8]/8">
                    <p className="kicker kicker-fire mb-4">FAME AI</p>
                    <ul className="flex flex-col gap-1">
                      {fameAiDropdown.map((item, i) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className="group flex items-baseline gap-3 py-1.5 text-[13px] text-[#F5F0E8]/75 hover:text-[#F14312] transition-colors duration-150 font-sans"
                          >
                            <span className="numeral text-[11px] text-[#F5F0E8]/30 group-hover:text-[#F14312]/60 transition-colors w-5">
                              {romanize(i + 1)}.
                            </span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <p className="kicker kicker-gold mb-4">Legacy</p>
                    <ul className="flex flex-col gap-1">
                      {legacyDropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className="block py-1.5 text-[13px] text-[#F5F0E8]/75 hover:text-[#C9A961] transition-colors duration-150 font-sans"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-[#F5F0E8]/8 px-6 py-4 flex items-center justify-between">
                  <span className="lede text-[12px] text-[#F5F0E8]/45">
                    Not sure where to start?
                  </span>
                  <Link
                    href="/fame-ai"
                    className="text-[11px] uppercase tracking-[0.22em] text-[#F14312] hover:text-[#F5F0E8] transition-colors"
                  >
                    Take the Audit →
                  </Link>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] uppercase tracking-[0.22em] font-sans transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#F5F0E8]"
                    : "text-[#F5F0E8]/65 hover:text-[#F5F0E8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-[11px]"
            style={{ padding: "10px 22px" }}
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-[#F5F0E8] p-2 -mr-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <CloseIcon />
            ) : (
              <div className="w-6 flex flex-col gap-[6px]">
                <span className="block h-[1.5px] w-full bg-[#F5F0E8]" />
                <span className="block h-[1.5px] w-2/3 bg-[#F5F0E8] ml-auto" />
                <span className="block h-[1.5px] w-full bg-[#F5F0E8]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer (full-screen) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#0A0606] transition-transform duration-400 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-10">
          <Link
            href="/"
            className="block py-4 text-[28px] font-display italic uppercase text-[#F5F0E8] border-b border-[#F5F0E8]/10"
          >
            Home
          </Link>

          <div className="border-b border-[#F5F0E8]/10">
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full py-4 text-[28px] font-display italic uppercase text-[#F5F0E8]/75"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <span
                className={`transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronIcon />
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="pb-5 pl-2 space-y-5">
                <div>
                  <p className="kicker kicker-fire mb-3">FAME AI</p>
                  <ul className="space-y-2">
                    {fameAiDropdown.map((item, i) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-baseline gap-3 py-1 text-[15px] text-[#F5F0E8]/75 font-sans"
                        >
                          <span className="numeral text-[12px] text-[#F14312]/70 w-6">
                            {romanize(i + 1)}.
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="kicker kicker-gold mb-3">Legacy</p>
                  <ul className="space-y-2">
                    {legacyDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-1 text-[15px] text-[#F5F0E8]/75 font-sans"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-4 text-[28px] font-display italic uppercase text-[#F5F0E8]/75 border-b border-[#F5F0E8]/10"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-10">
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Book a Call
            </a>
          </div>

          <p className="mt-12 lede text-sm text-[#F5F0E8]/40">
            Fame by Sheeraz · Issue No. XXVI · April 2026
          </p>
        </div>
      </div>
    </header>
  );
}

function romanize(n: number): string {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? String(n);
}
