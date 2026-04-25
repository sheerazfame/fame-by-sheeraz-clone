interface PressQuote {
  text: string;
  source: string;
  context?: string;
}

const QUOTES: PressQuote[] = [
  {
    text: "The man who can make just about anyone famous.",
    source: "ABC's 20/20",
    context: "Profile feature, on Sheeraz's role with Kim Kardashian",
  },
  {
    text: "Hollywood.AI is the most important AI launch of the year — bridging celebrity, capital and intelligence at a scale no one else has attempted.",
    source: "Free Press Journal",
    context: "Coverage of SuperAI 2025",
  },
  {
    text: "He turned Kim into Kim. Logan into Logan. Now he is doing the same with artificial intelligence.",
    source: "Entrepreneur Middle East",
    context: "Cover, March 2026",
  },
  {
    text: "Sheeraz Hasan does not chase publicity. He architects it.",
    source: "Daily Front Row",
    context: "On Hollywood.AI's Meta acquisition rumour",
  },
  {
    text: "If fame is a service economy, Sheeraz is its founding partner.",
    source: "Coinfomania",
    context: "GITEX Global 2025 coverage",
  },
];

export default function PressQuotes() {
  return (
    <section className="relative bg-[#FBF7F0] text-[#0A0606] py-24 sm:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-14">
          <div className="lg:col-span-4">
            <p
              className="font-sans text-[#F14312] text-[11px] font-semibold tracking-[0.32em] uppercase mb-5"
            >
              The Record
            </p>
            <p className="numeral text-[#0A0606]/40 text-sm italic">
              Chapter IV · The Press
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
              What the press
              <br />
              has <span className="text-[#F14312]">already written</span>.
            </h2>
          </div>
        </div>

        {/* Quote columns — newspaper layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 border-t border-[#0A0606]/15 pt-14">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className={`flex flex-col ${i === 0 || i === 4 ? "lg:col-span-2" : ""}`}
            >
              <span
                aria-hidden="true"
                className="font-serif italic text-[#F14312] leading-none mb-2"
                style={{ fontSize: "60px" }}
              >
                &ldquo;
              </span>

              <blockquote
                className="font-serif text-[#0A0606] -mt-6 mb-6"
                style={{
                  fontSize:
                    i === 0 || i === 4
                      ? "clamp(22px, 2.4vw, 36px)"
                      : "clamp(18px, 1.6vw, 24px)",
                  lineHeight: "1.22",
                  letterSpacing: "-0.005em",
                }}
              >
                {q.text}
              </blockquote>

              <figcaption className="mt-auto">
                <div className="w-12 h-px bg-[#0A0606]/30 mb-3" />
                <p className="font-sans text-[#0A0606] text-sm font-semibold tracking-wide">
                  {q.source}
                </p>
                {q.context && (
                  <p className="font-serif italic text-[#0A0606]/55 text-sm mt-0.5">
                    {q.context}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-20 font-serif italic text-[#0A0606]/55 text-center max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
          &ldquo;The only PR strategist I have ever recommended to my own
          inner circle.&rdquo;{" "}
          <span className="not-italic font-sans text-[#0A0606]/50 text-sm tracking-wide">
            — Off the record, a household name
          </span>
        </p>
      </div>
    </section>
  );
}
