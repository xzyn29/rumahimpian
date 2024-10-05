import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import LatestPropertiesSection from "@/components/LatestPropertiesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <div className=" top-0 px-6 py-6 border-b">
      <Header/>
    </div>
    <div className="flex flex-col max-w-7xl justify-center mx-auto p-6">
      <HeroSection/>
      <FeaturesSection/>
      <LatestPropertiesSection/>    
      <TestimonialsSection/>  
      <CTASection/>
    </div>

    <div className="drop-shadow z-10 px-6 py-6">
      <Footer/>
    </div>

    </>
  );
}
