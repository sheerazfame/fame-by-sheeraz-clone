import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Sheeraz Hasan | Speaker",
};

interface Topic {
  number: string;
  title: string;
  description: string;
}

const topics: Topic[] = [
  {
    number: "01",
    title: "Disruptive Media Strategy",
    description:
      "How to break through the noise and capture global attention instantly.",
  },
  {
    number: "02",
    title: "Finding Your X-Factor",
    description:
      "Identify and amplify what makes you or your brand truly unique.",
  },
  {
    number: "03",
    title: "Money Follows FAME",
    description:
      "Why visibility is the ultimate currency in the modern economy.",
  },
  {
    number: "04",
    title: "Hijack the News",
    description:
      "Strategies to insert your brand into trending conversations.",
  },
  {
    number: "05",
    title: "Next-Gen Marketing Trends",
    description:
      "The AI-driven future of marketing, media, and influence.",
  },
  {
    number: "06",
    title: "CEOs Are the New Celebrities",
    description:
      "Why personal branding is now essential for business leaders.",
  },
];

interface ClientCard {
  name: string;
  image: string;
}

const clients: ClientCard[] = [
  { name: "Kim Kardashian", image: "/images/cs-kim-k.jpg" },
  { name: "Jennifer Lopez", image: "/images/cs-jennifer-lopez.jpg" },
  { name: "Logan Paul", image: "/images/cs-logan-paul.jpg" },
  { name: "Paris Hilton", image: "/images/cs-paris-hilton.jpg" },
  { name: "Miley Cyrus", image: "/images/cs-miley.jpg" },
  { name: "Priyanka Chopra", image: "/images/cs-priyanka.jpg" },
  { name: "Zendaya", image: "/images/cs-zendaya.jpg" },
  { name: "Ricky Martin", image: "/images/cs-ricky-martin.jpg" },
  { name: "CZ / Binance", image: "/images/case-study-b991.jpg" },
];

export default function SpeakerPage() {
  return (
    <main className="bg-[#01060D] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-sheeraz.jpg"
          alt="Sheeraz Hasan speaking"
          fill
          className="object-cover"
          style={{ objectPosition: "58% 26%" }}
          sizes="100vw"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white mb-2"
            style={{ fontSize: "clamp(2.5rem, 7vw, 3.75rem)" }}
          >
            BOOK SHEERAZ HASAN
          </h1>
          <p
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] mb-10"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
          >
            TO SPEAK AT YOUR EVENT
          </p>
          <Link href="/contact" className="btn-orange text-base px-8 py-4">
            Book Now
          </Link>
        </div>
      </section>

      {/* 2. About Speaker Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2
                className="font-[family-name:var(--font-barlow)] font-black italic text-white mb-8"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                THE WORLD&apos;S #1 FAME &amp; AI STRATEGIST ON STAGE
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-base leading-relaxed opacity-90">
                Sheeraz Hasan delivers high-energy, no-fluff keynotes on fame
                strategy, AI disruption, celebrity branding, and the attention
                economy. With 25+ years in the business of attention and having
                managed the careers of Kim Kardashian, Logan Paul, Zendaya, and
                more — Sheeraz brings real stories, real results, and real
                strategies.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="/images/quote-sheeraz-cutout.png"
                alt="Sheeraz Hasan"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Topics Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] text-center mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
          >
            TOPIC EXAMPLES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.number}
                className="bg-[#0a1020] border border-[#1a2540] rounded-lg p-6 hover:border-[#F14312]/40 transition-colors duration-300"
              >
                <span className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] text-3xl">
                  {topic.number}
                </span>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mt-3 mb-2">
                  {topic.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonial Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-[#F14312] pl-8 py-4">
            <p
              className="font-[family-name:var(--font-barlow)] italic text-[#EEEEEE] leading-relaxed"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
            >
              &ldquo;Sheeraz doesn&apos;t just speak — he transforms how you
              think about visibility, influence, and the business of
              attention.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* 5. Clients Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white text-center mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
          >
            CLIENTS INCLUDE
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-4 px-3">
                  <p className="font-[family-name:var(--font-barlow)] font-bold text-white text-sm sm:text-base uppercase text-center">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-[#EE4223] py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            TAKE YOUR EVENT TO THE NEXT LEVEL
          </h2>

          <div className="font-[family-name:var(--font-inter)] text-white/90 mb-10 space-y-1 text-lg">
            <p className="font-semibold">Suhail Hasan (COO)</p>
            <p>
              <a
                href="mailto:suhail@fame.me"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                suhail@fame.me
              </a>
            </p>
            <p>
              <a
                href="tel:+971585131664"
                className="hover:text-white transition-colors"
              >
                +971 58 513 1664
              </a>
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#01060D] font-bold rounded-full px-8 py-4 text-base tracking-wide hover:bg-[#EEEEEE] transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
