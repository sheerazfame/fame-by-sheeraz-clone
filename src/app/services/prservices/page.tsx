import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PR Services · Press, Media & Narrative Control",
  description:
    "We don't chase publicity. We architect it. Tier-1 placements, narrative control, AI search visibility, and reputation architecture for high-net-worth individuals, founders and brands.",
  alternates: { canonical: `${SITE.url}/services/prservices` },
};

const DELIVERABLES = [
  { numeral: "I.", title: "Tier-1 Placement", body: "Direct relationships with editors and producers at the publications that move the conversation." },
  { numeral: "II.", title: "Narrative Architecture", body: "Storyline, headline, keywords, timing — engineered, not improvised." },
  { numeral: "III.", title: "Google News &amp; AI Visibility", body: "Structured for Google News indexing and citation by ChatGPT, Gemini, Perplexity and Grok." },
  { numeral: "IV.", title: "Crisis Management", body: "When the wrong story breaks, the right counter-narrative ships within hours." },
  { numeral: "V.", title: "Reputation Audit", body: "A full review of how you appear today, where the gaps are, and what we ship to close them." },
];

const FOR = [
  "High-net-worth individuals",
  "Founders &amp; CEOs",
  "Investors &amp; family offices",
  "Public figures &amp; influencers",
  "Luxury brands &amp; real-estate developers",
  "Web3, AI &amp; tech leaders",
];

export default function PRServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            slug: "prservices",
            name: "PR Services — Press, Media & Narrative Control",
            description:
              "Tier-1 placements, narrative control, AI search visibility, and reputation architecture for HNW individuals, founders and brands.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/fame-ai` },
            { name: "PR Services", url: `${SITE.url}/services/prservices` },
          ]),
        ]}
      />

      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-16 sm:pb-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <Link href="/fame-ai" className="hover:text-[#F14312] transition-colors">Services</Link>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Press Desk</p>
          </div>

          <p className="kicker kicker-fire mb-6">PR &amp; Media</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(46px, 7.5vw, 124px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Don&apos;t chase publicity.
            <br />
            <span className="text-[#F14312]">Architect</span> it.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch] mb-10"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Press &amp; media solutions for the people who already deserve the
            front page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a 15-min Call
            </a>
            <Link href="/fame-ai" className="btn-ghost">
              Apply for the Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="lede italic text-[#0A0606]/45 mb-4 flex items-center gap-3 text-sm">
            <span className="numeral">II.</span>
            <span className="w-12 h-px bg-[#0A0606]/25" />
            <span>On Method</span>
          </p>
          <blockquote
            className="font-serif text-[#0A0606]"
            style={{
              fontSize: "clamp(26px, 4vw, 56px)",
              lineHeight: "1.08",
              letterSpacing: "-0.005em",
            }}
          >
            We control the storyline, the headline, the keywords, the timing.
            No dilution of message. No surprises in the morning paper.
          </blockquote>
          <p className="font-sans text-[#0A0606]/65 text-sm tracking-[0.18em] uppercase mt-8">
            From the editor&apos;s desk
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-gold mb-5">The Work</p>
              <p className="section-mark">Chapter III &middot; What we ship</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: "0.95" }}
              >
                Five disciplines, <em className="font-serif italic font-normal">one desk</em>.
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {DELIVERABLES.map((d) => (
              <li
                key={d.numeral}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg">
                  {d.numeral}
                </span>
                <h3
                  className="col-span-10 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                  dangerouslySetInnerHTML={{ __html: d.title }}
                />
                <p
                  className="col-span-12 sm:col-span-7 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: d.body }}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-5">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
              For whom
            </p>
            <p className="numeral italic text-[#0A0606]/40 text-sm mb-8">
              Chapter IV &middot; Our subjects
            </p>
            <h2
              className="font-display text-[#0A0606]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "0.95" }}
            >
              Who we <em className="font-serif italic font-normal">place</em>.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[#0A0606]/15">
              {FOR.map((f, i) => (
                <li
                  key={f}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-[#0A0606]/10 items-baseline"
                >
                  <span className="col-span-2 numeral text-[#F14312] text-base">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p
                    className="col-span-10 font-serif italic text-[#0A0606]"
                    style={{ fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: "1.4" }}
                    dangerouslySetInnerHTML={{ __html: f }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="kicker kicker-fire mb-5">The Door</p>
          <h2
            className="font-display text-[#F5F0E8] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Want the right <em className="font-serif italic font-normal">story</em>?
          </h2>
          <p className="lede italic text-[#F5F0E8]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            We start with the audit. Twelve pages, seventy-two hours, signed
            by Sheeraz. Then we ship.
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
