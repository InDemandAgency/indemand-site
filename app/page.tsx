import Hero from "@/components/Hero";
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
<ThreeProblems />
      <HowWeSolve />
      <HowItWorks />
      <NinetyDays />
<Footer />
    </main>
  );
}
