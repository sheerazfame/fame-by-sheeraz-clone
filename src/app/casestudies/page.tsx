import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected work from Fame by Sheeraz: Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra, Paris Hilton, Miley Cyrus, Selena Gomez, Jennifer Lopez and more.",
  alternates: { canonical: `${SITE.url}/casestudies` },
};

interface CaseStudy {
  name: string;
  image: string;
  era: string;
  note: string;
}

const CASE_STUDIES: CaseStudy[] = [
  { name: "Kim Kardashian", image: "/images/cs-kim-k.jpg", era: "2007 – present", note: "From a name to a household." },
  { name: "Logan Paul", image: "/images/cs-logan-paul.jpg", era: "2014 – present", note: "Largest-ever meet-and-greet at Dubai Mall." },
  { name: "Paris Hilton", image: "/images/cs-paris-hilton.jpg", era: "2003 – present", note: "The blueprint for celebrity 2.0." },
  { name: "Zendaya", image: "/images/cs-zendaya.jpg", era: "2011 – present", note: "Disney star to global cinema." },
  { name: "Miley Cyrus", image: "/images/cs-miley.jpg", era: "2008 – present", note: "Reinvention as a service." },
  { name: "Priyanka Chopra", image: "/images/cs-priyanka.jpg", era: "2015 – present", note: "Bollywood crossover, mainstream Hollywood." },
  { name: "Selena Gomez", image: "/images/cs-selena.jpg", era: "2010 – present", note: "From child star to billion-dollar brand." },
  { name: "Jennifer Lopez", image: "/images/cs-jennifer-lopez.jpg", era: "Strategic engagements", note: "Fashion, film and music activations." },
  { name: "Ricky Martin", image: "/images/cs-ricky-martin.jpg", era: "Selected campaigns", note: "Live-event amplification." },
  { name: "Nelk Boys", image: "/images/cs-nelk-boys.jpg", era: "Growth phase", note: "Frat humour to founders' club." },
  { name: "Adam Waheed", image: "/images/cs-adam-waheed.jpg", era: "Early-stage build", note: "Punchline to platform." },
  { name: "Pamela Anderson", image: "/images/cs-pamela.jpg", era: "Selected projects", note: "A re-introduction to the world." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Case Studies", url: `${SITE.url}/casestudies` },
        ])}
      />

      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-16 sm:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Portfolio</p>
          </div>

          <p className="kicker kicker-fire mb-6">Selected Work</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Case <span className="text-[#F14312]">studies</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[48ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Twelve names you already know — and the playbooks behind them.
            Click any portrait for the long version.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#0A0606] pb-24 sm:pb-32">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CASE_STUDIES.map((cs) => (
              <article key={cs.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#14100D]">
                  <Image
                    src={cs.image}
                    alt={cs.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="lede italic text-[#C9A961] text-xs mb-1">
                      {cs.era}
                    </p>
                    <h3
                      className="font-display text-[#F5F0E8] mb-2"
                      style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: "1" }}
                    >
                      {cs.name}
                    </h3>
                    <p className="font-serif italic text-[#F5F0E8]/75 text-sm leading-snug">
                      {cs.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
            What&apos;s next
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Your name <em className="font-serif italic font-normal">here</em>.
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            We take on a small number of new clients each season. The audit is
            how Sheeraz decides who.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/fame-ai" className="btn-primary">
              Apply for the Audit
            </Link>
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
