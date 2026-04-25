import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-36"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-14 sm:mb-20">
          <div className="lg:col-span-4">
            <p className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-4">
              The Profile
            </p>
            <p className="numeral text-[#0A0606]/40 italic text-sm">
              Chapter VII · Sheeraz
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2
              className="font-display text-[#0A0606]"
              style={{
                fontSize: "clamp(40px, 5.6vw, 88px)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              The man who can make
              <br />
              just about <span className="text-[#F14312]">anyone</span> famous.
            </h2>
          </div>
        </div>

        {/* Body — magazine spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
          {/* Photograph */}
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-sheeraz.jpg"
                alt="Sheeraz Hasan"
                fill
                className="object-cover grayscale"
                style={{ objectPosition: "58% 26%" }}
                sizes="(max-width: 1024px) 100vw, 42vw"
                unoptimized
              />
            </div>
            <figcaption className="mt-4 lede italic text-[#0A0606]/55 text-sm">
              Sheeraz Hasan — photographed for Fame by Sheeraz, Issue No. XXVI.
            </figcaption>
          </figure>

          {/* Long-form bio */}
          <div className="lg:col-span-7 space-y-6 text-[#0A0606]/85">
            <p
              className="lede drop-cap text-[#0A0606]"
              style={{ fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: "1.6" }}
            >
              Sheeraz Hasan is a global fame strategist and media operator who
              builds visibility at scale. He is referred to as the &ldquo;#1
              FAME and AI Strategist in the world,&rdquo; working at the
              intersection of celebrity, technology, capital and narrative
              control. He brings a combination of 25 years of hands-on
              experience and the latest artificial intelligence tools to amplify
              celebrities, influencers, founders and companies. When public
              figures, brands or institutions require rapid global attention, he
              is the person engaged to design and execute it.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
              He has worked with figures such as{" "}
              <em className="font-serif italic">Kim Kardashian</em>, Logan Paul,{" "}
              <em className="font-serif italic">Zendaya</em>, Jennifer Lopez,
              Miley Cyrus, Paris Hilton, Justin Bieber,{" "}
              <em className="font-serif italic">Priyanka Chopra</em>, Jake Paul,
              Lindsay Lohan, Lele Pons and the Nelk Boys at the beginning of
              their careers — polishing their public presence and building them
              from the ground up. He was featured on ABC&apos;s 20/20 as Kim
              Kardashian&apos;s media strategist; his work has appeared across
              Netflix, Hulu, BBC, HBO, YouTube Originals and other international
              networks.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
              He is also the founder of{" "}
              <em className="font-serif italic">Hollywood.TV</em>, one of the
              largest celebrity content providers globally and a major
              breaking-news network supplying real-time coverage to TMZ, People,
              Daily Mail, CNN, Fox News, Reuters and other major media. Through
              this infrastructure, his media systems reach billions of viewers
              worldwide.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
              In 2025 he unveiled{" "}
              <em className="font-serif italic">Hollywood.AI</em> and{" "}
              <em className="font-serif italic">Bollywood.AI</em>, productizing
              his playbook into a tech-driven platform that drew acquisition
              attention from Google, Meta and DeepSeek across SuperAI 2025 and
              GITEX Global 2025.
            </p>

            <div className="pt-4 mt-2 border-t border-[#0A0606]/15">
              <p className="lede italic text-[#0A0606]/55 text-sm">
                — Adapted from the official biography. First published in{" "}
                <em>Fame by Sheeraz</em>, Issue No. XXVI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
