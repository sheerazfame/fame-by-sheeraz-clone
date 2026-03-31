import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | famebysheeraz.com",
};

interface CaseStudyCard {
  name: string;
  image: string;
}

const caseStudies: CaseStudyCard[] = [
  { name: "PARIS HILTON", image: "/images/cs-paris-hilton.jpg" },
  { name: "MILEY CYRUS", image: "/images/cs-miley.jpg" },
  { name: "PRIYANKA CHOPRA", image: "/images/cs-priyanka.jpg" },
  { name: "ZENDAYA", image: "/images/cs-zendaya.jpg" },
  { name: "RICKY MARTIN", image: "/images/cs-ricky-martin.jpg" },
  { name: "CZ / BINANCE", image: "/images/cs-kim-k.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        className="relative bg-black overflow-hidden"
        style={{ height: "clamp(500px, 58.85vw, 904px)" }}
      >
        {/* Hollywood Hills background */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "2.08%",
            width: "94.86%",
            height: "69.25%",
          }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="Fame by Sheeraz Hollywood Hills"
            fill
            className="object-cover"
            sizes="95vw"
            unoptimized
          />
        </div>

        {/* Celebrity collage */}
        <div
          className="absolute"
          style={{
            top: "21.35%",
            left: "22.33%",
            width: "54.3%",
            height: "78.65%",
          }}
        >
          <Image
            src="/images/hero-celebs.webp"
            alt="Sheeraz Hasan with celebrities"
            fill
            className="object-contain object-bottom"
            sizes="55vw"
            priority
            unoptimized
          />
        </div>

        {/* Quote overlay — right side */}
        <div
          className="absolute text-right"
          style={{
            top: "10%",
            right: "3%",
            width: "35%",
          }}
        >
          <p
            className="font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#EEEEEE] leading-tight"
            style={{ fontSize: "clamp(18px, 2.6vw, 40px)" }}
          >
            #1 Fame &amp; AI Strategist
          </p>
          <p
            className="font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#F14312] leading-tight mt-2"
            style={{ fontSize: "clamp(22px, 3.2vw, 50px)" }}
          >
            Fame by Sheeraz
          </p>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="bg-white text-[#01060D]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic leading-[1.15]"
            style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
          >
            What do Kim Kardashian, Logan Paul, and Zendaya have in common? Just
            ask Sheeraz Hasan.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] mt-8 leading-relaxed max-w-[960px] mx-auto"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            Sheeraz is the self-made media mogul who turned them all into the
            world&apos;s most famous celebrities. In other words, he&apos;s the
            man who can make just about anyone famous.
          </p>
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section className="bg-white text-[#01060D]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — photo */}
          <div className="relative min-h-[500px] md:min-h-[700px]">
            <Image
              src="/images/about-sheeraz.jpg"
              alt="Sheeraz Hasan"
              fill
              className="object-cover"
              style={{ objectPosition: "58% 26%" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* Right — bio text */}
          <div className="flex flex-col justify-center px-10 py-14 lg:px-16 lg:py-20">
            <h2
              className="font-[family-name:var(--font-barlow)] font-bold text-[#01060D] mb-8"
              style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
            >
              About Sheeraz Hasan
            </h2>

            <div className="font-[family-name:var(--font-inter)] text-[#01060D] text-base leading-relaxed space-y-5">
              <p>
                Sheeraz Hasan is a global fame strategist and media operator who
                has managed the careers and media presence of some of the
                biggest names in entertainment &mdash; including Kim Kardashian,
                Paris Hilton, Zendaya, Miley Cyrus, Justin Bieber, Priyanka
                Chopra, Logan Paul, and many more. He is referred to as the
                &ldquo;#1 Fame and AI Strategist in the World.&rdquo;
              </p>
              <p>
                With over 25 years of experience at the intersection of
                celebrity, technology, and media, Sheeraz has built large-scale
                amplification systems reaching billions of viewers worldwide. He
                is the founder of Hollywood.TV, one of the largest celebrity
                content providers globally, supplying real-time celebrity
                coverage to outlets including TMZ, Daily Mail, CNN, Fox News,
                Reuters, and other major media organizations.
              </p>
              <p>
                In recognition of his influence and contributions, Sheeraz was
                awarded the UAE Golden Visa &mdash; a distinction reserved for
                exceptional individuals contributing to innovation, culture, and
                industry. He continues to expand his impact through his company
                FAME by Sheeraz, which provides media consultation, celebrity
                partnerships, and AI-driven amplification services to
                individuals, brands, and institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies Section ── */}
      <section className="bg-[#01060D] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] text-center mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Case Studies
          </h2>

          {/* Grid — 3 columns x 2 rows */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study) => (
              <div key={study.name} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-[3/4] bg-[#050a14] overflow-hidden mb-3">
                  <Image
                    src={study.image}
                    alt={study.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#F14312] transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-barlow)] font-extrabold italic text-[#EEEEEE] text-base sm:text-lg text-center uppercase leading-tight">
                  {study.name}
                </h3>
              </div>
            ))}
          </div>

          {/* All case studies link */}
          <div className="text-center mt-12">
            <Link
              href="/casestudies"
              className="inline-block font-[family-name:var(--font-barlow)] font-bold italic uppercase text-[#EEEEEE] border-2 border-[#F14312] px-10 py-3 text-lg hover:bg-[#F14312] transition-colors duration-300"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
