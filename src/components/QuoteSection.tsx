import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="bg-white text-[#01060D]">
      {/* Quote text */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <blockquote
          className="font-[family-name:var(--font-barlow)] font-extrabold italic leading-snug"
          style={{ fontSize: "clamp(20px, 2.5vw, 34px)" }}
        >
          What do Kim Kardashian, Logan Paul, and Zendaya have in common?
          Just ask Sheeraz Hasan, the self-made media mogul who turned them all
          into the world&apos;s most famous celebrities. In other words,
          he&apos;s the man who can make just about anyone famous.
        </blockquote>
      </div>

      {/* Sheeraz photo — centered, bleeds into dark section below */}
      <div className="flex justify-center pb-0">
        <div className="relative w-[280px] h-[420px]">
          <Image
            src="/images/quote-sheeraz.png"
            alt="Sheeraz Hasan"
            fill
            className="object-contain object-bottom"
            sizes="280px"
          />
        </div>
      </div>

      {/* Dark transition strip */}
      <div className="w-full h-16 bg-gradient-to-b from-white to-[#01060D]" />
    </section>
  );
}
