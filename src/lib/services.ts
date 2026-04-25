export interface ServicePackage {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  oneLiner: string;
  hero: string;
  description: string;
  aiStack: string[];
  deliverables: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  icon: "strategy" | "execution" | "fame" | "save" | "scale" | "amplify" | "sales";
}

export const FAME_AI_PACKAGES: ServicePackage[] = [
  {
    slug: "fame-ai-strategies",
    name: "FAME AI Strategies",
    shortName: "AI Strategies",
    tagline: "Your 90-day Fame blueprint, engineered.",
    oneLiner:
      "We use GPT-5, Claude Opus 4 and Gemini 2 to compress 25 years of Hollywood playbooks into a personalized 90-day fame strategy in days, not months.",
    hero: "Strategy is what we sell. AI is how we deliver it 100x faster.",
    description:
      "Sheeraz Hasan personally leads a multi-model AI war-room to map your X-Factor, decode your audience, dissect your competitors, and ship a board-ready 90-day fame roadmap. Every recommendation is back-tested against $3B in earned media we've already generated for Kim K, Logan Paul, Zendaya and 250+ others.",
    aiStack: ["GPT-5", "Claude Opus 4", "Gemini 2", "Perplexity Pro"],
    deliverables: [
      "X-Factor positioning report (12-page AI-generated, human-refined)",
      "Audience + competitor narrative map",
      "90-day fame roadmap with weekly milestones",
      "Personalized prompt library (40+ prompts, ready to paste)",
      "1-hour strategy debrief with Sheeraz",
    ],
    outcomes: [
      "Total clarity on what makes you famous",
      "A roadmap you could hand to any team and ship",
      "First press hit usually within 14 days",
    ],
    faqs: [
      {
        q: "How is this different from a traditional PR strategy deck?",
        a: "Traditional decks take 6-8 weeks and a $50k retainer. We deliver in 7 days because GPT, Claude and Gemini do the synthesis work that used to take 5 strategists. Sheeraz reviews and signs off every page.",
      },
      {
        q: "Do I have to use AI to benefit?",
        a: "No. The output is a human-readable roadmap. The AI is how we make it cheaper and faster, but the playbook is 100% Sheeraz's.",
      },
    ],
    icon: "strategy",
  },
  {
    slug: "fame-ai-execution",
    name: "FAME AI Execution",
    shortName: "AI Execution",
    tagline: "We don't write decks. We ship campaigns weekly.",
    oneLiner:
      "Strategy is worthless without execution. Our AI agents generate, schedule and ship press releases, social posts, reels, podcasts and ads every single week.",
    hero: "Strategy gets you noticed. Execution makes you famous.",
    description:
      "A pod of 7 specialized Claude and GPT agents writes your weekly press releases, drafts your reels, programs your podcast hits, scripts your ad creative, and pushes everything live on a calendar Sheeraz personally signs off on. You get the output of a 12-person agency for the price of one strategist.",
    aiStack: ["Claude Sonnet 4.6 agents", "GPT-5", "Gemini 2 video", "ElevenLabs"],
    deliverables: [
      "4 press releases per month (with placement attempts)",
      "20+ social posts per week, on-brand",
      "8 reels / shorts per month",
      "1 podcast appearance booked per month",
      "Weekly Loom from Sheeraz reviewing the calendar",
    ],
    outcomes: [
      "Your output 10x's without your headcount changing",
      "Press hits become weekly, not quarterly",
      "Your content engine never sleeps",
    ],
    faqs: [
      {
        q: "Is this AI-slop content?",
        a: "No. Every asset is human-edited by our team and approved by Sheeraz. AI does the first 80%; humans do the 20% that matters.",
      },
    ],
    icon: "execution",
  },
  {
    slug: "fame-gpt-claude-gemini",
    name: "FAME + GPT + Claude + Gemini",
    shortName: "Multi-Model Stack",
    tagline: "Every major model, working for your fame.",
    oneLiner:
      "We don't pick a side in the AI wars. We deploy GPT for reasoning, Claude for writing, Gemini for search, Grok for culture and Perplexity for research — all behind one Sheeraz-curated workflow.",
    hero: "One stack. Every model. Maximum fame.",
    description:
      "The single biggest mistake AI users make is picking ONE model. Each leading LLM has a specific edge: GPT for sales reasoning, Claude for long-form copy, Gemini for Google-search distribution, Grok for X virality, Perplexity for citations. We orchestrate all five into one fame engine, with prompts, guardrails and routing logic battle-tested on $3B in earned media.",
    aiStack: ["OpenAI GPT-5", "Anthropic Claude Opus 4", "Google Gemini 2", "xAI Grok 3", "Perplexity Pro"],
    deliverables: [
      "Custom multi-model orchestration setup",
      "Sheeraz-curated prompt library per model",
      "Routing rules: which model does what, when",
      "API key consolidation + monthly cost report",
      "Team training (2 hours, recorded)",
    ],
    outcomes: [
      "You stop debating which AI to use — the system picks",
      "Every output uses the best model for that job",
      "Monthly AI costs typically drop 40-60%",
    ],
    faqs: [
      {
        q: "Do I need API keys for every model?",
        a: "Yes — we'll help you get them or use ours under our enterprise rates if you'd rather not manage 5 vendors.",
      },
    ],
    icon: "fame",
  },
  {
    slug: "save-costs-with-ai",
    name: "Save Costs With AI",
    shortName: "AI Cost-Saver",
    tagline: "Replace your $50k/mo PR firm with a $5k/mo AI stack.",
    oneLiner:
      "Most PR retainers are 90% headcount cost. We rebuild your media operations on AI agents and cut your spend 70-90% without dropping quality.",
    hero: "Cut PR cost 70%. Keep 100% of the output.",
    description:
      "We audit every dollar in your current marketing/PR/comms budget. Then we replace tasks an AI agent can do (drafts, briefs, monitoring, reporting, list-building, basic outreach) with a Sheeraz-curated stack. Humans stay where humans matter: relationships, judgment, creative leaps. The savings are usually staggering — and the output goes UP.",
    aiStack: ["GPT-5 (drafting)", "Claude (reviewing)", "Gemini Workspace (ops)", "Perplexity (research)"],
    deliverables: [
      "30-page AI Cost Audit (every line item, every tool)",
      "12-month cost-savings projection (signed-off by Sheeraz)",
      "Replacement stack deployed end-to-end",
      "SOPs and prompt library so your team can run it",
      "90-day check-in to measure actual savings",
    ],
    outcomes: [
      "Typical cost reduction: 70-90%",
      "Output capacity goes UP, not down",
      "ROI usually within 60 days",
    ],
    faqs: [
      {
        q: "Won't I have to fire people?",
        a: "Most clients redeploy people to higher-leverage work — relationship-building, creative, deal-making — instead of cutting them. The AI eats the boring tasks.",
      },
    ],
    icon: "save",
  },
  {
    slug: "scale-with-ai",
    name: "Scale With AI",
    shortName: "AI Scale",
    tagline: "Cut your media spend 70%. 10x your output.",
    oneLiner:
      "When you're already winning, scale becomes the bottleneck. We deploy AI agents that let one person do the work of ten — without the slop.",
    hero: "Same team. 10x the output. No slop.",
    description:
      "Built for founders, agencies and studios that have already proven product-market fit and now need to scale fame operations without scaling headcount. We deploy specialized AI agents for content, outreach, monitoring, reporting, and follow-up — each one under Sheeraz's signature quality bar.",
    aiStack: ["Claude agents (n8n)", "GPT-5", "Gemini batch", "Vercel AI SDK"],
    deliverables: [
      "Capacity audit (current bottlenecks identified)",
      "8 specialized AI agents deployed",
      "Quality-control gates (Sheeraz's standards baked in)",
      "Monthly scaling KPI dashboard",
      "Quarterly review with Sheeraz",
    ],
    outcomes: [
      "10x output capacity in 60 days",
      "Headcount stays flat",
      "Quality bar holds (we measure it)",
    ],
    faqs: [
      {
        q: "Is there a quality drop when scaling with AI?",
        a: "Only if you don't engineer the gates. Our quality-control prompts catch slop before it ships. We measure it weekly.",
      },
    ],
    icon: "scale",
  },
  {
    slug: "amplification-ai",
    name: "Amplification AI",
    shortName: "AI Amplification",
    tagline: "Turn one story into 1,000 placements.",
    oneLiner:
      "One press hit, atomized by AI into 200 social posts, 40 reels, 12 podcast scripts and 1,000 SEO pages — all on-brand, all ranking, all converting.",
    hero: "One story in. A thousand placements out.",
    description:
      "The fame loop: a single asset (a viral moment, a press hit, a podcast episode) becomes the seed for thousands of derivative placements engineered by AI to rank, convert and reinforce your narrative across every surface where your audience exists.",
    aiStack: ["GPT-5 (atomization)", "Claude (long-form)", "Gemini (Google ranking)", "ElevenLabs (audio)", "Sora 2 (video)"],
    deliverables: [
      "1 'hero' asset → 1,000+ derivatives per month",
      "Multi-platform distribution (LinkedIn, X, IG, TikTok, YouTube, blog)",
      "Programmatic SEO landing pages (50+ per month)",
      "AI-search visibility report (ChatGPT, Gemini, Perplexity)",
      "Reach + conversion dashboard",
    ],
    outcomes: [
      "100x reach per asset",
      "Brand omnipresence within 90 days",
      "AI search results dominated for your name",
    ],
    faqs: [
      {
        q: "Won't this look spammy?",
        a: "Not when each piece is genuinely tailored to its platform. AI doesn't copy-paste — it adapts. Every output gets a human glance before publishing.",
      },
    ],
    icon: "amplify",
  },
  {
    slug: "ai-sales",
    name: "AI Sales",
    shortName: "AI Sales",
    tagline: "Inbound leads on autopilot. Closed deals on demand.",
    oneLiner:
      "Fame generates leads. AI closes them. Our AI BDR works your inbox 24/7, qualifies inbound, books calls and prepares the deal-room — so you only show up for the close.",
    hero: "We don't generate leads. We close deals.",
    description:
      "Built for entrepreneurs and agencies who already attract attention but lose deals in the follow-up gap. Our Claude + GPT sales agents handle first-touch reply, qualification, calendar booking, deal-room prep, and post-call follow-up — at the quality bar Sheeraz personally sets for his own clients.",
    aiStack: ["Claude (sales reasoning)", "GPT-5 (objection handling)", "Apollo.io", "Calendly", "HubSpot"],
    deliverables: [
      "AI BDR deployed to your inbox",
      "Lead-scoring rubric (custom to your offer)",
      "Automated nurture: Day 0, 2, 5, 9, 14",
      "AI-prepared deal-room for every booked call",
      "Closed-won analytics dashboard",
    ],
    outcomes: [
      "Lead → call booked time drops to under 60 minutes",
      "Show-up rates above 80%",
      "Close rates increase by 30-60%",
    ],
    faqs: [
      {
        q: "Will my prospects know they're talking to AI?",
        a: "We disclose at the right moment. Most prospects don't care once they see the response speed and quality. Some prefer it.",
      },
    ],
    icon: "sales",
  },
];

