import Image from "next/image";

const row1 = [
  { name: "20/20 (ABC)", src: "/images/logo-abc.png" },
  { name: "Netflix", src: "/images/logo-netflix.png" },
  { name: "Hulu", src: "/images/logo-hulu.png" },
  { name: "BBC", src: "/images/logo-bbc.png" },
  { name: "HBO Max", src: "/images/logo-hbomax.png" },
  { name: "STARZPLAY", src: "/images/logo-starzplay.png" },
  { name: "TMZ", src: "/images/logo-tmz.png" },
  { name: "Zee News", src: "/images/logo-zeenews.png" },
  { name: "YouTube Originals", src: "/images/logo-youtube-originals.png" },
];

const row2 = [
  { name: "Reuters", src: "/images/logo-reuters.png" },
  { name: "ITV", src: "/images/logo-itv.png" },
  { name: "Fox News", src: "/images/logo-fox-news.png" },
  { name: "Associated Press", src: "/images/logo-ap.png" },
  { name: "Daily Mail", src: "/images/logo-dailymail.png" },
  { name: "Channel 7", src: "/images/logo-channel7.png" },
  { name: "Binance Live", src: "/images/logo-binance.png" },
];

const row3 = [{ name: "Channel 4 Television", src: "/images/logo-channel4.png" }];

export default function AsSeenOn() {
  return (
    <section className="py-16 bg-[#01060D]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-[family-name:var(--font-barlow)] italic font-bold text-[#F14312] text-4xl mb-12">
          As seen on
        </h2>

        {/* Row 1 – 9 logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {row1.map((logo) => (
            <div key={logo.name} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={70}
                className="object-contain brightness-0 invert opacity-90"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        {/* Row 2 – 7 logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {row2.map((logo) => (
            <div key={logo.name} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={70}
                className="object-contain brightness-0 invert opacity-90"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        {/* Row 3 – Channel 4 centered */}
        <div className="flex justify-center">
          {row3.map((logo) => (
            <div key={logo.name} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={70}
                className="object-contain brightness-0 invert opacity-90"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
