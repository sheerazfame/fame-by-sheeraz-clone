"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function QuoteSection() {
  const quote = useInView(0.15);
  const photo = useInView(0.1);

  return (
    <section className="bg-white text-[#01060D]">
      {/* Quote text - animate in on scroll */}
      <div
        ref={quote.ref}
        className="max-w-[1200px] mx-auto px-6 py-20 text-center"
        style={{
          opacity: quote.inView ? 1 : 0,
          transform: quote.inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h2
          className="font-[family-name:var(--font-barlow)] font-black italic leading-[1.15]"
          style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
        >
          What do Kim Kardashian, Logan Paul, and Zendaya have in common?
          Just ask Sheeraz Hasan, the self-made media mogul who turned them all
          into the world&apos;s most famous celebrities. In other words,
          he&apos;s the man who can make just about anyone famous.
        </h2>
      </div>

      {/* Sheeraz cutout photo with animate-in */}
      <div
        ref={photo.ref}
        className="relative mx-auto pointer-events-none"
        style={{
          width: "clamp(280px, 36vw, 557px)",
          aspectRatio: "557/835",
          opacity: photo.inView ? 1 : 0,
          transform: photo.inView ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
        }}
      >
        <Image
          src="/images/quote-sheeraz-cutout.png"
          alt="Sheeraz Hasan"
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 60vw, 36vw"
          unoptimized
        />
      </div>

      {/* Dark gradient transition to next section */}
      <div
        className="w-full h-24"
        style={{
          background:
            "linear-gradient(to bottom, white 0%, #01060D 100%)",
        }}
      />
    </section>
  );
}
