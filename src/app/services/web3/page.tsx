import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web3 | Fame by Sheeraz",
  description:
    "Creating massive FOMO around your project. Authentically integrating Web3 into the infrastructure of any celebrity or business.",
};

const processSteps = [
  {
    badge: "1",
    eyebrow: "Where you are",
    title: "FAME AUDIT",
    description:
      "Evaluate Whitepaper and Tokenomics, assess founder's current PR and FAME touchpoints.",
  },
  {
    badge: "2",
    eyebrow: "Where you wanna be",
    title: "FAME STRATEGY",
    description:
      "Once the data is collected and analyzed, we will create an amplification roadmap.",
  },
  {
    badge: "3",
    eyebrow: "How to get there",
    title: "FAME EXECUTION",
    description:
      "Sheeraz Hasan and the FAME team will execute your personalized roadmap based on your budget and strategy.",
  },
];

const turnKey = [
  {
    title: "TALENT",
    description: "Connecting you to Celebrities & Influencers.",
  },
  {
    title: "MEDIA",
    description: "Creating Media FOMO for your projects.",
  },
  {
    title: "EXCHANGES",
    description: "Connecting you to the biggest exchanges.",
  },
  {
    title: "INVESTORS",
    description: "Connecting your project to Investors.",
  },
];

const cases = [
  { name: "Kim Kardashian", tag: "The Billion Dollar Dynasty", img: "/images/cs-kim-k.jpg" },
  { name: "Logan Paul", tag: "The Biggest Meet & Greet", img: "/images/cs-logan-paul.jpg" },
  { name: "Paris Hilton", tag: "This is Paris", img: "/images/cs-paris-hilton.jpg" },
  { name: "Zendaya", tag: "Meets UAE", img: "/images/cs-zendaya.jpg" },
  { name: "Selena Gomez", tag: "The Face of Pantene", img: "/images/cs-selena.jpg" },
  { name: "CZ", tag: "Founder of Binance", img: "/images/logo-binance.png" },
  { name: "Ricky Martin", tag: "Ricky Martin in Dubai", img: "/images/cs-ricky-martin.jpg" },
  { name: "Miley Cyrus", tag: "The Early Days", img: "/images/cs-miley.jpg" },
];

const accelerationBlocks = [
  {
    title: "Maximizing Media Touchpoints for Crypto Projects",
    description:
      "Identifying and capitalising on all meaningful media touch points and growth opportunities — out-of-home, paid ads, lifecycle management, social, PR, content, SEO, stadium assets, affiliate marketing, gift vouchers — for any crypto project.",
  },
  {
    title: "Comprehensive Crypto Project Consulting",
    description:
      "Full end-to-end consulting from concept to contract for any crypto project — including go-live, bringing the project to life seamlessly in an authentic, relevant, and relatable manner to ensure genuine engagement.",
  },
  {
    title: "Global Thought-Leadership and Workshops",
    description:
      "Driving thought-leadership and workshops to lead local teams worldwide across the dozens of countries where you operate to measure, manage and evaluate brand partnership opportunities.",
  },
  {
    title: "Strategic Partnership Development and Collaboration",
    description:
      "Identifying strategic partnerships with key industry players, influencers, and organisations to amplify brand presence, expand market reach, and drive growth opportunities.",
  },
  {
    title: "Global Contract and Commercial Negotiation Consulting",
    description:
      "Full-scale contract, commercial and deliverables negotiation consulting with any global entity, with a strong focus on integrating your ecosystem into their respective infrastructure.",
  },
  {
    title: "ROI Projects and Commercial Value Identification",
    description:
      "Creating ROI projects and identifying clear commercial value where the company can benefit in market share, user acquisition, brand health, and revenue improvements.",
  },
];

export default function Web3Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#01060D] py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01060D] via-[#0A0F1A] to-[#01060D] opacity-80" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest font-semibold mb-5">
            WEB3 SERVICES
          </p>
          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-[1.05] mb-7"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Creating massive FOMO around your project
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/90 text-lg leading-relaxed mb-10 max-w-3xl">
            Authentically integrating the Web3 ecosystem into the
            infrastructure of any celebrity or business in a way that is
            relevant, reliable and native to the nuances of their various
            communities.
          </p>
          <Link
            href="https://wa.me/971585131664"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-base"
          >
            Free 15 min Call
          </Link>
        </div>
      </section>

      {/* ── The Process ── */}
      <section className="bg-[#EE4223] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/80 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest font-semibold text-center mb-3">
            THE PROCESS
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-white text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            There is a formula to FAME in Web3
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/90 text-base text-center max-w-3xl mx-auto mb-14">
            Our strategies to create some of the biggest A-list stars and
            brands in the world can be applied to your web3 project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {processSteps.map((s) => (
              <div key={s.title} className="bg-[#01060D]/30 rounded-xl p-7">
                <span className="font-[family-name:var(--font-barlow)] font-black italic text-white/40 text-5xl block mb-2">
                  {s.badge}
                </span>
                <p className="font-[family-name:var(--font-inter)] text-white/70 text-xs uppercase tracking-widest mb-2">
                  {s.eyebrow}
                </p>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-xl mb-3">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-white/90 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="https://wa.me/971585131664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#01060D] font-[family-name:var(--font-barlow)] font-bold text-base px-10 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </section>

      {/* ── Turn-Key ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest font-semibold text-center mb-3">
            We are turn-key
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-14"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Web3 Amplification in a way that&apos;s never been done before
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {turnKey.map((t) => (
              <div
                key={t.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-8 hover:border-[#EE4223]/40 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-black italic text-[#EE4223] text-2xl mb-3">
                  {t.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/80 text-sm leading-relaxed">
                  {t.description}
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
            <p className="text-white/70 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest font-semibold mb-3">
              MEET YOUR CONSULTANT
            </p>
            <h2
              className="font-[family-name:var(--font-barlow)] font-black italic text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Sheeraz Hasan
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/90 text-base leading-relaxed">
              Sheeraz is a media icon endorsed by some of the world&apos;s
              biggest stars and social media influencers — dubbed by Paris
              Hilton as &quot;The Biggest Fame Dealer in the World.&quot;
              He&apos;s been overseeing campaigns for some of the most
              recognised brands, celebrities, and government agencies worldwide
              including Logan Paul, Kim Kardashian, Paris Hilton, Zendaya, Hula
              Beauty and more.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case Studies grid ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-12"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Case studies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {cases.map((c) => (
              <div
                key={c.name}
                className="relative aspect-[3/4] bg-[#0A0F1A] rounded-xl overflow-hidden group"
              >
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-base leading-tight">
                    {c.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-white/70 text-xs mt-1">
                    {c.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/casestudies"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[#EEEEEE]/70 text-sm uppercase tracking-widest hover:text-[#EE4223] transition-colors"
            >
              Watch all case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAME WEB3 / Marketing Acceleration ── */}
      <section className="bg-[#01060D] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#EE4223] font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest font-semibold text-center mb-3">
            FAME WEB3 — Marketing Acceleration
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic text-[#EEEEEE] text-center leading-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Maximizing Crypto Project Success
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-base text-center max-w-3xl mx-auto mb-14">
            Integrated solutions for growth, engagement, and ROI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accelerationBlocks.map((b) => (
              <div
                key={b.title}
                className="bg-[#0A0F1A] border border-[#1a2235] rounded-xl p-6 hover:border-[#EE4223]/40 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-base mb-3 leading-tight">
                  {b.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
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
