import type { Metadata } from "next";
import Link from "next/link";
import { FAME_AI_PACKAGES } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/components/JsonLd";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

const FAME_AI_FAQS = [
  {
    q: "What is FAME AI?",
    a: "FAME AI is the productized layer of Fame by Sheeraz. It fuses Sheeraz Hasan's 25-year fame playbook with multi-model AI (GPT-5, Claude Opus 4, Gemini 2, Grok 3, Perplexity Pro) and ships seven packages: Strategies, Execution, the multi-model stack, Save Costs, Scale, Amplification, and AI Sales.",
  },
  {
    q: "Why combine multiple AI models instead of just using ChatGPT?",
    a: "Each leading model has a specific edge. GPT excels at sales reasoning. Claude writes long-form copy at near-human quality. Gemini wins on Google distribution. Grok dominates X virality. Perplexity gives citation-grade research. We orchestrate all five behind one Sheeraz-signed workflow.",
  },
  {
    q: "What does the free Audit include?",
    a: "A 12-page editorial-grade report scoring your X-Factor, fame gaps, brand narrative, AI search visibility, and the fastest 90-day path to engineered fame. Delivered within 72 hours. No obligation.",
  },
  {
    q: "Does FAME AI replace traditional PR?",
    a: "It replaces the 90% of PR work that is repetitive (drafting, monitoring, list-building, reporting) and amplifies the 10% that requires human judgment (relationships, creative, deal-making). Most clients cut total PR spend 70-90% while increasing output.",
  },
];

export const metadata: Metadata = {
  title: "FAME AI — Strategy + Execution at AI Speed",
  description:
    "FAME AI combines Sheeraz Hasan's 25-year Hollywood playbook with GPT, Claude, Gemini, Grok and Perplexity. Seven packages, three altitudes, one Sheeraz. Free 12-page Audit in 72 hours.",
  alternates: { canonical: `${SITE.url}/fame-ai` },
  openGraph: {
    type: "website",
    url: `${SITE.url}/fame-ai`,
    title: "FAME AI — Strategy + Execution at AI Speed",
    description:
      "Sheeraz Hasan's fame playbook + every major AI model. Free 12-page Audit in 72 hours.",
    siteName: SITE.name,
  },
};

