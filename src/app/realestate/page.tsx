import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Real Estate · Coming Soon",
  description:
    "FAME Real Estate — connecting celebrities and influencers with the world's most distinguished real-estate developers. Launching soon.",
  alternates: { canonical: `${SITE.url}/realestate` },
};

export default function RealEstatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Real Estate", url: `${SITE.url}/realestate` },
        ])}
      />

      <section className="relative bg-[#0A0606] min-h-[100vh] flex items-center pt-[120px] pb-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-[1280px] mx-auto w-full">
          {/* Masthead */}
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-16">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">A Forthcoming Title</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
            <div className="lg:col-span-7">
              <p className="kicker kicker-gold mb-6">Coming Soon</p>
              <h1
                className="font-display text-[#F5F0E8] mb-8"
                style={{
                  fontSize: "clamp(44px, 7vw, 112px)",
                  lineHeight: "0.92",
                  letterSpacing: "-0.012em",
                }}
              >
                Fame, meet
                <br />
                <span className="text-[#F14312]">real estate</span>.
              </h1>
              <p
                className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch] mb-10"
                style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
              >
                A new chapter — connecting celebrities and influencers with the
                most distinguished real-estate developers across Hollywood,
                Dubai, Mumbai and London.
              </p>
              <p className="lede text-[#F5F0E8]/55 max-w-[50ch] mb-10 leading-relaxed text-base sm:text-lg">
                We are accepting a small number of developers, agencies and
                celebrity clients into the founding cohort. Add your name to
                the waitlist below.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Join the Waitlist
                </Link>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Book a Call
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:border-l border-[#F5F0E8]/12 lg:pl-12">
              <ul className="space-y-7">
                {[
                  { numeral: "I.", title: "For Developers", body: "Celebrity-anchored launches and global press for premium properties." },
                  { numeral: "II.", title: "For Celebrities", body: "Bespoke real-estate deals, from primary residences to commercial holdings." },
                  { numeral: "III.", title: "For Investors", body: "Co-investment vehicles in marquee, fame-amplified projects." },
                ].map((b) => (
                  <li key={b.numeral} className="flex gap-5">
                    <span className="numeral text-[#C9A961] text-base flex-shrink-0">
                      {b.numeral}
                    </span>
                    <div>
                      <h2
                        className="font-display text-[#F5F0E8] mb-1"
                        style={{ fontSize: "20px", lineHeight: "1.05" }}
                      >
                        {b.title}
                      </h2>
                      <p className="lede italic text-[#F5F0E8]/55 text-sm leading-snug">
                        {b.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
