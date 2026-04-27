import Link from "next/link";
import Image from "next/image";

interface Offer {
  numeral: string;
  title: string;
  oneLiner: string;
  href: string;
  image: string;
}

const OFFERS: Offer[] = [
  {
    numeral: "01",
    title: "Fame Strategy",
    oneLiner: "Unknown to household name.",
    href: "/fame-ai",
    image: "/case-studies/01-kim-kardashian.webp",
  },
  {
    numeral: "02",
    title: "AI Execution",
    oneLiner: "Press, social, search — every week.",
    href: "/fame-ai",
    image: "/case-studies/02-logan-paul.webp",
  },
  {
    numeral: "03",
    title: "Press & Amplification",
    oneLiner: "Tier-1 placements you control.",
    href: "/services/prservices",
    image: "/case-studies/03-zendaya.webp",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="what"
      className="bg-[#0A0606] py-20 sm:py-28 border-t border-[#F5F0E8]/8"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="kicker kicker-fire mb-3">What we do</p>
          <h2
            className="font-display text-[#F5F0E8]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: "0.95",
              letterSpacing: "-0.012em",
            }}
          >
            Three things. <em className="font-serif italic font-normal text-[#F14312]">Done well.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {OFFERS.map((o) => (
            <Link
              key={o.numeral}
              href={o.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-[#14100D]"
            >
              <Image
                src={o.image}
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,6,6,0.4) 0%, rgba(10,6,6,0.1) 35%, rgba(10,6,6,0.85) 100%)",
                }}
              />

              {/* Top-left numeral */}
              <span className="absolute top-5 left-6 numeral text-[#C9A961] text-base">
                {o.numeral}
              </span>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3
                  className="font-display text-[#F5F0E8] mb-2"
                  style={{ fontSize: "clamp(26px, 2.6vw, 38px)", lineHeight: "1" }}
                >
                  {o.title}
                </h3>
                <p className="font-serif italic text-[#F5F0E8]/80 text-base sm:text-lg leading-snug mb-4">
                  {o.oneLiner}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#F5F0E8]/65 group-hover:text-[#F14312] transition-colors">
                  Explore
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
