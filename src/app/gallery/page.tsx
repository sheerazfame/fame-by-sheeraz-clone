import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Selected photography from Fame by Sheeraz — moments behind the scenes of two and a half decades of celebrity, media and AI.",
  alternates: { canonical: `${SITE.url}/gallery` },
};

const PHOTOS = [
  { src: "/images/gallery/gallery-1.png", alt: "Sheeraz with a client", w: 600, h: 600 },
  { src: "/images/gallery/gallery-2.jpg", alt: "Behind the scenes, Hollywood", w: 600, h: 400 },
  { src: "/images/gallery/gallery-3.png", alt: "Backstage", w: 600, h: 400 },
  { src: "/images/gallery/gallery-4.png", alt: "Press junket", w: 600, h: 400 },
  { src: "/images/gallery/gallery-5.png", alt: "Red carpet", w: 600, h: 400 },
  { src: "/images/gallery/gallery-6.png", alt: "On set", w: 600, h: 400 },
  { src: "/images/gallery/gallery-7.jpg", alt: "Event coverage", w: 600, h: 400 },
  { src: "/images/gallery/gallery-8.png", alt: "Studio session", w: 600, h: 400 },
  { src: "/images/gallery/gallery-9.jpg", alt: "Conference keynote", w: 600, h: 400 },
  { src: "/images/gallery/gallery-10.jpg", alt: "Travel diaries", w: 600, h: 400 },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Gallery", url: `${SITE.url}/gallery` },
        ])}
      />

      {/* Cover */}
      <section className="bg-[#0A0606] pt-[140px] sm:pt-[160px] pb-12 sm:pb-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-[#F5F0E8]/15 pb-5 mb-12">
            <p className="lede italic text-[#F5F0E8]/55 text-sm">
              Fame by Sheeraz <span className="mx-2 text-[#F5F0E8]/25">·</span>
              <span className="numeral">Issue No. XXVI</span>
            </p>
            <p className="lede italic text-[#F5F0E8]/40 text-sm">A Photo Essay</p>
          </div>

          <p className="kicker kicker-gold mb-6">Photography</p>
          <h1
            className="font-display text-[#F5F0E8] mb-8 max-w-5xl"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: "0.92",
              letterSpacing: "-0.012em",
            }}
          >
            <span className="text-[#F14312]">Behind</span> the lens.
          </h1>
          <p
            className="font-serif italic text-[#F5F0E8]/85 max-w-[42ch]"
            style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: "1.3" }}
          >
            Twenty-five years of moments, in no particular order.
          </p>
        </div>
      </section>

      {/* Masonry */}
      <section className="bg-[#0A0606] pb-24 sm:pb-32">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
            {PHOTOS.map((p, i) => (
              <figure
                key={p.src}
                className="mb-4 sm:mb-6 break-inside-avoid overflow-hidden"
              >
                <div
                  className="relative bg-[#14100D]"
                  style={{ aspectRatio: `${p.w}/${p.h}` }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    unoptimized
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="mt-2 lede italic text-[#F5F0E8]/40 text-xs">
                  Plate {String(i + 1).padStart(2, "0")} &middot; {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
