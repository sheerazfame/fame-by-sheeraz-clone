import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Networking | famebysheeraz.com",
};

const audienceColumns = [
  {
    title: "Founders Raising Capital",
    description:
      "You need more than a pitch deck. You need a verified, credible online presence that makes investors say yes before the meeting even starts.",
  },
  {
    title: "Family Business Owners",
    description:
      "Transitioning from legacy to modern leadership requires a public narrative that reflects your vision, authority, and next chapter.",
  },
  {
    title: "Executives and Dealmakers",
    description:
      "Whether you are closing deals, raising funds, or building partnerships, your digital footprint is the first due diligence check.",
  },
];

const networkingFeatures = [
  {
    title: "Access Fundraising Events",
    description:
      "Get invited to curated investor events, private dinners, and deal rooms where capital flows and relationships are built.",
  },
  {
    title: "Fix Your Narrative",
    description:
      "We rebuild your story from the ground up — press, search results, AI answers, and every digital touchpoint that investors check.",
  },
  {
    title: "Refine Your Pitch Deck",
    description:
      "Work with our team to sharpen your pitch, tighten your messaging, and present with the authority that closes rounds.",
  },
  {
    title: "Warm Introductions",
    description:
      "Leverage our network of investors, family offices, and strategic partners for introductions that skip the cold outreach.",
  },
];

const onlinePresenceFeatures = [
  {
    title: "Get Found on Google & ChatGPT",
    description:
      "Ensure you appear accurately and authoritatively across traditional search and AI-powered search tools.",
  },
  {
    title: "Control Your Narrative",
    description:
      "Own the story that investors, partners, and the public see when they research you online.",
  },
  {
    title: "Get Published",
    description:
      "Guaranteed placements in major global publications that establish your authority and credibility.",
  },
  {
    title: "Craft Your Knowledge Panel",
    description:
      "Build a verified Google Knowledge Panel that positions you as a recognized leader in your industry.",
  },
];

export default function NetworkingPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative bg-[#01060D] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#01060D] via-[#0A0F1A] to-[#01060D] opacity-80" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-5">
            FAME NETWORKING
          </p>

          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.1] mb-8"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
          >
            RAISING MONEY IS EASIER WHEN YOU&apos;RE TRUSTED AND VERIFIED
          </h1>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed mb-10 max-w-3xl">
            Before anyone writes a check, they search you. If your Google
            presence, press footprint, and AI-generated answers don&apos;t
            instantly verify your credibility, the deal stalls — or dies.
          </p>

          <Link
            href="/bookacall"
            className="btn-orange text-base"
          >
            BOOK A PRIVATE CALL
          </Link>
        </div>
      </section>

      {/* ── Audience Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-4">
                {col.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-white/90 text-base leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Networking Events Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            TAP INTO THE CIRCLES THAT MATTER
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {networkingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-8 hover:border-[#EE4223]/40 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Online Presence Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            MAKING YOU LOOK LIKE A ROCKSTAR ONLINE FOR INVESTORS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {onlinePresenceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-8 hover:border-[#EE4223]/40 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Sheeraz Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-sheeraz.jpg"
              alt="Sheeraz Hasan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              About Sheeraz Hasan
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/90 text-base leading-relaxed">
              With over 25 years of experience at the intersection of celebrity,
              media, and capital, Sheeraz Hasan has built a global reputation as
              the go-to strategist for visibility, credibility, and influence. He
              has worked with the biggest names in entertainment and now brings
              that same amplification power to founders, CEOs, and dealmakers who
              need to be seen, trusted, and verified before the meeting even
              begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
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
