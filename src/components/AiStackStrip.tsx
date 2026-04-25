const MODELS = ["GPT-5", "Claude Opus 4", "Gemini 2", "Grok 3", "Perplexity Pro"];

export default function AiStackStrip() {
  return (
    <section
      aria-label="The AI stack used by Fame by Sheeraz"
      className="relative bg-[#0A0606] py-10 border-t border-b border-[#F5F0E8]/10"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-baseline gap-x-10 gap-y-3 justify-between">
          <p className="lede italic text-[#F5F0E8]/55 text-sm sm:text-base">
            The instruments. <span className="text-[#F5F0E8]/35">Played by Sheeraz.</span>
          </p>

          <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-2">
            {MODELS.map((m, i) => (
              <li
                key={m}
                className="flex items-baseline gap-2"
              >
                <span className="font-serif italic text-[#F5F0E8] text-base sm:text-lg">
                  {m}
                </span>
                {i < MODELS.length - 1 && (
                  <span className="text-[#C9A961]/40" aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
