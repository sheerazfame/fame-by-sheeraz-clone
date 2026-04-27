import Image from "next/image";

const STATS = [
  { value: "$3B+", label: "earned media" },
  { value: "25", label: "years" },
  { value: "250+", label: "stars launched" },
];

const LOGOS = [
  { name: "20/20 (ABC)", src: "/images/logo-abc.png" },
  { name: "Netflix", src: "/images/logo-netflix.png" },
  { name: "BBC", src: "/images/logo-bbc.png" },
  { name: "TMZ", src: "/images/logo-tmz.png" },
  { name: "Reuters", src: "/images/logo-reuters.png" },
  { name: "Fox News", src: "/images/logo-fox-news.png" },
  { name: "HBO Max", src: "/images/logo-hbomax.png" },
  { name: "Daily Mail", src: "/images/logo-dailymail.png" },
];

export default function ProofSection() {
  return (
    <section className="bg-[#FBF7F0] text-[#0A0606] py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-px bg-[#0A0606]/12 border-y border-[#0A0606]/15 mb-12">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#FBF7F0] py-8 sm:py-12 text-center">
              <p
                className="font-display text-[#F14312]"
                style={{
                  fontSize: "clamp(40px, 6vw, 88px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.012em",
                }}
              >
                {s.value}
              </p>
              <p className="font-serif italic text-[#0A0606]/55 text-sm sm:text-base mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* As seen on — single row */}
        <p className="text-center font-sans text-[10px] uppercase tracking-[0.32em] text-[#0A0606]/40 mb-7">
          As seen on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5">
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={56}
              className="h-6 sm:h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              style={{ filter: "brightness(0)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