export default function FameAiPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "FAME AI", url: `${SITE.url}/fame-ai` },
  ]);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAME_AI_FAQS),
          breadcrumbs,
          serviceSchema({
            slug: "fame-ai",
            name: "FAME AI",
            description:
              "AI-powered fame engineering: GPT, Claude, Gemini, Grok and Perplexity orchestrated by Sheeraz Hasan to deliver Strategy, Execution, Save Costs, Scale, Amplification and AI Sales.",
          }),
        ]}
      />

      {/* Hero — editorial cover */}
      <section className="relative bg-[#0A0606] pt-[160px] pb-24 sm:pb-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Masthead */}
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>{" "}
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">A Special Section</p>
          </div>

          <p className="kicker kicker-fire mb-7">A Manifesto</p>

          <h1
            className="font-display text-[#F5F0E8] mb-10 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 9vw, 156px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            FAME, <span className="text-[#F14312]">×</span>
            <br />
            <em className="font-serif italic font-normal">artificial intelligence.</em>
          </h1>

          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch] mb-10"
            style={{
              fontSize: "clamp(20px, 2.4vw, 30px)",
              lineHeight: "1.28",
            }}
          >
            Sheeraz Hasan&apos;s 25-year fame playbook — now powered by every
            model that matters. Seven packages. Three altitudes. One Sheeraz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a 15-min Call
            </a>
            <Link href="#audit" className="btn-ghost">
              Apply for the Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Audit form — editorial */}
      <section id="audit" className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
            <div className="lg:col-span-5">
              <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
                The Audit
              </p>
              <p className="numeral text-[#0A0606]/40 text-sm italic mb-8">
                Chapter I · Application
              </p>
              <h2
                className="font-display text-[#0A0606] mb-7"
                style={{
                  fontSize: "clamp(36px, 4.8vw, 64px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.01em",
                }}
              >
                Tell us who
                <br />
                you <span className="text-[#F14312]">already are</span>.
              </h2>
              <p className="lede italic text-[#0A0606]/65 max-w-[40ch] text-base sm:text-lg leading-relaxed">
                Sheeraz reads every application. The reply comes back as a
                12-page report — written by GPT, refined by Claude, signed by
                him. No payment. No commitment.
              </p>
              <p className="lede italic text-[#0A0606]/45 mt-6 text-sm">
                Reply window: 72 hours.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form
                action={SITE.calendly}
                method="get"
                target="_blank"
                className="bg-white border border-[#0A0606]/15 p-7 sm:p-10 space-y-7"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <label className="block">
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                      Full name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                      placeholder="you@brand.com"
                    />
                  </label>
                  <label className="block">
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                      Brand or Company
                    </span>
                    <input
                      type="text"
                      name="brand"
                      className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 font-serif italic text-lg"
                      placeholder="The name behind you"
                    />
                  </label>
                  <label className="block">
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                      Goal in 90 days
                    </span>
                    <select
                      name="goal"
                      defaultValue=""
                      className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] font-serif italic text-lg"
                    >
                      <option value="" disabled>Select…</option>
                      <option value="press">Land Tier-1 press</option>
                      <option value="ai-search">Dominate AI search for my name</option>
                      <option value="leads">Generate qualified inbound</option>
                      <option value="cost">Cut my PR costs</option>
                      <option value="scale">Scale my output 10x</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#0A0606]/55 font-semibold">
                    A note to Sheeraz
                  </span>
                  <textarea
                    name="story"
                    rows={3}
                    placeholder="What do you do, and why fame?"
                    className="mt-2 w-full bg-transparent border-b border-[#0A0606]/25 focus:border-[#F14312] outline-none py-2 text-[#0A0606] placeholder:text-[#0A0606]/30 resize-none font-serif italic text-lg"
                  />
                </label>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="lede italic text-[#0A0606]/45 text-sm">
                    Submitting redirects to Sheeraz&apos;s calendar.
                  </p>
                  <button type="submit" className="btn-primary">
                    Send My Audit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Packages — editorial table of contents */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/8">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-fire mb-5">The Seven</p>
              <p className="section-mark">Chapter II · Packages</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{
                  fontSize: "clamp(40px, 5.6vw, 88px)",
                  lineHeight: "0.95",
                }}
              >
                Pick what
                <br />
                you <span className="text-[#F14312]">need</span>.
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {FAME_AI_PACKAGES.map((pkg, idx) => (
              <li key={pkg.slug} className="border-b border-[#F5F0E8]/12 group">
                <Link
                  href={`/services/${pkg.slug}`}
                  className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-7 sm:py-9 transition-colors hover:bg-[#F5F0E8]/[0.02]"
                >
                  <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-base sm:text-lg">
                    {ROMAN[idx]}.
                  </span>
                  <h3
                    className="col-span-10 sm:col-span-5 lg:col-span-4 font-display text-[#F5F0E8] group-hover:text-[#F14312] transition-colors"
                    style={{
                      fontSize: "clamp(22px, 2.4vw, 34px)",
                      lineHeight: "1.05",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="hidden lg:block col-span-5 lede italic text-[#F5F0E8]/65"
                    style={{ fontSize: "16px" }}
                  >
                    {pkg.tagline}
                  </p>
                  <span className="col-span-12 sm:col-span-6 lg:col-span-2 flex justify-start sm:justify-end items-center gap-3">
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#F5F0E8]/45 group-hover:text-[#F14312] transition-colors">
                      Read
                    </span>
                    <span aria-hidden="true" className="text-[#F5F0E8]/45 group-hover:text-[#F14312] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </span>
                  <p
                    className="col-span-12 lg:hidden lede italic text-[#F5F0E8]/55 -mt-1"
                    style={{ fontSize: "15px" }}
                  >
                    {pkg.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — editorial Q&A */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/8">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="kicker kicker-gold mb-5">Common Questions</p>
          <p className="section-mark mb-10">Chapter III · Q&amp;A</p>

          <ol className="border-t border-[#F5F0E8]/12">
            {FAME_AI_FAQS.map((f, i) => (
              <li
                key={f.q}
                className="grid grid-cols-12 gap-x-6 gap-y-4 py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-12 sm:col-span-1 numeral text-[#C9A961] text-base">
                  {ROMAN[i]}.
                </span>
                <div className="col-span-12 sm:col-span-11">
                  <h3
                    className="font-serif text-[#F5F0E8] mb-3"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: "1.2" }}
                  >
                    {f.q}
                  </h3>
                  <p
                    className="lede text-[#F5F0E8]/70 leading-relaxed"
                    style={{ fontSize: "16px" }}
                  >
                    {f.a}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
