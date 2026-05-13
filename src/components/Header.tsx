"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_URL = "https://wa.me/971585131664";

const servicesDropdown = [
  { label: "Celebrities", href: "/services/celebrities" },
  { label: "For Entrepreneurs", href: "/services/entrepreneurs" },
  { label: "PR Services", href: "/services/prservices" },
  { label: "For Web3", href: "/services/web3" },
];

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.997 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.412 1.268 4.845L2 22l5.334-1.24C8.745 21.538 10.345 22 12 22c5.514 0 9.997-4.483 9.997-9.997S17.511 2 11.997 2z" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Hover-intent helpers
  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 220);
  };

  // Close dropdown on outside click + ESC
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  const navLinkClass = (active: boolean) =>
    `relative text-[13px] uppercase tracking-[0.12em] font-[family-name:var(--font-inter)] font-medium transition-colors duration-200 ${
      active
        ? "text-[#F14312] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#F14312]"
        : "text-[#EEEEEE]/85 hover:text-[#EEEEEE]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(0,0,0,0.95)] backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-[72px] gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Fame by Sheeraz"
              width={88}
              height={61}
              className="w-[72px] h-auto sm:w-[88px]"
              priority
            />
          </Link>

          {/* Desktop Navigation — centered */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            <Link href="/" className={navLinkClass(isActive("/"))}>
              Home
            </Link>

            {/* Services with mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 ${navLinkClass(
                  pathname.startsWith("/services")
                )}`}
              >
                Services
                <ChevronDownIcon open={servicesOpen} />
              </Link>

              {/* Invisible hover bridge — closes the gap between trigger and panel */}
              <div
                aria-hidden="true"
                className={`absolute top-full left-1/2 -translate-x-1/2 h-3 w-[460px] ${
                  servicesOpen ? "" : "pointer-events-none"
                }`}
              />

              {/* Mega-dropdown panel */}
              <div
                className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[460px] rounded-lg overflow-hidden shadow-2xl transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
                role="menu"
                aria-label="Services"
              >
                <div className="grid grid-cols-[1fr_180px]">
                  {/* Left column: items */}
                  <div className="bg-white py-3">
                    {servicesDropdown.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`block px-6 py-3 text-[13px] uppercase tracking-[0.18em] font-[family-name:var(--font-inter)] font-semibold transition-colors duration-150 ${
                            active
                              ? "text-[#F14312] bg-[#F14312]/5"
                              : "text-[#0a0a0a] hover:text-[#F14312] hover:bg-[#F14312]/5"
                          }`}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right column: FAME 3D logo */}
                  <div className="relative bg-gradient-to-br from-[#0A0606] to-[#1A0A05] flex items-center justify-center">
                    <Image
                      src="/images/logo-3d.png"
                      alt=""
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/casestudies"
              className={navLinkClass(isActive("/casestudies"))}
            >
              Case Studies
            </Link>
            <Link
              href="/press"
              className={navLinkClass(isActive("/press"))}
            >
              Press
            </Link>
            <Link
              href="/contact"
              className={navLinkClass(isActive("/contact"))}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block justify-self-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F14312] hover:bg-[#EE4223] text-white text-[12px] uppercase tracking-[0.1em] font-bold transition-all duration-200 hover:scale-[1.02] font-[family-name:var(--font-inter)]"
            >
              <WhatsAppIcon />
              Free 15min Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#EEEEEE] p-2 justify-self-end"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] w-full bg-[#EEEEEE] transition-transform duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#EEEEEE] transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#EEEEEE] transition-transform duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-[rgba(0,0,0,0.97)] border-t border-white/5 px-6 py-5 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE] font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Home
          </Link>

          {/* Mobile Services accordion */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/85 font-medium font-[family-name:var(--font-inter)]"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDownIcon open={mobileServicesOpen} />
            </button>
            {mobileServicesOpen && (
              <div className="pb-2 pl-4 space-y-1">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[12px] uppercase tracking-[0.1em] text-[#EEEEEE]/60 hover:text-[#EEEEEE] font-[family-name:var(--font-inter)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/casestudies"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/85 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Case Studies
          </Link>

          <Link
            href="/press"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/85 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Press
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/85 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Contact Us
          </Link>

          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#F14312] text-white text-[12px] uppercase tracking-[0.1em] font-bold font-[family-name:var(--font-inter)]"
            >
              <WhatsAppIcon />
              Free 15min Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
