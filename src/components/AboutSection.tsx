"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
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
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".fade-target") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-dark-secondary relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <Image
          src="/images/pink-poppy.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="fade-target relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-sheeraz.jpg"
                alt="Sheeraz Hasan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Image border accent */}
              <div className="absolute -inset-2 border border-gold/20 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="fade-target text-sm uppercase tracking-[0.3em] text-muted mb-4">
              About
            </p>
            <h2 className="fade-target delay-100 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
              Sheeraz Hasan
            </h2>
            <p className="fade-target delay-200 text-gold uppercase tracking-widest text-sm mb-8">
              Strategist
            </p>

            <div className="fade-target delay-300 space-y-6 text-white/60 leading-relaxed">
              <p>
                With over 25 years in the entertainment and media industry,
                Sheeraz Hasan is the go-to strategist for celebrities,
                entrepreneurs, and global brands seeking unprecedented media
                coverage and attention.
              </p>
              <p>
                From orchestrating viral moments to managing full-scale media
                campaigns, Sheeraz has worked with the biggest names in
                Hollywood, Bollywood, and beyond. His client roster includes
                A-list celebrities, Fortune 500 companies, and emerging
                tech startups.
              </p>
              <p>
                Based between Hollywood and Dubai, Sheeraz bridges the gap
                between East and West, delivering global media strategies that
                transcend borders and cultures.
              </p>
            </div>

            <div className="fade-target delay-400 mt-10 flex flex-wrap gap-4">
              <a
                href="https://sheeraz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 btn-glow"
              >
                Sheeraz.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                Get in touch
              </a>
            </div>

            {/* Large decorative name */}
            <div className="fade-target delay-500 mt-12">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white/[0.03] select-none">
                Sheeraz Hasan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
