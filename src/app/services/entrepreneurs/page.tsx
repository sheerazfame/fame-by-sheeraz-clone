import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "For Entrepreneurs · Online & AI Presence",
  description:
    "We build the complete online presence investors expect when searching a founder's name — Google Knowledge Panel, press, founder website, AI search visibility, unified profile.",
  alternates: { canonical: `${SITE.url}/services/entrepreneurs` },
};

const PROBLEMS = [
  "No Google Knowledge Panel",
  "No consistent biography across platforms",
  "No press references",
  "No centralised website",
  "No AI search visibility",
  "Outdated or conflicting information online",
];

const BENEFITS = [
  { numeral: "I.", title: "Become trusted &amp; verified", body: "When investors, partners or talent search your name, they meet a complete, consistent, credentialed founder." },
  { numeral: "II.", title: "Make your project stand out", body: "A founder presence engineered to make your company unmissable to the people who can change its trajectory." },
  { numeral: "III.", title: "Control your narrative", body: "Own the storyline, the keywords, the timing — across Google, ChatGPT, Gemini, Grok and Perplexity." },
  { numeral: "IV.", title: "Boost your networking", body: "A founder dossier that opens doors, books rooms and earns warm introductions." },
  { numeral: "V.", title: "Appear in trusted news", body: "Tier-1 placements where decision-makers actually read." },
  { numeral: "VI.", title: "Strengthen your digital footprint", body: "Verified, knowledge-graph-grade presence engineered to compound for years." },
];

export default function EntrepreneursPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            slug: "entrepreneurs",
            name: "Online & AI Presence for Entrepreneurs",
            description:
              "Complete founder online presence — Google Knowledge Panel, press, founder website, AI search visibility, unified profile.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/fame-ai` },
            { name: "Entrepreneurs", url: `${SITE.url}/services/entrepreneurs` },
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
            <p className="lede italic text-[#F5F0E8]/40 text-sm">For Founders &amp; CEOs</p>
          </div>

          <p className="kicker kicker-fire mb-6">For Entrepreneurs</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(46px, 7.5vw, 124px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Your complete
            <br />
            <span className="text-[#F14312]">founder</span> presence.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch] mb-10"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Everything investors expect when they search your name —
            Google Knowledge Panel, press, founder website, AI search
            visibility, unified profile.
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

      {/* The problem */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-5">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
              The Problem
            </p>
            <p className="numeral italic text-[#0A0606]/40 text-sm mb-8">
              Chapter I &middot; What investors find
            </p>
            <h2
              className="font-display text-[#0A0606]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "0.95" }}
            >
              Most founders fail
              <br />
              the <em className="font-serif italic font-normal">search</em> test.
            </h2>
            <p className="lede italic text-[#0A0606]/65 mt-6 max-w-md text-base sm:text-lg leading-relaxed">
              When the people who can change your company&apos;s trajectory
              search your name, here is what they find — and why they walk.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[#0A0606]/15">
              {PROBLEMS.map((p, i) => (
                <li
                  key={p}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-[#0A0606]/10 items-baseline"
                >
                  <span className="col-span-2 numeral text-[#F14312] text-base">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p
                    className="col-span-10 font-serif italic text-[#0A0606]"
                    style={{ fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: "1.4" }}
                  >
                    {p}.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The fix — six benefits */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-gold mb-5">The Fix</p>
              <p className="section-mark">Chapter II &middot; What we build</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: "0.95" }}
              >
                Six things every <em className="font-serif italic font-normal">serious</em> founder needs.
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {BENEFITS.map((b) => (
              <li
                key={b.numeral}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg">
                  {b.numeral}
                </span>
                <h3
                  className="col-span-10 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                  dangerouslySetInnerHTML={{ __html: b.title }}
                />
                <p
                  className="col-span-12 sm:col-span-7 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
            The Door
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Become <em className="font-serif italic font-normal">unmissable</em>.
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            The audit is how Sheeraz decides who to take on. Twelve pages,
            seventy-two hours, no commitment.
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
