import Header from "@/components/Header";
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
