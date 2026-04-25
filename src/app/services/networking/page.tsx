import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Networking & Fundraising",
  description:
    "Warm introductions to the people who can change your trajectory. Family offices, capital partners, celebrity backers, founders' clubs and the rooms that move outcomes.",
  alternates: { canonical: `${SITE.url}/services/networking` },
};

const ROOMS = [
  { numeral: "I.", title: "Family Offices", body: "Discreet, deep-pocketed capital partners we have introduced clients to for two decades." },
  { numeral: "II.", title: "Sovereign &amp; Strategic Capital", body: "Investors who underwrite at meaningful scale across film, sport, real estate and tech." },
  { numeral: "III.", title: "Celebrity Investors &amp; Backers", body: "Public figures who lend cheque and credibility to founders they personally believe in." },
  { numeral: "IV.", title: "Founders' Clubs &amp; Boardrooms", body: "Curated rooms where deals close in two conversations instead of twenty." },
  { numeral: "V.", title: "Government &amp; Institutional", body: "Senior officials, regulators and partner platforms across UAE, India, the US and the UK." },
];

export default function NetworkingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            slug: "networking",
            name: "Networking & Fundraising",
            description:
              "Warm introductions to the people who can change your trajectory — family offices, capital partners, celebrity backers and founders' clubs.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/fame-ai` },
            { name: "Networking", url: `${SITE.url}/services/networking` },
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
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Rooms</p>
          </div>

          <p className="kicker kicker-gold mb-6">Networking &amp; Fundraising</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(46px, 7.5vw, 124px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            The <span className="text-[#F14312]">people</span>
            <br />
            who change everything.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch] mb-10"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Warm introductions to the family offices, sovereign funds,
            celebrity backers and founders&apos; clubs that decide what gets
            built next.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a 15-min Call
            </a>
            <Link href="/contact" className="btn-ghost">
              Send a Brief
            </Link>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="lede italic text-[#0A0606]/45 mb-4 flex items-center gap-3 text-sm">
            <span className="numeral">II.</span>
            <span className="w-12 h-px bg-[#0A0606]/25" />
            <span>The Doctrine</span>
          </p>
          <blockquote
            className="font-serif text-[#0A0606]"
            style={{
              fontSize: "clamp(28px, 4.4vw, 60px)",
              lineHeight: "1.06",
              letterSpacing: "-0.005em",
            }}
          >
            <em className="text-[#F14312] not-italic font-display">FAME</em> opens
            doors money can&apos;t buy. We open the rest.
          </blockquote>
          <p className="font-sans text-[#0A0606]/65 text-sm tracking-[0.18em] uppercase mt-8">
            Sheeraz Hasan
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-fire mb-5">The Rooms</p>
              <p className="section-mark">Chapter III &middot; Where we open doors</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: "0.95" }}
              >
                Five doors. <em className="font-serif italic font-normal">One Sheeraz.</em>
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {ROOMS.map((r) => (
              <li
                key={r.numeral}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg">
                  {r.numeral}
                </span>
                <h3
                  className="col-span-10 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                  dangerouslySetInnerHTML={{ __html: r.title }}
                />
                <p
                  className="col-span-12 sm:col-span-7 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: r.body }}
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
            A Note
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Tell us who you need to <em className="font-serif italic font-normal">meet</em>.
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            We do not promise impossible introductions. We promise honest
            ones, made by Sheeraz to people who already trust him.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Send a Brief
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
