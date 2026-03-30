import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AsSeenOn from "@/components/AsSeenOn";
import ServicesSection from "@/components/ServicesSection";
import SpecializedServices from "@/components/SpecializedServices";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AsSeenOn />
        <ServicesSection />
        <SpecializedServices />
        <CaseStudies />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
