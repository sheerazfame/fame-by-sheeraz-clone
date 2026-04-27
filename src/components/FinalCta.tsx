import Link from "next/link";
import { SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="bg-[#0A0606] text-[#F5F0E8] py-24 sm:py-36 border-t border-[#F5F0E8]/8">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <p className="kicker kicker-fire mb-5">Ready?</p>

        <h2
          className="font-display text-[#F5F0E8] mb-8"
          style={{
            fontSize: "clamp(44px, 7vw, 112px)",
            lineHeight: "0.92",
            letterSpacing: "-0.012em",
          }}
        >
          Become the next
          <br />
          <em className="font-serif italic font-normal text-[#F14312]">name</em>.
        </h2>

        <p className="font-serif italic text-[#F5F0E8]/65 max-w-xl mx-auto mb-12 text-lg sm:text-xl leading-relaxed">
          Free 15-minute call with Sheeraz. No commitment, no decks.
        </p>

        <a
          href={SITE.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
