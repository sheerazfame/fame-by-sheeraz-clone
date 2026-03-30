import Image from "next/image";

const logos = [
  {
    src: "/images/logo-fame-masterclass.png",
    alt: "Fame Masterclass",
    href: "https://famemasterclass.com",
  },
  {
    src: "/images/logo-dubai-news.png",
    alt: "Dubai News",
    href: "https://dubai.news",
  },
  {
    src: "/images/logo-fame-bysheeraz.png",
    alt: "Fame by Sheeraz",
    href: "https://www.famebysheeraz.com",
  },
  {
    src: "/images/logo-hollywoodai.png",
    alt: "Hollywood.AI",
    href: "https://hollywood.ai",
  },
  {
    src: "/images/logo-bollywoodai.png",
    alt: "Bollywood.AI",
    href: "https://bollywood.ai",
  },
];

export default function InvestorsSection() {
  return (
    <section
      id="investors"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(180,60,10,0.3) 0%, #01060D 70%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top label */}
        <p
          className="font-[family-name:var(--font-inter)] uppercase tracking-widest text-[#EEEEEE]/40 mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          FOR INVESTORS / FAME ECOSYSTEM
        </p>

        {/* Main heading */}
        <h2
          className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] mb-8"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          INVEST IN THE FUTURE OF ATTENTION
        </h2>

        {/* Description */}
        <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          If you&apos;re interested in the business of making noise and position
          yourself for the next wave of attention and AI, to partner or invest
          with us, get in touch:
        </p>

        {/* CTA button */}
        <a
          href="mailto:info@fame.me"
          className="inline-flex items-center gap-3 bg-[#EE4223] hover:bg-[#F14312] transition-colors duration-300 text-white font-[family-name:var(--font-inter)] font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-full mb-16"
        >
          {/* Envelope icon */}
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" />
          </svg>
          INFO@FAME.ME
        </a>
      </div>

      {/* Logos row - wider container to fit all 5 in one row */}
      <div className="max-w-[1300px] mx-auto px-4 flex flex-wrap items-center justify-center gap-[10px]">
        {logos.map((logo) => (
          <a
            key={logo.alt}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="relative h-[150px] w-[233px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="233px"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
