import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Selected press coverage of Sheeraz Hasan and Fame by Sheeraz — from ABC's 20/20 and Forbes India to Coinfomania, Daily Front Row and Entrepreneur Middle East.",
  alternates: { canonical: `${SITE.url}/press` },
};

interface PressItem {
  publication: string;
  title: string;
  date: string;
  href?: string;
}

const ARTICLES: PressItem[] = [
  { publication: "Coinfomania", title: "Sheeraz Hasan's Hollywood.AI and Bollywood.AI take centre stage at GITEX Global", date: "Oct 13, 2025" },
  { publication: "Business World", title: "From Bitcoin to Hollywood.AI: Sheeraz Hasan and Donald Trump Jr. at TOKEN2049", date: "Oct 7, 2025" },
  { publication: "Binance Square", title: "Sheeraz Hasan and Donald Trump Jr. steal the show at TOKEN2049", date: "Oct 5, 2025" },
  { publication: "Gulf Today", title: "Sheeraz Hasan and Donald Trump Jr. at TOKEN2049 Singapore", date: "Oct 2, 2025" },
  { publication: "Gulf News", title: "Sheeraz Hasan at Global Family Office Summit", date: "Sep 29, 2025" },
  { publication: "Daily Front Row", title: "Meta's trillion-dollar AI move and Hollywood.AI", date: "Aug 12, 2025" },
  { publication: "Times Entertainment", title: "Sheeraz Hasan using AI to bridge Hollywood and Bollywood", date: "Aug 9, 2025" },
  { publication: "Yahoo", title: "Sheeraz Hasan offers Hollywood.AI to Meta for $1 billion", date: "Jul 23, 2025" },
  { publication: "Benzinga", title: "FAME king Sheeraz Hasan offers Hollywood.AI for Bitcoin", date: "May 29, 2025" },
  { publication: "Entrepreneur Middle East", title: "Fame strategist keynote at Global Family Office Summit", date: "May 9, 2025" },
  { publication: "MSN", title: "Hollywood.AI and Bollywood.AI at TOKEN2049 Dubai", date: "May 3, 2025" },
  { publication: "The Tribune India", title: "Crypto meets cinema at TOKEN2049 Dubai", date: "May 1, 2025" },
  { publication: "Forbes India", title: "If you want fame, meet Sheeraz Hasan", date: "Apr 30, 2020" },
  { publication: "ABC News", title: "How he helped Kim Kardashian achieve global fame", date: "Sep 20, 2020" },
  { publication: "Morning Show", title: "Star-maker reveals Kim Kardashian fame strategy", date: "Sep 20, 2020" },
];

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Press", url: `${SITE.url}/press` },
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
            <p className="lede italic text-[#F5F0E8]/40 text-sm">The Archive</p>
          </div>

          <p className="kicker kicker-fire mb-6">In Print</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            Press <span className="text-[#F14312]">archive</span>.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[48ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Coverage of Sheeraz Hasan and Fame by Sheeraz — from ABC&apos;s
            20/20 to Forbes India, GITEX Global to TOKEN2049.
          </p>
        </div>
      </section>

      {/* Article list — magazine-style */}
      <section className="bg-[#0A0606] pb-24 sm:pb-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <ol className="border-t border-[#F5F0E8]/12">
            {ARTICLES.map((a, i) => (
              <li key={`${a.publication}-${i}`} className="border-b border-[#F5F0E8]/12 group">
                <Link
                  href={a.href ?? "#"}
                  className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-7 sm:py-9 transition-colors hover:bg-[#F5F0E8]/[0.02]"
                >
                  <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-base sm:text-lg">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p className="col-span-10 sm:col-span-3 font-sans text-[11px] uppercase tracking-[0.22em] text-[#F14312]">
                    {a.publication}
                  </p>
                  <h2
                    className="col-span-12 sm:col-span-6 font-serif text-[#F5F0E8] group-hover:text-[#F14312] transition-colors"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "1.25" }}
                  >
                    {a.title}
                  </h2>
                  <p className="col-span-12 sm:col-span-2 lede italic text-[#F5F0E8]/45 text-sm sm:text-right">
                    {a.date}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5">
            For the press
          </p>
          <h2
            className="font-display text-[#0A0606] mb-8"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "0.95" }}
          >
            Writing about <em className="font-serif italic font-normal">Sheeraz</em>?
          </h2>
          <p className="lede italic text-[#0A0606]/65 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            We are happy to provide quotes, photography and confirmed background
            on Hollywood.AI, Bollywood.AI and selected client work.
          </p>
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            press@fame.me &nbsp;·&nbsp; reply within 24h
          </a>
        </div>
      </section>
    </>
  );
}
