import HeroSection from "@/components/explore/HeroSection";
import ExploreOptionsSection from "@/components/explore/ExploreOptionsSection";
import TrustSection from "@/components/explore/TrustSection";
import ExplainSection from "@/components/explore/ExplainSection";
import ActionSection from "@/components/explore/ActionSection";

export default function ExplorePage() {
  return (
    <main>
      <HeroSection/>
      <ExplainSection/>
      <ExploreOptionsSection/>
      <TrustSection/>
      <ActionSection/>
    </main>
  );
}