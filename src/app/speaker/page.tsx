import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Book Sheeraz · Keynote Speaker",
  description:
    "Sheeraz Hasan as a keynote speaker. Topics span disruptive media strategy, the X-Factor formula, AI-driven marketing, and why CEOs are the new celebrities.",
  alternates: { canonical: `${SITE.url}/speaker` },
};

const TOPICS = [
  { numeral: "I.", title: "Disruptive Media Strategy", body: "How to break through the noise and capture global attention instantly." },
  { numeral: "II.", title: "Finding Your X-Factor", body: "Identify and amplify what makes you or your brand truly singular." },
  { numeral: "III.", title: "Money Follows Fame", body: "Why visibility is the ultimate currency in the modern economy." },
  { numeral: "IV.", title: "Hijack the News", body: "Strategies to insert your brand into the conversations everyone is already having." },
  { numeral: "V.", title: "Next-Generation Marketing", body: "The AI-driven future of marketing, media and influence." },
  { numeral: "VI.", title: "CEOs as Celebrities", body: "Why personal branding is now non-negotiable for business leaders." },
];

const STAGES = ["GITEX Global", "SuperAI", "TOKEN2049", "Family Office Summit", "Cannes Lions", "Web Summit"];

export default function SpeakerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Speaker", url: `${SITE.url}/speaker` },
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
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Stage</p>
          </div>

          <p className="kicker kicker-fire mb-6">Keynote</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Sheeraz, <span className="text-[#F14312]">on stage</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Twenty-five years of fame engineering, distilled into a keynote
            tailored to your audience.
          </p>
        </div>
      </section>

      {/* Stages strip */}
      <section className="bg-[#0A0606] py-10 border-y border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-baseline justify-between gap-y-3">
          <p className="lede italic text-[#F5F0E8]/55 text-sm">Recent stages, in part:</p>
          <p className="font-serif italic text-[#F5F0E8] text-base sm:text-lg flex flex-wrap gap-x-4 gap-y-1">
            {STAGES.map((s, i) => (
              <span key={s}>
                {s}
                {i < STAGES.length - 1 && <span className="ml-4 text-[#C9A961]/50">·</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-fire mb-5">The Topics</p>
              <p className="section-mark">Chapter I &middot; What he speaks on</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
              >
                Six talks. <em className="font-serif italic font-normal">One Sheeraz.</em>
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {TOPICS.map((t) => (
              <li
                key={t.title}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg">
                  {t.numeral}
                </span>
                <h3
                  className="col-span-10 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                >
                  {t.title}
                </h3>
                <p
                  className="col-span-12 sm:col-span-7 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                >
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA spread */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="lg:col-span-5">
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
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-4">
              The Booking
            </p>
            <h2
              className="font-display text-[#0A0606] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "0.95" }}
            >
              Want him on your <em className="font-serif italic font-normal">stage</em>?
            </h2>
            <p className="lede italic text-[#0A0606]/65 mb-8 max-w-[50ch] text-base sm:text-lg leading-relaxed">
              Send a brief on the audience, the date and the city. We respond
              with availability, fee and the talk Sheeraz would tailor for the
              room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Send a Brief
              </Link>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Book a 15-min Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
