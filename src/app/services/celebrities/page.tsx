import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Celebrity, Influencer & Sports-Star Booking",
  description:
    "Securing Hollywood celebrities, Bollywood superstars, global influencers and elite sports icons for brand appearances, endorsements, campaigns, launches and high-profile events worldwide.",
  alternates: { canonical: `${SITE.url}/services/celebrities` },
};

const FOR = [
  "Luxury and premium brands",
  "Real-estate developers and mega-projects",
  "Tech, AI and Web3 companies",
  "Family offices, funds, and global investors",
];

const APPLICATIONS = [
  { numeral: "I.", title: "Global Brand Launches", body: "Major product and brand launches backed by A-list celebrity power and global media coverage." },
  { numeral: "II.", title: "Luxury Real-Estate Unveilings", body: "High-profile property reveals with celebrity presence that command premium positioning." },
  { numeral: "III.", title: "Major Sporting Events", body: "Celebrity appearances and activations at the world's biggest sporting stages." },
  { numeral: "IV.", title: "Fashion, Film &amp; Music", body: "Red-carpet, premiere and festival activations with cultural icons." },
  { numeral: "V.", title: "Private VIP Events", body: "Exclusive, invitation-only gatherings with elite celebrity appearances." },
];

export default function CelebritiesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            slug: "celebrities",
            name: "Celebrity, Influencer & Sports-Star Booking",
            description:
              "Securing Hollywood celebrities, Bollywood superstars, global influencers and elite sports icons for global brand work.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/fame-ai` },
            { name: "Celebrities", url: `${SITE.url}/services/celebrities` },
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
            <p className="lede italic text-[#F5F0E8]/40 text-sm">A Legacy Service</p>
          </div>

          <p className="kicker kicker-fire mb-6">Celebrity Booking</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(46px, 7.5vw, 124px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Celebrity, influencer
            <br />
            &amp; <span className="text-[#F14312]">sports-star</span> booking.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[44ch] mb-10"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            The right star — at the right moment — on the right stage.
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

      {/* For whom — magazine spread */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
          <div className="lg:col-span-5">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
              For whom
            </p>
            <p className="numeral italic text-[#0A0606]/40 text-sm mb-8">
              Chapter I &middot; The Audience
            </p>
            <h2
              className="font-display text-[#0A0606]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "0.95" }}
            >
              The clients we serve.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[#0A0606]/15">
              {FOR.map((item, i) => (
                <li key={item} className="grid grid-cols-12 gap-4 py-7 border-b border-[#0A0606]/10 items-baseline">
                  <span className="col-span-2 numeral text-[#F14312] text-base">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p
                    className="col-span-10 font-serif italic text-[#0A0606]"
                    style={{ fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: "1.35" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hero photograph */}
      <section className="bg-[#0A0606] py-0">
        <div className="relative aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src="/images/cs-logan-paul.jpg"
            alt="Celebrity activation by Fame by Sheeraz"
            fill
            className="object-cover grayscale"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0606] via-transparent to-transparent" />
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16">
            <div className="lg:col-span-4">
              <p className="kicker kicker-gold mb-5">The Applications</p>
              <p className="section-mark">Chapter II &middot; Where stars work for brands</p>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="font-display text-[#F5F0E8]"
                style={{ fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: "0.95" }}
              >
                Two decades of <em className="font-serif italic font-normal">global</em> star power.
              </h2>
            </div>
          </div>

          <ol className="border-t border-[#F5F0E8]/12">
            {APPLICATIONS.map((a) => (
              <li
                key={a.title}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg">
                  {a.numeral}
                </span>
                <h3
                  className="col-span-10 sm:col-span-4 font-display text-[#F5F0E8]"
                  style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: "1.05" }}
                >
                  {a.title}
                </h3>
                <p
                  className="col-span-12 sm:col-span-7 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: "1.5" }}
                  dangerouslySetInnerHTML={{ __html: a.body }}
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
            The Booking
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Need a <em className="font-serif italic font-normal">name</em>?
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Send a brief on the brand, the date and the budget. We respond
            with the right star — and a clear path to securing them.
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
