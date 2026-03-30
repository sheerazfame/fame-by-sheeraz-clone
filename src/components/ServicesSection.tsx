"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/free15-mindiscoverycall/fameauditcall";

const services = [
  {
    icon: "/images/icon-celebrities.png",
    title: "CELEBRITIES & INFLUENCERS",
    description:
      "From social media influencers and KOLs to the biggest stars in the world.",
  },
  {
    icon: "/images/icon-press-media.png",
    title: "PRESS & MEDIA SOLUTIONS",
    description: "Full media machine for all your PR needs.",
  },
  {
    icon: "/images/icon-crypto.png",
    title: "CRYPTO / WEB3",
    description:
      "Strategic media and celebrity partnerships for crypto and Web3 projects.",
  },
  {
    icon: "/images/icon-google.png",
    title: "ONLINE & AI PRESENCE",
    description:
      "Become instantly trusted and verified whenever anyone searches your name.",
  },
  {
    icon: "/images/icon-activations.png",
    title: "NETWORKING & FUNDRAISING",
    description:
      "High-level introductions and fundraising strategy for visionary founders.",
  },
];

const subBrands = [
  { name: "Hollywood.AI", src: "/images/logo-hollywoodai.png" },
  { name: "Bollywood.AI", src: "/images/logo-bollywoodai.png" },
  { name: "Fame by Sheeraz Hollywood Hills", src: "/images/logo-fame-hills.png" },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".fade-target") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 sm:py-28 bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="fade-target text-sm uppercase tracking-[0.3em] text-muted mb-4">
            What we do
          </p>
          <h2 className="fade-target delay-100 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            AI, Media Strategy{" "}
            <span className="text-gold-gradient">&amp; Amplification</span>
          </h2>
          <p className="fade-target delay-200 mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            We combine cutting-edge AI technology with decades of media
            expertise to amplify your brand on a global scale.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fade-target delay-${(index + 1) * 100} group relative bg-dark-tertiary border border-white/5 p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors group/link"
              >
                LET&apos;S CHAT
                <svg
                  className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-gold/5 to-transparent" />
            </div>
          ))}
        </div>

        {/* Sub-brand Logos */}
        <div className="fade-target flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8 border-t border-white/5">
          {subBrands.map((brand) => (
            <div
              key={brand.name}
              className="opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={150}
                height={50}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
