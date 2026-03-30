"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/free15-mindiscoverycall/fameauditcall";

const specializedServices = [
  {
    title: "For Entrepreneurs",
    description:
      "Build your personal brand, get featured in top-tier media, and position yourself as a thought leader in your industry.",
    gradient: "from-amber-900/20 to-transparent",
  },
  {
    title: "For Web3",
    description:
      "Celebrity endorsements, media coverage, and community building for blockchain, crypto, and NFT projects.",
    gradient: "from-blue-900/20 to-transparent",
  },
  {
    title: "PR Services",
    description:
      "Full-service public relations including crisis management, media training, press releases, and red carpet events.",
    gradient: "from-purple-900/20 to-transparent",
  },
  {
    title: "FAME 911",
    description:
      "Emergency PR and crisis management. When you need immediate media strategy, we are your first call.",
    gradient: "from-red-900/20 to-transparent",
  },
];

export default function SpecializedServices() {
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
      className="py-20 sm:py-28 bg-dark-secondary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-target text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Specialized{" "}
            <span className="text-gold-gradient">Services</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specializedServices.map((service, index) => (
            <div
              key={service.title}
              className={`fade-target delay-${(index + 1) * 100} group relative overflow-hidden border border-white/5 bg-dark-tertiary p-8 sm:p-10 hover:border-gold/20 transition-all duration-500`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-white/20 text-sm uppercase tracking-widest text-white hover:border-gold hover:text-gold transition-all duration-300 group/btn"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
