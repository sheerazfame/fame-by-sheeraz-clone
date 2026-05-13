import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Attention | Sheeraz Hasan | FAME by Sheeraz",
  description:
    "We build your complete founder online presence — Google Knowledge Panel, press articles, founder website, AI visibility, and a unified public profile.",
};

const benefits = [
  "Become trusted and verified",
  "Make your project stand out",
  "Control your narrative online",
  "Boost your networking",
  "Appear in trusted news",
  "Strengthen your digital footprint",
];

const problems = [
  "No Google Knowledge Panel",
  "No consistent biography",
  "No press references",
  "No centralized website",
  "No AI search visibility",
  "Outdated or conflicting information online",
];

const deliverables = [
  {
    num: "01",
    title: "Strategy Calls with Sheeraz Hasan",
    description:
      "Extract the full details of your background, achievements, and story. One-on-one 1h calls, deep narrative mapping, identify missing public information, fix your online narrative.",
  },
  {
    num: "02",
    title: "Full Online Presence Audit & Rebuild",
    description:
      "A complete review and correction of your existing public footprint. Audit of search, LinkedIn, Crunchbase, and past mentions; fix outdated or conflicting data; produce a unified founder biography.",
  },
  {
    num: "03",
    title: "Google Knowledge Panel Build Support",
    description:
      "Prepare the sources and structure Google needs to activate your panel. Structured biography, verified references, support during the claiming process.",
  },
  {
    num: "04",
    title: "Search & AI Search Visibility Optimization",
    description:
      "Search-friendly biography, consistent naming and roles, structured factual data for AI retrieval across Google, ChatGPT, Gemini, and Grok.",
  },
  {
    num: "05",
    title: "Media Articles — Written and Published",
    description:
      "Professional articles about your journey, company, and insights. Interview-based content you review before publication, placed on relevant outlets.",
  },
  {
    num: "06",
    title: "Dedicated FAME Journalist Assigned to You",
    description:
      "One writer handling all written content for consistency. In-depth interviews, unified narrative and tone, coordination across all deliverables.",
  },
  {
    num: "07",
    title: "Founder Autobiography",
    description:
      "Your journey in a structured long-form autobiography. Covers your history, milestones, and vision. Delivered as PDF + editable file; acts as a reference for media and search.",
  },
  {
    num: "08",
    title: "Personal Founder Website",
    description:
      "A dedicated website consolidating everything about you — biography, track record, press articles, company overview, contact links.",
  },
  {
    num: "09",
    title: "Personalized Media Strategy",
    description:
      "A practical plan for how to use your new online presence. Recommended publication types, narrative angles for future press, guidance for interviews and appearances.",
  },
  {
    num: "10",
    title: "Ongoing FAME Team Support & Follow-Up Calls",
    description:
      "Support throughout the build process. Scheduled check-ins, narrative refinements, updates to key content.",
  },
];

const howItWorks = [
  {
    step: "Step 1",
    title: "Strategy Call",
    description: "We extract your story, milestones, and correct data.",
  },
  {
    step: "Step 2",
    title: "Audit & Interviews",
    description:
      "We review your online footprint and gather everything needed to rebuild it.",
  },
  {
    step: "Step 3",
    title: "Writing & Production",
    description:
      "Biography, articles, e-book, website, and structured data are created.",
  },
  {
    step: "Step 4",
    title: "Launch & Integration",
    description:
      "Your materials go live; search and AI visibility strengthen over time.",
  },
];

const stats = [
  { number: "80%", text: "of investors will reject you if they can't verify you online within the first minute." },
  { number: "70%", text: "of investor meetings never happen because the founder's online presence raises doubts." },
  { number: "3x", text: "Founders with no credible online footprint are up to 3× more likely to be ignored by VCs." },
  { number: "82%", text: "of VCs Google the founder even before opening the deck." },
];

const goldFeatures = [
  "One-on-one strategy calls with Sheeraz Hasan",
  "Build your online presence",
  "Build your Google Knowledge Panel",
  "Get found on Google search and AI search (ChatGPT, Gemini, Grok)",
  "Includes 6 media articles (controlled narrative)",
  "Get found on Google News",
  "Dedicated FAME journalist writing media articles and an autobiography",
  "Dedicated FAME team supporting your journey and follow up calls",
  "Build your personal website",
  "Personalized media strategy",
];

const platinumFeatures = [
  "One-on-one strategy calls with Sheeraz Hasan",
  "Build your online presence",
  "Build your Google Knowledge Panel",
  "Get found on Google search and AI search (ChatGPT, Gemini, Grok)",
  "Includes 20 media articles (controlled narrative)",
  "Get found by investors on Google News",
  "Dedicated FAME journalist writing media articles and an autobiography",
  "Dedicated FAME team supporting your journey and follow up calls",
  "Build your personal website",
  "Personalized media strategy",
  "Photoshoot and podcast (if Dubai based)",
  "Fine-tune your pitch decks, elevator pitch and one-pager deck",
  "FAME Media and speaking training sessions",
  "Unlock exclusive pay-to-play media opportunities: Awards, Powerlists, Interviews",
  "Access to exclusive networking events",
  "Key warm introductions within FAME Inner Circle",
];

