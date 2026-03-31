import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import AsSeenOn from "@/components/AsSeenOn";
import VideoCarousel from "@/components/VideoCarousel";
import CelebrityPortraits from "@/components/CelebrityPortraits";
import PhotoCarousel from "@/components/PhotoCarousel";
import AboutSection from "@/components/AboutSection";
import CaseStudies from "@/components/CaseStudies";
import InvestorsSection from "@/components/InvestorsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <ServicesSection />
      <AsSeenOn />
      <VideoCarousel />
      <CelebrityPortraits />
      <PhotoCarousel />
      <AboutSection />
      <CaseStudies />
      <InvestorsSection />
    </>
  );
}
