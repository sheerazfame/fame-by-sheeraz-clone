"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/13109251667";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

const row1: ServiceCard[] = [
  {
    image: "/images/service-ai-media.png",
    title: "AI, MEDIA STRATEGY & AMPLIFICATION",
    description:
      "Money follows FAME. Become unmissable as a business, entrepreneur or talent.",
    ctaLabel: "CONTACT US",
    ctaHref: "/contact",
  },
  {
    image: "/images/service-online-ai.png",
    title: "ONLINE & AI PRESENCE",
    description:
      "Become instantly trusted and verified whenever anyone searches your name.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services/online-ai-presence",
  },
  {
    image: "/images/service-networking.png",
    title: "NETWORKING & FUNDRAISING",
    description:
      "We can help connect the dots with the people that can change the game for your business, career or project.",
    ctaLabel: "CONTACT US",
    ctaHref: "/contact",
  },
];

const row2: ServiceCard[] = [
  {
    image: "/images/service-celebrities.png",
    title: "CELEBRITIES & INFLUENCERS",
    description:
      "From social media influencers and KOLs to the biggest stars in the world.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services/celebrities-influencers",
  },
  {
    image: "/images/service-press.png",
    title: "PRESS & MEDIA SOLUTIONS",
    description: "Full media machine for all your PR needs.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services/press-media",
  },
  {
    image: "/images/service-crypto.png",
    title: "CRYPTO / WEB3",
    description:
      "Creating FOMO around your project and helping you get listed in the biggest crypto exchanges.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services/crypto-web3",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.82 13.293c-.198.561-1.163 1.074-1.593 1.122-.385.043-.868.06-1.397-.088-.322-.094-.736-.221-1.265-.433-2.216-.862-3.66-3.094-3.77-3.238-.11-.143-.9-1.198-.9-2.285 0-1.087.57-1.621.77-1.843.2-.222.438-.278.583-.278.145 0 .29.001.416.007.134.006.313-.051.49.374.182.436.618 1.51.672 1.62.055.11.09.237.017.38-.072.143-.109.232-.217.357-.11.126-.23.281-.329.378-.11.108-.223.226-.096.442.127.217.564.93 1.21 1.508.83.74 1.53.968 1.748 1.076.217.11.344.092.471-.055.127-.148.543-.635.687-.852.144-.217.288-.181.486-.109.198.072 1.258.594 1.474.703.217.11.36.163.413.253.054.09.054.523-.144 1.084z" />
    </svg>
  );
}

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-[#060c18] border border-white/10 hover:border-[#F14312]/40 transition-colors duration-300">
      {/* Card image */}
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <h3
          className="font-[family-name:var(--font-barlow)] font-extrabold italic text-[#EEEEEE] leading-tight"
          style={{ fontSize: "clamp(16px, 1.4vw, 24px)" }}
        >
          {card.title}
        </h3>

        <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/60 text-sm leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Button row */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            href={card.ctaHref}
            className="btn-outline text-xs tracking-widest uppercase py-2 px-5 flex-shrink-0"
          >
            {card.ctaLabel}&nbsp;&rarr;
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="btn-whatsapp flex-shrink-0"
            style={{ width: 40, height: 40 }}
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#01060D] border-t border-[#F14312]/30 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-[family-name:var(--font-inter)] text-[#EEEEEE]/50 text-xs uppercase tracking-[0.35em] mb-4">
            Specialized Services
          </p>
          <h2
            className="font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#F14312] leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            Over 25 Years in the Business of Attention
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row1.map((card) => (
            <ServiceCardItem key={card.title} card={card} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {row2.map((card) => (
            <ServiceCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
