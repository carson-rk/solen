import HeroSection from "@/features/explore/components/HeroSection";
import ExploreOptionsSection from "@/features/explore/components/ExploreOptionsSection";
import TrustSection from "@/features/explore/components/TrustSection";
import ExplainSection from "@/features/explore/components/ExplainSection";
import ActionSection from "@/features/explore/components/ActionSection";

export default function ExplorePage() {
  return (
    <main>
      <HeroSection />
      <ExplainSection />
      <ExploreOptionsSection />
      <TrustSection />
      <ActionSection />
    </main>
  );
}
