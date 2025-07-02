import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import FeaturesGrid from "@/components/features-grid";
import StatsSection from "@/components/stats-section";
import SavingsCalculator from "@/components/savings-calculator";
import LeadCapture from "@/components/lead-capture";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturesGrid />
      <StatsSection />
      <SavingsCalculator />
      <LeadCapture />
      <TeamSection />
      <Footer />
    </div>
  );
}
