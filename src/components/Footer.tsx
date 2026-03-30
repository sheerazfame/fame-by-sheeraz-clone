import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/sheerazhasan",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    viewBox: "0 0 24 24",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sheerazhasan",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    viewBox: "0 0 24 24",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sheerazhasan",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-7a2 2 0 110 4 2 2 0 010-4z",
    viewBox: "0 0 24 24",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
    viewBox: "0 0 24 24",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.18 8.18 0 004.78 1.5V6.87a4.85 4.85 0 01-1.01-.18z",
    viewBox: "0 0 24 24",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Case studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const additionalLinks = [
  { label: "Dubai.news", href: "https://dubai.news" },
  { label: "Sheeraz.com", href: "https://sheeraz.com" },
  { label: "FAME 911", href: "#" },
  { label: "Hollywood.AI", href: "https://hollywood.ai" },
  { label: "Bollywood.AI", href: "https://bollywood.ai" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#01060D] border-t border-white/5"
      style={{
        background:
          "linear-gradient(to bottom, rgba(241,67,18,0.04) 0%, #01060D 60px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Logo + social + address */}
          <div className="flex flex-col gap-6">
            <Link href="#home" className="inline-block">
              <div className="relative h-16 w-20">
                <Image
                  src="/images/logo-3d.png"
                  alt="Fame by Sheeraz"
                  fill
                  className="object-contain object-left"
                  sizes="80px"
                />
              </div>
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[#EEEEEE]/40 hover:text-[#F14312] transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox={social.viewBox}
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/40 text-sm leading-relaxed">
              8367 Sunset Blvd, West Hollywood, CA 90069
            </p>
          </div>

          {/* Column 2: Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-sm uppercase tracking-widest mb-2">
              Contact
            </h3>

            {/* Email */}
            <a
              href="mailto:info@fame.me"
              className="flex items-center gap-2 text-[#EEEEEE]/60 hover:text-[#EEEEEE] transition-colors duration-300 font-[family-name:var(--font-inter)] text-sm"
            >
              <svg
                className="w-4 h-4 flex-shrink-0 text-[#F14312]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" />
              </svg>
              info@fame.me
            </a>

            {/* WhatsApp US */}
            <a
              href="https://wa.me/13109251667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EEEEEE]/60 hover:text-[#EEEEEE] transition-colors duration-300 font-[family-name:var(--font-inter)] text-sm"
            >
              <svg
                className="w-4 h-4 flex-shrink-0 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              (US) +1 (310) 925-1667
            </a>

            {/* WhatsApp UAE */}
            <a
              href="https://wa.me/971567868338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EEEEEE]/60 hover:text-[#EEEEEE] transition-colors duration-300 font-[family-name:var(--font-inter)] text-sm"
            >
              <svg
                className="w-4 h-4 flex-shrink-0 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              (UAE) +971 56 786 8338
            </a>
          </div>

          {/* Column 3: Nav links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-sm uppercase tracking-widest mb-2">
              Navigation
            </h3>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/50 hover:text-[#EEEEEE] transition-colors duration-300 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 4: Additional links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-sm uppercase tracking-widest mb-2">
              Our Sites
            </h3>
            {additionalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/50 hover:text-[#EEEEEE] transition-colors duration-300 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#EEEEEE]/20">
            &copy; {new Date().getFullYear()} Fame by Sheeraz. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
