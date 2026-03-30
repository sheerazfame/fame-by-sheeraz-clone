"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CALENDLY_URL =
  "https://calendly.com/free15-mindiscoverycall/fameauditcall";
const WHATSAPP_URL = "https://wa.me/15551234567";

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

function ChevronDownIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(0,0,0,0.95)] backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <Link
              href="/"
              className="relative text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE] font-[family-name:var(--font-inter)] font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1.5px] after:bg-[#EEEEEE]"
            >
              Home
            </Link>

            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 hover:text-[#EEEEEE] transition-colors duration-200 font-[family-name:var(--font-inter)] font-medium"
              >
                Services
                <ChevronDownIcon />
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-[rgba(0,0,0,0.95)] border border-white/10 py-1 transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] text-[#EEEEEE]/70 hover:text-[#EEEEEE] hover:bg-white/5 transition-colors duration-150 font-[family-name:var(--font-inter)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/casestudies"
              className="text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 hover:text-[#EEEEEE] transition-colors duration-200 font-[family-name:var(--font-inter)] font-medium"
            >
              Case Studies
            </Link>

            <Link
              href="/press"
              className="text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 hover:text-[#EEEEEE] transition-colors duration-200 font-[family-name:var(--font-inter)] font-medium"
            >
              Press
            </Link>

            <Link
              href="/contact"
              className="text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 hover:text-[#EEEEEE] transition-colors duration-200 font-[family-name:var(--font-inter)] font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F14312] hover:bg-[#EE4223] text-[#EEEEEE] text-[12px] uppercase tracking-[0.1em] font-bold transition-all duration-200 hover:scale-[1.02] font-[family-name:var(--font-inter)]"
            >
              <WhatsAppIcon />
              Free 15min Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#EEEEEE] p-2"
            aria-label="Toggle menu"
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
              className="flex items-center justify-between w-full py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 font-medium font-[family-name:var(--font-inter)]"
            >
              Services
              <span
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon />
              </span>
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
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Case Studies
          </Link>

          <Link
            href="/press"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Press
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[13px] uppercase tracking-[0.12em] text-[#EEEEEE]/80 font-medium font-[family-name:var(--font-inter)] border-b border-white/5"
          >
            Contact Us
          </Link>

          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#F14312] text-[#EEEEEE] text-[12px] uppercase tracking-[0.1em] font-bold font-[family-name:var(--font-inter)]"
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
