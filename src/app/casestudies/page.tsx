import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies | famebysheeraz.com",
};

interface VideoCard {
  name: string;
  image: string;
}

const videoCards: VideoCard[] = [
  { name: "Kim Kardashian", image: "/images/cs-kim-k.jpg" },
  { name: "Logan Paul", image: "/images/cs-logan-paul.jpg" },
  { name: "Paris Hilton", image: "/images/cs-paris-hilton.jpg" },
  { name: "Zendaya", image: "/images/cs-zendaya.jpg" },
  { name: "Miley Cyrus", image: "/images/cs-miley.jpg" },
  { name: "Priyanka Chopra", image: "/images/cs-priyanka.jpg" },
  { name: "Selena Gomez", image: "/images/cs-selena.jpg" },
  { name: "Jennifer Lopez", image: "/images/cs-jennifer-lopez.jpg" },
  { name: "Ricky Martin", image: "/images/cs-ricky-martin.jpg" },
  { name: "Nelk Boys", image: "/images/cs-nelk-boys.jpg" },
  { name: "Adam Waheed", image: "/images/cs-adam-waheed.jpg" },
  { name: "Pamela Anderson", image: "/images/cs-pamela.jpg" },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#01060D] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 text-center px-4">
        <h1
          className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
        >
          CASE STUDIES
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-[#8794A7] text-lg max-w-2xl mx-auto">
          Watch how FAME by Sheeraz transforms celebrities and brands
        </p>
      </section>

      {/* Video Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videoCards.map((card) => (
            <div
              key={card.name}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-video bg-[#0a1020] rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-4 px-4">
                  <h3 className="font-[family-name:var(--font-barlow)] font-bold text-white text-lg uppercase">
                    {card.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
