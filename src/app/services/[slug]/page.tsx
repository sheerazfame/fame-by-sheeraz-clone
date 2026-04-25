import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAME_AI_PACKAGES, type ServicePackage } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/JsonLd";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return FAME_AI_PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

function findPackage(slug: string): ServicePackage | undefined {
  return FAME_AI_PACKAGES.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = findPackage(slug);
  if (!pkg) return {};
  const title = `${pkg.name} — ${pkg.tagline}`;
  return {
    title,
    description: pkg.oneLiner,
    alternates: { canonical: `${SITE.url}/services/${pkg.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE.url}/services/${pkg.slug}`,
      title,
      description: pkg.oneLiner,
      siteName: SITE.name,
    },
    twitter: { card: "summary_large_image", title, description: pkg.oneLiner },
  };
}

export default async function ServicePackagePage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = findPackage(slug);
  if (!pkg) notFound();

  const idx = FAME_AI_PACKAGES.findIndex((p) => p.slug === pkg.slug);
  const numeral = ROMAN[idx] ?? "—";
  const next = FAME_AI_PACKAGES[(idx + 1) % FAME_AI_PACKAGES.length];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "FAME AI", url: `${SITE.url}/fame-ai` },
    { name: pkg.name, url: `${SITE.url}/services/${pkg.slug}` },
  ]);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ slug: pkg.slug, name: pkg.name, description: pkg.oneLiner }),
          faqSchema(pkg.faqs),
          breadcrumbs,
        ]}
      />

      {/* Hero — editorial article opener */}
      <section className="relative bg-[#0A0606] pt-[160px] pb-16 sm:pb-24">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Masthead */}
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <Link href="/fame-ai" className="hover:text-[#F14312] transition-colors">
                FAME AI
              </Link>
            </p>
            <p className="numeral italic text-[#F5F0E8]/45 text-sm">
              Chapter {numeral}
            </p>
          </div>

          <p className="kicker kicker-fire mb-6">FAME AI · Package {numeral}</p>

          <h1
            className="font-display text-[#F5F0E8] mb-8"
            style={{
              fontSize: "clamp(44px, 7vw, 112px)",
              lineHeight: "0.93",
              letterSpacing: "-0.012em",
            }}
          >
            {pkg.name}.
          </h1>

          <p
            className="font-serif italic text-[#F14312] mb-10 max-w-[42ch]"
            style={{ fontSize: "clamp(22px, 2.6vw, 36px)", lineHeight: "1.2" }}
          >
            {pkg.hero}
          </p>

          <p
            className="lede text-[#F5F0E8]/75 max-w-[60ch] mb-12 leading-relaxed"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            {pkg.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a 15-min Call
            </a>
            <Link href="/fame-ai" className="btn-ghost">
              Apply for the Audit
            </Link>
          </div>
        </div>
      </section>

      {/* The Stack — quiet editorial credits */}
      <section className="bg-[#0A0606] py-16 sm:py-24 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6">
            <div className="lg:col-span-4">
              <p className="kicker kicker-gold mb-3">The Instruments</p>
              <p className="font-serif italic text-[#F5F0E8]/70 text-lg">
                Models we play in this package, in the order they speak.
              </p>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {pkg.aiStack.map((m, i) => (
                <li
                  key={m}
                  className="flex items-baseline gap-4 py-3 border-b border-[#F5F0E8]/10"
                >
                  <span className="numeral text-[#C9A961] text-sm w-6">
                    {ROMAN[i] ?? `${i + 1}.`}
                  </span>
                  <span className="font-serif italic text-[#F5F0E8] text-lg sm:text-xl">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables + Outcomes — magazine spread */}
      <section className="bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-32 border-t border-[#0A0606]/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          <div>
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-4">
              What you receive
            </p>
            <h2
              className="font-display text-[#0A0606] mb-9"
              style={{
                fontSize: "clamp(36px, 4.8vw, 64px)",
                lineHeight: "0.95",
              }}
            >
              Deliverables.
            </h2>
            <ul className="space-y-5 border-t border-[#0A0606]/15">
              {pkg.deliverables.map((d, i) => (
                <li
                  key={d}
                  className="grid grid-cols-12 gap-3 items-baseline pt-5 border-b border-[#0A0606]/10 pb-5"
                >
                  <span className="col-span-2 sm:col-span-1 numeral text-[#F14312] text-sm">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p
                    className="col-span-10 sm:col-span-11 lede text-[#0A0606]/85 leading-relaxed"
                    style={{ fontSize: "17px" }}
                  >
                    {d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[#C9A961] text-[11px] font-semibold tracking-[0.32em] uppercase mb-4">
              What it gets you
            </p>
            <h2
              className="font-display text-[#0A0606] mb-9"
              style={{
                fontSize: "clamp(36px, 4.8vw, 64px)",
                lineHeight: "0.95",
              }}
            >
              Outcomes.
            </h2>
            <ul className="space-y-7 border-t border-[#0A0606]/15">
              {pkg.outcomes.map((o, i) => (
                <li
                  key={o}
                  className="grid grid-cols-12 gap-3 pt-5 border-b border-[#0A0606]/10 pb-5"
                >
                  <span className="col-span-2 sm:col-span-1 numeral text-[#F14312] text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p
                    className="col-span-10 sm:col-span-11 font-serif italic text-[#0A0606]/85 leading-snug"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
                  >
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/8">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
          <p className="kicker kicker-gold mb-5">Common Questions</p>
          <p className="section-mark mb-10">Chapter III · Q&amp;A</p>

          <ol className="border-t border-[#F5F0E8]/12">
            {pkg.faqs.map((f, i) => (
              <li
                key={f.q}
                className="grid grid-cols-12 gap-x-6 gap-y-4 py-9 border-b border-[#F5F0E8]/12"
              >
                <span className="col-span-12 sm:col-span-1 numeral text-[#C9A961] text-base">
                  {ROMAN[i] ?? `${i + 1}.`}
                </span>
                <div className="col-span-12 sm:col-span-11">
                  <h3
                    className="font-serif text-[#F5F0E8] mb-3"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: "1.2" }}
                  >
                    {f.q}
                  </h3>
                  <p
                    className="lede text-[#F5F0E8]/70 leading-relaxed"
                    style={{ fontSize: "16px" }}
                  >
                    {f.a}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA + Next chapter */}
      <section className="bg-[#0A0606] py-24 sm:py-32 border-t border-[#F5F0E8]/12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <p className="kicker kicker-fire mb-5">The Door</p>
            <h2
              className="font-display text-[#F5F0E8] mb-7"
              style={{
                fontSize: "clamp(36px, 4.8vw, 64px)",
                lineHeight: "0.95",
              }}
            >
              Ready to <em className="font-serif italic font-normal">begin</em>?
            </h2>
            <p className="lede italic text-[#F5F0E8]/65 max-w-[44ch] mb-8 text-base sm:text-lg leading-relaxed">
              Sheeraz reads every {pkg.shortName} application personally. The
              free 15-minute call tells you whether this is the package — or
              which other one to start with.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Call
              </a>
              <Link href="/fame-ai" className="btn-ghost">
                Apply for the Audit
              </Link>
            </div>
          </div>

          <div className="border-t lg:border-t-0 lg:border-l border-[#F5F0E8]/12 pt-12 lg:pt-0 lg:pl-16">
            <p className="kicker kicker-gold mb-5">Next chapter</p>
            <Link
              href={`/services/${next.slug}`}
              className="group block"
            >
              <p className="numeral text-[#F5F0E8]/45 italic text-sm mb-2">
                {ROMAN[FAME_AI_PACKAGES.findIndex((p) => p.slug === next.slug)]}.
              </p>
              <h3
                className="font-display text-[#F5F0E8] group-hover:text-[#F14312] transition-colors mb-2"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 48px)",
                  lineHeight: "1",
                }}
              >
                {next.name}
              </h3>
              <p className="font-serif italic text-[#F5F0E8]/55 text-base sm:text-lg leading-relaxed">
                {next.tagline}
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.22em] text-[#F14312]">
                Continue reading
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
