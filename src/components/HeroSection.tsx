import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero section - matches live site layout: 904px at 1536px viewport */}
      <section
        id="home"
        className="relative bg-black overflow-hidden"
        style={{ height: "clamp(500px, 58.85vw, 904px)" }}
      >
        {/* Hollywood Hills background image */}
        <div
          className="absolute"
          style={{
            top: "27%",
            left: "2.08%",
            width: "94.86%",
            height: "69.25%",
          }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="Fame by Sheeraz Hollywood Hills"
            fill
            className="object-cover"
            sizes="95vw"
            unoptimized
          />
        </div>

        {/* Celebrity collage */}
        <div
          className="absolute"
          style={{
            top: "21.35%",
            left: "22.33%",
            width: "54.3%",
            height: "78.65%",
          }}
        >
          <Image
            src="/images/hero-celebs.webp"
            alt="Sheeraz Hasan with celebrities"
            fill
            className="object-contain object-bottom"
            sizes="55vw"
            priority
            unoptimized
          />
        </div>

        {/* SHEERAZ HASAN heading */}
        <h1
          className="absolute font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#F14312] leading-none"
          style={{
            top: "7.52%",
            left: "2.67%",
            width: "93.75%",
            fontSize: "clamp(55px, 10.41vw, 160px)",
            letterSpacing: "-0.01em",
          }}
        >
          Sheeraz Hasan
        </h1>

        {/* #1 FAME & AI STRATEGIST */}
        <p
          className="absolute text-right font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#EEEEEE] leading-tight"
          style={{
            top: "25.44%",
            left: "65.3%",
            width: "31.1%",
            fontSize: "clamp(16px, 2.42vw, 37px)",
          }}
        >
          #1 Fame &amp; AI Strategist
        </p>
      </section>
    </>
  );
}
