import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Web3 | famebysheeraz.com",
  description:
    "Creating massive FOMO around your project. Authentically integrating Web3 into the infrastructure of any celebrity or business.",
};

const processSteps = [
  {
    title: "FAME AUDIT",
    description:
      "Evaluate Whitepaper and Tokenomics, assess founder's current PR and FAME touchpoints.",
  },
  {
    title: "FAME STRATEGY",
    description:
      "Once the data is collected and analyzed, we will create an amplification roadmap.",
  },
  {
    title: "FAME EXECUTION",
    description:
      "Implementation phase tailored to your budget and strategy — talent, media, exchanges, investors.",
  },
];

const services = [
  {
    title: "TALENT",
    description:
      "Connecting you to celebrities and influencers for endorsements and visibility that move markets.",
  },
  {
    title: "MEDIA",
    description:
      "Creating media FOMO for your project — press momentum and news coverage at every milestone.",
  },
  {
    title: "EXCHANGES",
    description:
      "Direct connections to the biggest crypto exchanges, listings teams, and trading platforms.",
  },
  {
    title: "INVESTORS",
    description:
      "Warm introductions to investors, family offices, and strategic partners aligned to your raise.",
  },
];

export default function Web3Page() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative bg-[#01060D] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01060D] via-[#0A0F1A] to-[#01060D] opacity-80" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-5">
            FAME FOR WEB3
          </p>

          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.1] mb-8"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
          >
            CREATING MASSIVE FOMO AROUND YOUR PROJECT
          </h1>

          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE] text-lg leading-relaxed mb-10 max-w-3xl">
            Authentically integrating the Web3 ecosystem into the infrastructure
            of any celebrity or business in a way that is relevant, reliable and
            native to the nuances of their various communities.
          </p>

          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-base"
          >
            FREE 15 MIN CALL
          </Link>
        </div>
      </section>

      {/* ── The Process Section ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            THE PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title}>
                <p className="text-white/70 font-[family-name:var(--font-barlow)] font-black italic text-3xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/90 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            WHAT WE DELIVER
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-8 hover:border-[#EE4223]/40 transition-colors"
              >
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

      {/* ── Meet Your Consultant ── */}
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
            <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-3">
              MEET YOUR CONSULTANT
            </p>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              SHEERAZ HASAN
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/90 text-base leading-relaxed">
              Sheeraz is a media icon endorsed by some of the world&apos;s
              biggest stars — dubbed by Paris Hilton as &quot;The Biggest Fame
              Dealer in the World.&quot; He manages campaigns for major brands
              and celebrities including Logan Paul, Kim Kardashian, Paris
              Hilton, Zendaya and CZ of Binance.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] leading-tight mb-8"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            BOOK A FREE CONSULTATION CALL
          </h2>

          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EE4223] text-white font-[family-name:var(--font-barlow)] font-bold text-lg px-10 py-4 rounded-full hover:bg-[#F14312] transition-colors"
          >
            LET&apos;S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
