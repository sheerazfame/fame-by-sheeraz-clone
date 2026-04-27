import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CelebrityWall from "@/components/CelebrityWall";
import ProofSection from "@/components/ProofSection";
import FinalCta from "@/components/FinalCta";
import { JsonLd, faqSchema } from "@/components/JsonLd";

const HOME_FAQS = [
  {
    q: "Who is Sheeraz Hasan?",
    a: "Sheeraz Hasan is the world's #1 fame and AI strategist. Founder of Fame by Sheeraz, Hollywood.AI, Bollywood.AI and Hollywood.TV. He has generated over $3 billion in earned media for Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra, Paris Hilton and 250+ other public figures.",
  },
  {
    q: "What does Fame by Sheeraz do?",
    a: "Three things: Fame Strategy (the 25-year playbook applied to your brand), AI Execution (GPT, Claude and Gemini ship press, social and search wins every week), and Press & Amplification (Tier-1 placements through direct editor relationships).",
  },
  {
    q: "How fast can I expect results?",
    a: "First press hit usually within 14 days. Visible momentum by day 30. AI search dominance for your name typically achieved in 60-90 days.",
  },
  {
    q: "How do I start?",
    a: "Book a free 15-minute call with Sheeraz. No commitment, no decks. He listens, asks, and tells you whether we are the right team for what you want.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <HeroSection />
      <ServicesSection />
      <CelebrityWall />
      <ProofSection />
      <FinalCta />
    </>
  );
}
