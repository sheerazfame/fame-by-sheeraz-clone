import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column: photo */}
        <div className="relative min-h-[600px]">
          <Image
            src="/images/about-sheeraz.jpg"
            alt="Sheeraz Hasan"
            fill
            className="object-cover"
            style={{ objectPosition: "58% 26%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>

        {/* Right column: bio */}
        <div className="flex flex-col justify-center px-10 py-14 lg:px-16 lg:py-20">
          <h2
            className="font-[family-name:var(--font-barlow)] font-bold text-[#01060D] mb-8"
            style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
          >
            About Sheeraz Hasan
          </h2>

          <div className="font-[family-name:var(--font-inter)] text-[#01060D] text-base leading-relaxed space-y-5">
            <p>
              Sheeraz Hasan is a global fame strategist and media operator who
              builds visibility at scale. He is referred to as the &ldquo;#1 FAME
              and AI Strategist in the World,&rdquo; working at the intersection of
              celebrity, technology, capital, and narrative control. He brings a
              combination of 25 years of hands-on experience and the latest
              artificial intelligence tools to amplify celebrities, influencers,
              CEOs, and companies. When public figures, brands, or institutions
              require rapid global attention, he is engaged to design and execute
              it.
            </p>
            <p>
              He has worked with figures such as Kim Kardashian, Logan Paul,
              Zendaya, Jennifer Lopez, Miley Cyrus, Paris Hilton, Justin Bieber,
              Priyanka Chopra, Jake Paul, Lindsay Lohan, Lele Pons, and the Nelk
              Boys at the beginning of their careers, polishing their public
              presence and helping build them from the ground up through strategy,
              coaching, training, and media positioning. He was featured on
              ABC&apos;s 20/20 as Kim Kardashian&apos;s media strategist, and his
              work has appeared across major platforms including Netflix, Hulu,
              BBC, HBO, YouTube Originals, and other international television
              networks.
            </p>
            <p>
              He is also the founder of Hollywood.TV, one of the largest celebrity
              content providers globally and a major paparazzi and breaking-news
              network supplying real-time celebrity coverage to outlets including
              TMZ, People, Daily Mail, CNN, Fox News, Reuters, and other major
              media organizations. Through this infrastructure, his media systems
              reach billions of viewers worldwide.
            </p>
            <p>
              Sheeraz has built large-scale media and amplification systems with
              global distribution. He is the founder of Hollywood.ai and
              Bollywood.ai, initiatives focused on the next phase of
              entertainment, talent, and influence creation through artificial
              intelligence.
            </p>
            <p>
              He has been recognized by U.S. government agencies and
              international institutions for contributions across media,
              technology, and influence strategy. His work operates in a category
              where visibility and valuation are directly linked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