export default function EntrepreneursPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-4">
              Founders, CEOs and Entrepreneurs
            </p>
            <h1
              className="font-[family-name:var(--font-barlow)] font-bold italic text-[#01060D] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              We Build Your Complete Founder Online Presence
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-[#333] text-base leading-relaxed mb-8">
              Everything an investor expects to see when they search your name —
              Google Knowledge Panel, press articles, founder website, AI
              visibility, and a unified public profile.
            </p>
            <Link href="/bookacall" className="btn-orange text-base">
              Book a Call
            </Link>
          </div>
          <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <Image
              src="/images/quote-sheeraz-cutout.png"
              alt="Sheeraz Hasan"
              width={500}
              height={600}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── Benefit strip ── */}
      <section className="bg-[#EE4223] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((b) => (
            <div
              key={b}
              className="text-center font-[family-name:var(--font-inter)] text-white text-sm font-semibold leading-snug"
            >
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] leading-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Most founders failing to close money face the same issues:
          </h2>
          <ul className="space-y-3 my-10">
            {problems.map((problem) => (
              <li key={problem} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#EE4223]" />
                <span className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-2xl">
            We fix every part of this.
          </p>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold text-center mb-3">
            What we do
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            We build a complete, verifiable online presence for founders.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base max-w-3xl mx-auto text-center mb-14">
            Our work ensures your biography, achievements, company details,
            media, and public information are accurate, consistent, and easy
            to find across Google Search, AI platforms, and the press.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {deliverables.map((d) => (
              <div
                key={d.num}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6 hover:border-[#EE4223]/40 transition-colors flex flex-col"
              >
                <span className="font-[family-name:var(--font-barlow)] font-bold text-[#EE4223] text-3xl mb-3">
                  {d.num}
                </span>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-base mb-2 leading-tight">
                  {d.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-xs leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold text-center mb-3">
            How it works
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            How Everything Comes Together
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base text-center mb-14">
            Fix your online presence in 4 easy steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s) => (
              <div
                key={s.step}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-7"
              >
                <p className="font-[family-name:var(--font-inter)] text-[#EE4223] text-xs uppercase tracking-widest font-semibold mb-3">
                  {s.step}
                </p>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-3">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-center leading-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Now type your name on Google. Would an investor like what they see?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base text-center mb-14">
            This is what your investors see on Google Search and Google AI
            Mode about you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.number}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-8 text-center"
              >
                <span
                  className="font-[family-name:var(--font-barlow)] font-black text-[#EE4223] block mb-4"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
                >
                  {s.number}
                </span>
                <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/80 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing tiers ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold text-center mb-3">
            FAME Bespoke
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#EEEEEE] text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Every project is unique.
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base text-center max-w-2xl mx-auto mb-14">
            FAME becomes your 360 solution for amplification. Let us know how
            we can help.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gold */}
            <div className="bg-[#0A0F1A] border border-[#C9A961]/40 rounded-2xl p-8 flex flex-col">
              <p className="font-[family-name:var(--font-inter)] text-[#C9A961] text-xs uppercase tracking-widest font-semibold mb-1">
                90-day program
              </p>
              <h3 className="font-[family-name:var(--font-barlow)] font-black italic text-white text-3xl mb-1">
                FAME Gold
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm mb-5">
                Google Panel + AI Search
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-[family-name:var(--font-barlow)] font-black text-white"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
                >
                  $25,000
                </span>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-xs mb-8">
                One-time payment
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {goldFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[#EEEEEE]/85 text-sm"
                  >
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/bookacall" className="btn-orange text-base self-start">
                Free 15min call
              </Link>
            </div>

            {/* Platinum */}
            <div className="bg-[#0A0F1A] border border-[#EE4223]/50 rounded-2xl p-8 flex flex-col relative">
              <p className="absolute top-5 right-6 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-widest font-semibold text-[#EE4223]">
                Most popular
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#EE4223] text-xs uppercase tracking-widest font-semibold mb-1">
                90-day program
              </p>
              <h3 className="font-[family-name:var(--font-barlow)] font-black italic text-white text-3xl mb-1">
                FAME Platinum
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm mb-5">
                Google Panel + AI Search + Inner Circle
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-[family-name:var(--font-barlow)] font-black text-white"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
                >
                  $50,000
                </span>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-xs mb-8">
                One-time payment
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {platinumFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[#EEEEEE]/85 text-sm"
                  >
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#EE4223]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/bookacall" className="btn-orange text-base self-start">
                Free 15min call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-8"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            BOOK A FREE CONSULTATION CALL
          </h2>
          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#01060D] font-[family-name:var(--font-barlow)] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
