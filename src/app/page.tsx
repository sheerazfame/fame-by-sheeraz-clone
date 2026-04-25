import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import AiStackStrip from "@/components/AiStackStrip";
import ServicesSection from "@/components/ServicesSection";
import AsSeenOn from "@/components/AsSeenOn";
import OutcomesCounter from "@/components/OutcomesCounter";
import HowItWorksAI from "@/components/HowItWorksAI";
import PressQuotes from "@/components/PressQuotes";
import VideoCarousel from "@/components/VideoCarousel";
import CelebrityPortraits from "@/components/CelebrityPortraits";
import PhotoCarousel from "@/components/PhotoCarousel";
import AboutSection from "@/components/AboutSection";
import CaseStudies from "@/components/CaseStudies";
import PricingTeaser from "@/components/PricingTeaser";
import InvestorsSection from "@/components/InvestorsSection";
import { JsonLd, faqSchema } from "@/components/JsonLd";

const HOME_FAQS = [
  {
    q: "Who is Sheeraz Hasan?",
    a: "Sheeraz Hasan is the #1 FAME & AI Strategist in the world. Founder of Fame by Sheeraz, Hollywood.AI, Bollywood.AI and Hollywood.TV. He has generated over $3 billion in earned media for Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra, Paris Hilton, Justin Bieber, Miley Cyrus and 250+ other public figures.",
  },
  {
    q: "What is FAME AI?",
    a: "FAME AI is the productized layer that fuses Sheeraz Hasan's 25-year fame playbook with multi-model AI (GPT-5, Claude Opus 4, Gemini 2, Grok 3, Perplexity Pro). Seven packages: Strategies, Execution, the multi-model stack, Save Costs, Scale, Amplification, AI Sales.",
  },
  {
    q: "How does FAME AI cut PR costs by 70%?",
    a: "Most PR retainers are 90% headcount cost. We replace tasks an AI agent can do (drafts, briefs, monitoring, list-building, basic outreach) with a Sheeraz-curated stack. Humans stay where humans matter: relationships, creative, deal-making. Savings are typically 70-90%.",
  },
  {
    q: "Do you generate leads or close deals?",
    a: "Both. Fame generates leads. Our AI BDR closes them. The AI Sales package puts a 24/7 sales agent in your inbox — qualifying inbound, booking calls, prepping deal-rooms — at the quality bar Sheeraz personally sets.",
  },
  {
    q: "How fast can I expect results?",
    a: "First press hit usually within 14 days. Full 90-day blueprint delivers visible momentum by day 30. AI search dominance for your name typically achieved in 60-90 days.",
  },
  {
    q: "Where is Sheeraz based?",
    a: "Sheeraz operates between Dubai (UAE) and West Hollywood, California. Fame by Sheeraz serves clients globally — US WhatsApp +1 310 925 1667, UAE +971 56 786 8338.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <HeroSection />
      <QuoteSection />
      <AiStackStrip />
      <ServicesSection />
      <AsSeenOn />
      <OutcomesCounter />
      <HowItWorksAI />
      <VideoCarousel />
      <CelebrityPortraits />
      <PhotoCarousel />
      <PressQuotes />
      <AboutSection />
      <CaseStudies />
      <PricingTeaser />
      <InvestorsSection />
    </>
  );
}
