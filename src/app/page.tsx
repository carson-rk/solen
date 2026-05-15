import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import PainSection from "@/components/home/PainSection";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import ActionSection from "@/components/home/ActionSection";

export default function HomePage() {
    return (

        <main>
          <HeroSection/>
          <TrustSection/>
          <PainSection/>
          <AboutSection/>
          <ProcessSection/>
          <ActionSection/>
      </main>
    );
  }