import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Gallery | famebysheeraz.com",
};

const galleryImages = [
  { src: "/images/gallery/gallery-1.png", alt: "Gallery photo 1", width: 600, height: 600 },
  { src: "/images/gallery/gallery-2.jpg", alt: "Gallery photo 2", width: 600, height: 400 },
  { src: "/images/gallery/gallery-3.png", alt: "Gallery photo 3", width: 600, height: 400 },
  { src: "/images/gallery/gallery-4.png", alt: "Gallery photo 4", width: 600, height: 400 },
  { src: "/images/gallery/gallery-5.png", alt: "Gallery photo 5", width: 600, height: 400 },
  { src: "/images/gallery/gallery-6.png", alt: "Gallery photo 6", width: 600, height: 400 },
  { src: "/images/gallery/gallery-7.jpg", alt: "Gallery photo 7", width: 600, height: 400 },
  { src: "/images/gallery/gallery-8.png", alt: "Gallery photo 8", width: 600, height: 400 },
  { src: "/images/gallery/gallery-9.jpg", alt: "Gallery photo 9", width: 600, height: 400 },
  { src: "/images/gallery/gallery-10.jpg", alt: "Gallery photo 10", width: 600, height: 400 },
];

export default function GalleryPage() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative" style={{ aspectRatio: `${img.width}/${img.height}` }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
