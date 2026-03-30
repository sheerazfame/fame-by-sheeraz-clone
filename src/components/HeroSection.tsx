"use client";

import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/13109251667";
const CAL_URL = "https://cal.com/sheerazhasan";

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.997 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.412 1.268 4.845L2 22l5.334-1.24C8.745 21.538 10.345 22 12 22c5.514 0 9.997-4.483 9.997-9.997S17.511 2 11.997 2z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* Full viewport hero - two stacked sub-sections */}
      <section id="home" className="relative overflow-hidden" style={{ minHeight: "100vh" }}>

        {/* TOP HALF: black bg with huge SHEERAZ HASAN heading */}
        <div
          className="relative z-10 flex items-end pb-0 text-center"
          style={{ background: "#000000", paddingTop: "60px", minHeight: "30vh" }}
        >
          <h1
            className="font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#F14312] w-full leading-none"
            style={{
              fontSize: "clamp(55px, 11.5vw, 175px)",
              letterSpacing: "-0.01em",
            }}
          >
            Sheeraz Hasan
          </h1>
        </div>

        {/* BOTTOM HALF: Hollywood Hills image */}
        <div
          className="relative w-full"
          style={{
            minHeight: "70vh",
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Gradient from black at top to transparent */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)" }}
          />

          {/* #1 FAME & AI STRATEGIST */}
          <p
            className="absolute top-6 right-6 sm:top-8 sm:right-10 text-right z-10 font-[family-name:var(--font-barlow)] font-black italic uppercase text-[#EEEEEE]"
            style={{ fontSize: "clamp(13px, 1.9vw, 28px)", lineHeight: 1.1 }}
          >
            #1 Fame &amp; AI Strategist
          </p>
        </div>

        {/* Celebrity collage - section-level overlay, centered */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            top: "21%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "55%",
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
      </section>

      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-orange shadow-lg">
          <ChatIcon />
          Free 15min Call
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shadow-lg">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
}