export interface PricingTier {
  slug: string;
  name: string;
  positioning: string;
  for: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    positioning: "Fame, kickstarted.",
    for: "Founders, creators and brands ready to start engineering attention.",
    features: [
      "1 FAME AI package of your choice",
      "AI Audit (12-page report)",
      "Personalized prompt library",
      "30-day commitment",
      "Email + WhatsApp support",
    ],
    cta: "Apply for Starter",
  },
  {
    slug: "growth",
    name: "Growth",
    positioning: "Fame, on autopilot.",
    for: "Companies and public figures already getting traction who need scale.",
    features: [
      "3 FAME AI packages bundled",
      "Weekly Sheeraz Loom reviews",
      "Multi-model orchestration deployed",
      "Programmatic SEO (50+ pages/mo)",
      "AI BDR for inbound sales",
      "90-day commitment",
    ],
    cta: "Apply for Growth",
    highlight: true,
  },
  {
    slug: "mogul",
    name: "Mogul",
    positioning: "Fame, weaponized.",
    for: "Public figures, founders and brands operating at $50M+ scale who want category dominance.",
    features: [
      "All 7 FAME AI packages",
      "Direct line to Sheeraz (monthly 1:1)",
      "Custom AI war-room",
      "Hollywood.AI / Bollywood.AI integration",
      "Press concierge (24/7 placement desk)",
      "Annual commitment",
    ],
    cta: "Apply for Mogul",
  },
];
