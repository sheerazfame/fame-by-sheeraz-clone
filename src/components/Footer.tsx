import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const social = [
  {
    name: "X",
    href: SITE.social.x,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "Instagram",
    href: SITE.social.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "LinkedIn",
    href: SITE.social.linkedin,
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-7a2 2 0 110 4 2 2 0 010-4z",
  },
  {
    name: "YouTube",
    href: SITE.social.youtube,
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
];

const colMain = [
  { label: "Home", href: "/" },
  { label: "FAME AI", href: "/fame-ai" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "Press", href: "/press" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const colSister = [
  { label: "Hollywood.AI", href: "https://hollywood.ai" },
  { label: "Bollywood.AI", href: "https://bollywood.ai" },
  { label: "Hollywood.TV", href: "https://hollywood.tv" },
  { label: "Sheeraz.com", href: "https://sheeraz.com" },
  { label: "Dubai.news", href: "https://dubai.news" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0606] text-[#F5F0E8] border-t border-[#F5F0E8]/12">
      {/* Editorial colophon */}
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-12">
        {/* Masthead */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          <div className="lg:max-w-md">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-3d.png"
                alt="Fame by Sheeraz"
                width={120}
                height={84}
                className="h-16 w-auto"
              />
            </Link>
            <p
              className="font-serif italic text-[#F5F0E8]/70 leading-relaxed"
              style={{ fontSize: "20px" }}
            >
              Engineered fame for the people who already deserve it.
            </p>
            <p className="lede italic text-[#F5F0E8]/40 mt-6 text-sm">
              Issue No. XXVI · April 2026
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
            <div>
              <p className="kicker mb-5">Sections</p>
              <ul className="space-y-2.5">
                {colMain.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-serif italic text-[#F5F0E8]/70 hover:text-[#F14312] transition-colors text-base"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="kicker mb-5">Sister Titles</p>
              <ul className="space-y-2.5">
                {colSister.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif italic text-[#F5F0E8]/70 hover:text-[#C9A961] transition-colors text-base"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="kicker mb-5">Editorial Office</p>
              <ul className="space-y-2.5 text-sm">
                <li className="font-serif italic text-[#F5F0E8]/70">
                  8367 Sunset Blvd
                  <br />
                  West Hollywood, CA 90069
                </li>
                <li className="pt-2">
                  <a href={`mailto:${SITE.email}`} className="text-[#F5F0E8]/70 hover:text-[#F14312] transition-colors">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${SITE.whatsappUS.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/70 hover:text-[#F14312] transition-colors">
                    US · {SITE.whatsappUS}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${SITE.whatsappUAE.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-[#F5F0E8]/70 hover:text-[#F14312] transition-colors">
                    UAE · {SITE.whatsappUAE}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div className="rule mb-10" />

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-[#F5F0E8]/50 hover:text-[#F14312] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="lede italic text-[#F5F0E8]/35 text-xs">
            © {new Date().getFullYear()} Fame by Sheeraz. All rights reserved. Founded by Sheeraz Hasan.
          </p>
        </div>
      </div>
    </footer>
  );
}
