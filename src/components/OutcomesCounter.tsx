"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  numeral: string;
  value: string;
  label: string;
  detail: string;
}

const STATS: Stat[] = [
  {
    numeral: "I.",
    value: "$3 billion",
    label: "in earned media",
    detail: "Generated for clients across television, print and digital — verified by Hollywood.TV archives and ABC 20/20.",
  },
  {
    numeral: "II.",
    value: "25 years",
    label: "behind the lens",
    detail: "From paparazzi crews on Sunset Boulevard to the front row at GITEX 2025. Sheeraz has been in the room.",
  },
  {
    numeral: "III.",
    value: "250+ stars",
    label: "launched, polished, protected",
    detail: "Kim, Logan, Zendaya, Priyanka, Paris, Justin, Miley, Jake. Most before the world had heard of them.",
  },
  {
    numeral: "IV.",
    value: "1 billion+",
    label: "audiences reached",
    detail: "Aggregate impressions delivered to clients across television, social, OTT and AI search surfaces.",
  },
];

function useInView<T extends Element>(threshold = 0.2) {
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

export default function OutcomesCounter() {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      className="relative bg-[#0A0606] py-24 sm:py-36 border-t border-[#F5F0E8]/8"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4">
            <p className="kicker kicker-gold mb-5">By the numbers</p>
            <p className="section-mark">Chapter III · The Record</p>
          </div>
          <div className="lg:col-span-8">
            <h2
              className="font-display text-[#F5F0E8]"
              style={{
                fontSize: "clamp(40px, 5.6vw, 88px)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              The receipts.
              <br />
              <span className="text-gradient-fire">In four numbers.</span>
            </h2>
          </div>
        </div>

        {/* Stat list — magazine layout */}
        <div className="border-t border-[#F5F0E8]/12">
          {STATS.map((stat, i) => (
            <div
              key={stat.numeral}
              className="grid grid-cols-12 gap-4 sm:gap-8 py-9 sm:py-12 border-b border-[#F5F0E8]/12"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease-out ${i * 0.12}s, transform 0.7s ease-out ${i * 0.12}s`,
              }}
            >
              <div className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-base sm:text-lg pt-1.5">
                {stat.numeral}
              </div>

              <div className="col-span-10 sm:col-span-5">
                <p
                  className="font-display text-[#F14312]"
                  style={{
                    fontSize: "clamp(40px, 6vw, 88px)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.012em",
                  }}
                >
                  {stat.value}
                </p>
                <p className="font-serif italic text-[#F5F0E8]/65 mt-1 text-lg sm:text-xl">
                  {stat.label}
                </p>
              </div>

              <p
                className="col-span-12 sm:col-span-6 lede text-[#F5F0E8]/60 leading-relaxed"
                style={{ fontSize: "clamp(15px, 1.2vw, 17px)", lineHeight: "1.55" }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 lede text-[#F5F0E8]/35 text-sm">
          Sources: Fame by Sheeraz internal records · ABC&apos;s 20/20 ·
          Hollywood.TV archives · GITEX Global 2025 · SuperAI 2025.
        </p>
      </div>
    </section>
  );
}
