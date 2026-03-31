import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press | FAME by Sheeraz",
};

const pressArticles = [
  {
    publication: "COINFOMANIA",
    title: "Sheeraz Hasan's Hollywood.AI and Bollywood.AI at GITEX Global",
    date: "Oct 13, 2025",
  },
  {
    publication: "BUSINESS WORLD",
    title: "From Bitcoin To Hollywood.AI: Sheeraz Hasan And Donald Trump Jr. at TOKEN2049",
    date: "Oct 7, 2025",
  },
  {
    publication: "BINANCE SQUARE",
    title: "Sheeraz Hasan & Donald Trump Jr. Steal the Show at TOKEN2049",
    date: "Oct 5, 2025",
  },
  {
    publication: "GULF TODAY",
    title: "Sheeraz Hasan and Donald Trump Jr. at TOKEN2049 Singapore",
    date: "Oct 2, 2025",
  },
  {
    publication: "GULF NEWS",
    title: "Sheeraz Hasan at Global Family Office Summit",
    date: "Sep 29, 2025",
  },
  {
    publication: "DAILY FRONT ROW",
    title: "Meta's Trillion-Dollar AI Move and Hollywood.AI",
    date: "Aug 12, 2025",
  },
  {
    publication: "TIMES ENTERTAINMENT",
    title: "Sheeraz Hasan using AI to bridge Hollywood and Bollywood",
    date: "Aug 9, 2025",
  },
  {
    publication: "YAHOO",
    title: "Sheeraz Hasan Offers Hollywood.AI to Meta for $1 Billion",
    date: "Jul 23, 2025",
  },
  {
    publication: "BENZINGA",
    title: "FAME King Sheeraz Hasan Offers Hollywood.AI for Bitcoin",
    date: "May 29, 2025",
  },
  {
    publication: "ENTREPRENEUR MIDDLE EAST",
    title: "Fame Strategist Keynote at Global Family Office Summit",
    date: "May 9, 2025",
  },
  {
    publication: "MSN",
    title: "Hollywood.AI & Bollywood.AI at TOKEN2049 Dubai",
    date: "May 3, 2025",
  },
  {
    publication: "THE TRIBUNE INDIA",
    title: "Crypto Meets Cinema at TOKEN2049 Dubai",
    date: "May 1, 2025",
  },
  {
    publication: "FORBES INDIA",
    title: "If you want fame, meet Sheeraz Hasan",
    date: "Apr 30, 2020",
  },
  {
    publication: "ABC NEWS",
    title: "How he helped Kim Kardashian achieve global fame",
    date: "Sep 20, 2020",
  },
  {
    publication: "MORNING SHOW",
    title: "Star-maker reveals Kim Kardashian fame strategy",
    date: "Sep 20, 2020",
  },
];

function PublicationInitial({ name }: { name: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] rounded-xl">
      <span className="font-heading text-3xl font-black italic text-[#F14312] opacity-80">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export default function PressPage() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black italic text-center mb-16">
        Press articles
      </h1>

      <div className="flex flex-col gap-6">
        {pressArticles.map((article, i) => (
          <Link
            key={i}
            href="#"
            className="flex flex-col sm:flex-row items-start gap-5 p-4 rounded-xl transition-colors duration-200 hover:bg-white/5 group"
          >
            {/* Thumbnail placeholder */}
            <div className="w-full sm:w-[200px] h-[140px] sm:h-[120px] flex-shrink-0 overflow-hidden rounded-xl">
              <PublicationInitial name={article.publication} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 justify-center min-h-[120px]">
              <span className="text-[#F14312] text-xs font-bold uppercase tracking-widest font-sans">
                {article.publication}
              </span>
              <h2 className="text-[#EEEEEE] text-lg font-bold font-sans leading-snug group-hover:text-white transition-colors">
                {article.title}
              </h2>
              <span className="text-[#8794A7] text-sm font-sans">
                {article.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
