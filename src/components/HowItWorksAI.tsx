interface Step {
  numeral: string;
  title: string;
  body: string;
  cadence: string;
}

const STEPS: Step[] = [
  {
    numeral: "I.",
    title: "The Audit",
    body: "Sheeraz personally reviews your name, your work and your timing. Twelve pages, written in three days. No payment, no commitment — just clarity on whether we are the right team for what you want.",
    cadence: "72 hours",
  },
  {
    numeral: "II.",
    title: "The Blueprint",
    body: "A 90-day fame roadmap, drafted by GPT, refined by Claude, distributed against Gemini's search graph, and pressure-tested by Sheeraz against $3 billion of earned media we have already shipped.",
    cadence: "Week 1",
  },
  {
    numeral: "III.",
    title: "The Work",
    body: "Press, social, podcasts, ads, programmatic SEO. Our pods ship every week — drafts written by AI, edited by humans, signed off by Sheeraz before anything goes live.",
    cadence: "Weekly cadence",
  },
  {
    numeral: "IV.",
    title: "The Compound",
    body: "One asset becomes a thousand placements. Your name owns Google, ChatGPT, Gemini and Perplexity. Fame compounds. Money — as it always does — follows.",
    cadence: "Day 90 onward",
  },
];

export default function HowItWorksAI() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#0A0606] py-24 sm:py-36 border-t border-[#F5F0E8]/8"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16 sm:mb-20">
          <div className="lg:col-span-4">
            <p className="kicker kicker-fire mb-5">The Method</p>
            <p className="section-mark">Chapter V · How We Work</p>
          </div>
          <div className="lg:col-span-8">
            <h2
              className="font-display text-[#F5F0E8]"
              style={{
                fontSize: "clamp(40px, 5.6vw, 88px)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              Four chapters from
              <br />
              <span className="text-[#F14312]">unknown</span> to{" "}
              <em className="font-serif italic font-normal">unmissable</em>.
            </h2>
            <p className="lede text-[#F5F0E8]/55 mt-6 max-w-[55ch] text-base sm:text-lg leading-relaxed">
              No retainers. No lock-ins. No decks gathering dust. We deliver
              the work, week by week, the way Sheeraz has done it for two
              decades — only faster.
            </p>
          </div>
        </div>

        {/* Editorial step list */}
        <div className="border-t border-[#F5F0E8]/12">
          {STEPS.map((step, i) => (
            <article
              key={step.numeral}
              className="grid grid-cols-12 gap-4 sm:gap-8 py-10 sm:py-14 border-b border-[#F5F0E8]/12"
            >
              <div className="col-span-2 sm:col-span-1 numeral text-[#C9A961] text-base sm:text-lg pt-2">
                {step.numeral}
              </div>

              <div className="col-span-10 sm:col-span-4">
                <h3
                  className="font-display text-[#F5F0E8] mb-2"
                  style={{
                    fontSize: "clamp(28px, 3.2vw, 44px)",
                    lineHeight: "1",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {step.title}
                </h3>
                <p className="lede italic text-[#F5F0E8]/50 text-sm">
                  {step.cadence}
                </p>
              </div>

              <p
                className="col-span-12 sm:col-span-7 lede text-[#F5F0E8]/75 leading-relaxed"
                style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: "1.55" }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
