import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import ProofSection from "@/components/ProofSection";
import ThreeProblems from "@/components/ThreeProblems";
import HowWeSolve from "@/components/HowWeSolve";
import HowItWorks from "@/components/HowItWorks";
import NinetyDays from "@/components/NinetyDays";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export default function RootPage() {
  return (
    <main>
      <AnalyticsTracker />
      <Hero />
      <WhoItsFor />
      <ProofSection />
      <ThreeProblems />
      <HowWeSolve />
      <HowItWorks />
      <NinetyDays />
<Footer />
    </main>
  );
}
