"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function QuoteSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-36">
      <div
        ref={ref}
        className="max-w-[1100px] mx-auto px-6 sm:px-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
        }}
      >
        {/* Magazine attribution */}
        <p className="lede text-[#0A0606]/45 text-sm mb-10 flex items-center gap-3">
          <span className="numeral">I.</span>
          <span className="w-12 h-px bg-[#0A0606]/25" />
          <span>The Doctrine</span>
        </p>

        {/* Big oversized quote mark */}
        <div
          aria-hidden="true"
          className="font-serif italic text-[#F14312] leading-none mb-2"
          style={{ fontSize: "clamp(80px, 14vw, 220px)" }}
        >
          &ldquo;
        </div>

        <blockquote
          className="font-serif text-[#0A0606] -mt-8 sm:-mt-12 mb-10"
          style={{
            fontSize: "clamp(28px, 4.6vw, 64px)",
            lineHeight: "1.06",
            letterSpacing: "-0.005em",
          }}
        >
          Money follows <em className="text-[#F14312] not-italic font-display">FAME</em>.
          <br />
          AI follows money.
          <br />
          We do <em>all three</em> — and Sheeraz signs every page.
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-[#0A0606]/30" />
          <p className="font-sans text-[#0A0606]/65 text-sm tracking-[0.18em] uppercase">
            Sheeraz Hasan, on what he sells
          </p>
        </div>

        {/* Lower body context */}
        <p
          className="lede text-[#0A0606]/65 max-w-[58ch] mt-14"
          style={{
            fontSize: "clamp(17px, 1.4vw, 20px)",
            lineHeight: "1.55",
          }}
        >
          What do Kim Kardashian, Logan Paul and Zendaya have in common? They
          asked Sheeraz Hasan first. Now Sheeraz combines that 25-year playbook
          with GPT, Claude and Gemini to engineer fame on demand — for
          entrepreneurs, public figures, founders and brands ready to dominate
          their category.
        </p>
      </div>
    </section>
  );
}
