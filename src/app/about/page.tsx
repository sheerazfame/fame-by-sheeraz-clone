import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Sheeraz Hasan",
  description:
    "Sheeraz Hasan — the #1 FAME & AI Strategist in the world. Founder of Fame by Sheeraz, Hollywood.AI, Bollywood.AI and Hollywood.TV. $3B+ in earned media for Kim Kardashian, Logan Paul, Zendaya and 250+ stars.",
  alternates: { canonical: `${SITE.url}/about` },
};

const TIMELINE = [
  {
    year: "1998",
    title: "London, beginning",
    body: "Took over the family café at sixteen after his father's passing. Within a year, weekly sales went from $3,000 to $40,000.",
  },
  {
    year: "2002",
    title: "Hollywood, arrival",
    body: "Relocated to Los Angeles with little more than ambition. Built a paparazzi network from the curb up.",
  },
  {
    year: "2007",
    title: "Hollywood.TV",
    body: "Launched what became one of the largest celebrity content networks in the world — supplying TMZ, People, Daily Mail, CNN, Fox News, Reuters and others.",
  },
  {
    year: "2014",
    title: "ABC's 20/20",
    body: "Featured on prime-time television as Kim Kardashian's media strategist — the man who turned a name into a household.",
  },
  {
    year: "2020",
    title: "FAME by Sheeraz",
    body: "Productized two decades of fame engineering into a platform and training series for celebrities, executives and aspiring icons.",
  },
  {
    year: "2025",
    title: "Hollywood.AI &amp; Bollywood.AI",
    body: "Unveiled at SuperAI 2025 and GITEX Global 2025 — drew acquisition interest from Google, Meta and DeepSeek.",
  },
];

const CLIENTS = [
  "Kim Kardashian", "Logan Paul", "Zendaya", "Priyanka Chopra", "Jennifer Lopez",
  "Miley Cyrus", "Paris Hilton", "Justin Bieber", "Jake Paul", "Lindsay Lohan",
  "Lele Pons", "Nelk Boys", "Selena Gomez", "Ricky Martin", "Pamela Anderson",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "About", url: `${SITE.url}/about` },
        ])}
      />

      {/* Cover */}
      <section className="relative bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-16 sm:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Profile</p>
          </div>

          <p className="kicker kicker-fire mb-6">A Profile</p>

          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            <span className="block text-[#F14312]">Sheeraz</span>
            Hasan.
          </h1>

          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch]"
            style={{ fontSize: "clamp(20px, 2.4vw, 30px)", lineHeight: "1.28" }}
          >
            Twenty-five years engineering attention. Three billion in earned
            media. The man, in his own words.
          </p>
        </div>
      </section>

      {/* Bio spread */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about-sheeraz.jpg"
                  alt="Sheeraz Hasan"
                  fill
                  className="object-cover grayscale"
                  style={{ objectPosition: "58% 26%" }}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  unoptimized
                />
              </div>
              <figcaption className="mt-4 lede italic text-[#0A0606]/55 text-sm">
                Sheeraz Hasan, photographed for Fame by Sheeraz, Issue No. XXVI.
              </figcaption>
            </figure>

            <div className="lg:col-span-7 text-[#0A0606]/85">
              <p className="kicker kicker-fire mb-5" style={{ color: "#F14312" }}>
                Chapter I · The Subject
              </p>

              <p
                className="lede drop-cap text-[#0A0606] mb-7"
                style={{ fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: "1.65" }}
              >
                Sheeraz Hasan is a global fame strategist and media operator who
                builds visibility at scale. He is referred to as the &ldquo;#1 FAME
                and AI Strategist in the world,&rdquo; working at the intersection
                of celebrity, technology, capital and narrative control. He brings
                a combination of 25 years of hands-on experience and the latest
                artificial intelligence tools to amplify celebrities, influencers,
                founders and companies.
              </p>

              <p className="mb-6" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                He has worked with figures such as{" "}
                <em className="font-serif italic">Kim Kardashian</em>,{" "}
                <em className="font-serif italic">Logan Paul</em>,{" "}
                <em className="font-serif italic">Zendaya</em>,{" "}
                <em className="font-serif italic">Priyanka Chopra</em>,{" "}
                <em className="font-serif italic">Paris Hilton</em>, Jennifer
                Lopez, Miley Cyrus, Justin Bieber, Jake Paul, Lindsay Lohan, Lele
                Pons and the Nelk Boys at the beginning of their careers —
                polishing their public presence and building them from the ground
                up. He was featured on ABC&apos;s 20/20 as Kim Kardashian&apos;s
                media strategist.
              </p>

              <p className="mb-6" style={{ fontSize: "17px", lineHeight: "1.7" }}>
                He is the founder of{" "}
                <em className="font-serif italic">Hollywood.TV</em> — one of the
                largest celebrity content providers globally and a major
                breaking-news network supplying real-time coverage to TMZ, People,
                Daily Mail, CNN, Fox News, Reuters and other major media.
              </p>

              <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
                In 2025 he unveiled{" "}
                <em className="font-serif italic">Hollywood.AI</em> and{" "}
                <em className="font-serif italic">Bollywood.AI</em>,
                productizing his playbook into tech-driven platforms that drew
                acquisition interest from Google, Meta and DeepSeek across SuperAI
                2025 and GITEX Global 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-gold mb-5">The Timeline</p>
              <p className="section-mark">Chapter II · Twenty-five years, told briefly</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
              >
                From a London café
                <br />
                to <span className="text-[#F14312]">Hollywood.AI</span>.
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {TIMELINE.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-3 sm:col-span-2 numeral text-[#C9A961] text-lg sm:text-xl">
                  {t.year}
                </span>
                <h3
                  className="col-span-9 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                >
                  {t.title}
                </h3>
                <p
                  className="col-span-12 sm:col-span-6 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Client roll */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
                The Roll
              </p>
              <p className="numeral text-[#0A0606]/40 italic text-sm">
                Chapter III · A partial list
              </p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#0A0606]"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
              >
                Names you already <span className="text-[#F14312]">know</span>.
              </h2>
            </div>
          </div>

          <div className="border-t border-[#0A0606]/15 pt-8">
            <p
              className="font-serif italic text-[#0A0606] leading-relaxed"
              style={{ fontSize: "clamp(22px, 2.4vw, 36px)" }}
            >
              {CLIENTS.map((name, i) => (
                <span key={name}>
                  {name}
                  {i < CLIENTS.length - 1 && (
                    <span className="text-[#F14312] mx-2">·</span>
                  )}
                </span>
              ))}
              .
            </p>
            <p className="mt-8 lede italic text-[#0A0606]/55 text-sm">
              And a long list of names that prefer to stay off the page.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/10">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="kicker kicker-fire mb-5">The Door</p>
          <h2
            className="font-display text-[#F5F0E8] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Want to be in the next <em className="font-serif italic font-normal">issue</em>?
          </h2>
          <p className="lede italic text-[#F5F0E8]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Sheeraz reads every application personally. Begin with the audit —
            seventy-two hours, twelve pages, signed by him.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/fame-ai" className="btn-primary">
              Apply for the Audit
            </Link>
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a 15-min Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
