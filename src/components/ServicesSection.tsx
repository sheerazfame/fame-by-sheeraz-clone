import Link from "next/link";
import { FAME_AI_PACKAGES } from "@/lib/services";
import { SITE } from "@/lib/site";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#0A0606] py-24 sm:py-36 border-t border-[#F5F0E8]/8"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading row — magazine style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 mb-16 sm:mb-20">
          <div className="lg:col-span-4">
            <p className="kicker kicker-fire mb-5">Inside this issue</p>
            <p className="section-mark">Chapter II · The Work</p>
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
              Seven ways
              <br />
              we make people <span className="text-[#F14312]">famous</span>.
            </h2>
            <p
              className="lede text-[#F5F0E8]/60 max-w-[58ch] mt-7"
              style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.55" }}
            >
              Each one combines Sheeraz&apos;s 25-year Hollywood playbook with
              the AI he chose for that exact job. No retainers. No decks. Just
              the work, weekly, signed off by him.
            </p>
          </div>
        </div>

        {/* Editorial list */}
        <ol className="border-t border-[#F5F0E8]/12">
          {FAME_AI_PACKAGES.map((pkg, idx) => (
            <li key={pkg.slug} className="border-b border-[#F5F0E8]/12 group">
              <Link
                href={`/services/${pkg.slug}`}
                className="grid grid-cols-12 gap-4 sm:gap-8 items-baseline py-7 sm:py-9 transition-colors hover:bg-[#F5F0E8]/[0.02]"
              >
                <span className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-lg sm:text-xl">
                  {ROMAN[idx]}.
                </span>

                <div className="col-span-10 sm:col-span-5 lg:col-span-4">
                  <h3
                    className="font-display text-[#F5F0E8] group-hover:text-[#F14312] transition-colors"
                    style={{
                      fontSize: "clamp(22px, 2.6vw, 36px)",
                      lineHeight: "1.05",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {pkg.name}
                  </h3>
                </div>

                <p
                  className="hidden lg:block col-span-5 lede italic text-[#F5F0E8]/65"
                  style={{ fontSize: "17px", lineHeight: "1.45" }}
                >
                  {pkg.tagline}
                </p>

                <span className="col-span-12 sm:col-span-6 lg:col-span-2 flex justify-start sm:justify-end items-center gap-3">
                  <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#F5F0E8]/45 group-hover:text-[#F14312] transition-colors">
                    Read
                  </span>
                  <span
                    className="text-[#F5F0E8]/45 group-hover:text-[#F14312] group-hover:translate-x-1 transition-all duration-300"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>

                {/* Mobile-only tagline */}
                <p
                  className="col-span-12 lg:hidden lede italic text-[#F5F0E8]/55 -mt-1"
                  style={{ fontSize: "15px", lineHeight: "1.45" }}
                >
                  {pkg.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ol>

        {/* Editor's note CTA — restrained, magazine-tone */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-gold mb-4">Editor&apos;s note</p>
            <p
              className="font-serif italic text-[#F5F0E8]/85 max-w-[50ch]"
              style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: "1.3" }}
            >
              Sheeraz takes on a small number of new clients each season. The
              Audit is how he decides who.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link href="/fame-ai" className="btn-primary">
              Apply for the Audit
            </Link>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
