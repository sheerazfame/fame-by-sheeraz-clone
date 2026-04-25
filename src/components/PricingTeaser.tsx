import Link from "next/link";
import { PRICING_TIERS } from "@/lib/services";
import { SITE } from "@/lib/site";

const ROMAN = ["I", "II", "III"];

export default function PricingTeaser() {
  return (
    <section
      id="pricing"
      className="relative bg-[#0A0606] py-24 sm:py-36 border-t border-[#F5F0E8]/8"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4">
            <p className="kicker kicker-gold mb-5">The Tiers</p>
            <p className="section-mark">Chapter VI · Engagement</p>
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
              Three altitudes.
              <br />
              <span className="text-gradient-fire">Pricing on application.</span>
            </h2>
            <p className="lede italic text-[#F5F0E8]/55 mt-6 max-w-[55ch] text-base sm:text-lg leading-relaxed">
              Sheeraz reviews every application personally. We only take on
              clients we know we can make famous.
            </p>
          </div>
        </div>

        {/* Tiers — column layout, no card chrome, generous whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#F5F0E8]/12">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={tier.slug}
              className={`p-8 sm:p-10 border-b border-[#F5F0E8]/12 ${
                idx > 0 ? "lg:border-l border-[#F5F0E8]/12" : ""
              } ${tier.highlight ? "bg-[#F14312]/[0.03]" : ""}`}
            >
              {/* Tier mark */}
              <div className="flex items-baseline justify-between mb-8">
                <span className="numeral text-[#C9A961] text-base">
                  {ROMAN[idx]}.
                </span>
                {tier.highlight && (
                  <span className="lede italic text-[#F14312] text-xs">
                    Where most begin
                  </span>
                )}
              </div>

              <h3
                className="font-display text-[#F5F0E8] mb-2"
                style={{
                  fontSize: "clamp(36px, 3.4vw, 56px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.005em",
                }}
              >
                {tier.name}
              </h3>

              <p
                className="font-serif italic text-[#C9A961] text-lg mb-6"
                style={{ lineHeight: "1.3" }}
              >
                {tier.positioning}
              </p>

              <p className="lede text-[#F5F0E8]/55 mb-8 text-sm leading-relaxed">
                {tier.for}
              </p>

              <div className="rule mb-6" />

              <ul className="space-y-3 mb-10 text-sm">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-baseline gap-3 text-[#F5F0E8]/80 leading-relaxed"
                  >
                    <span className="text-[#F14312] flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={tier.highlight ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 lede italic text-[#F5F0E8]/45 text-center text-base sm:text-lg max-w-2xl mx-auto">
          Not sure which tier? Begin with the{" "}
          <Link
            href="/fame-ai"
            className="text-[#F14312] underline-offset-4 hover:underline"
          >
            FAME AI Audit
          </Link>{" "}
          — Sheeraz will tell you.
        </p>
      </div>
    </section>
  );
}
