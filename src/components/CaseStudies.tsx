import Image from "next/image";

interface CaseStudy {
  name: string;
  link: string;
  image: string | null;
}

const caseStudies: CaseStudy[] = [
  { name: "KIM K", link: "#", image: "/images/cs-kim-k.jpg" },
  { name: "LOGAN PAUL", link: "#", image: "/images/cs-logan-paul.jpg" },
  { name: "ZENDAYA", link: "#", image: "/images/cs-zendaya.jpg" },
  { name: "PARIS HILTON", link: "#", image: "/images/cs-paris-hilton.jpg" },
  { name: "CZ (BINANCE)", link: "#", image: null },
  { name: "DUBAI EYE 103.8", link: "#", image: null },
  { name: "SELENA GOMEZ", link: "#", image: "/images/cs-selena.jpg" },
  { name: "MILEY CYRUS", link: "#", image: "/images/cs-miley.jpg" },
  {
    name: "KIM X DUBAI",
    link: "https://www.youtube.com/watch?v=MsmvKU3xqpA",
    image: "/images/cs-kim-k.jpg",
  },
  { name: "PRIYANKA CHOPRA", link: "#", image: "/images/cs-priyanka.jpg" },
  { name: "RICKY MARTIN", link: "#", image: "/images/cs-ricky-martin.jpg" },
  { name: "JENNIFER LOPEZ", link: "#", image: "/images/cs-jennifer-lopez.jpg" },
  { name: "ADAM WAHEED", link: "#", image: "/images/cs-adam-waheed.jpg" },
  { name: "NELK BOYS", link: "#", image: "/images/cs-nelk-boys.jpg" },
  { name: "PAMELA ANDERSON", link: "#", image: "/images/cs-pamela.jpg" },
  { name: "LELE PONS", link: "#", image: null },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-[#01060D] py-20 sm:py-28 relative"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(241,67,18,0.5), inset 0 -1px 0 rgba(241,67,18,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          className="font-[family-name:var(--font-barlow)] font-black italic text-[#F14312] text-center mb-12"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Watch the Case Studies
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {caseStudies.map((study, index) => {
            const isExternal = study.link !== "#";
            return (
              <div key={`${study.name}-${index}`} className="group cursor-pointer">
                <a
                  href={study.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {/* Card */}
                  <div className="relative aspect-[3/4] bg-[#050a14] overflow-hidden mb-3">
                    {study.image && (
                      <Image
                        src={study.image}
                        alt={study.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    )}
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#F14312] transition-colors duration-300">
                        <svg
                          className="w-5 h-5 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-[family-name:var(--font-barlow)] font-extrabold italic text-[#EEEEEE] text-base sm:text-lg text-center uppercase leading-tight">
                    {study.name}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
