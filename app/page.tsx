import Header from "@/components/Header";
import HeroSection from "@/components/main/HeroSection";
import FeaturesSection from "@/components/main/FeaturesSection";
import LatestPropertiesSection from "@/components/main/LatestPropertiesSection";
import TestimonialsSection from "@/components/main/TestimonialsSection";
import CTASection from "@/components/main/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="top-0 px-6 py-6 z-10">
        <Header />
      </div>
      <div className="gap-12 flex flex-col max-w-7xl justify-center mx-auto p-6 items-center">
        <HeroSection />
        <FeaturesSection />
        <LatestPropertiesSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <div className="drop-shadow z-10 px-6 py-6">
        <Footer />
      </div>
    </>
  );
}
