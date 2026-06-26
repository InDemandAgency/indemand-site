import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import ProofSection from "@/components/ProofSection";
import WhatToExpect from "@/components/WhatToExpect";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export default function RootPage() {
  return (
    <main>
      <AnalyticsTracker />
      <TopNav />
      <Hero />
      <WhoItsFor />
      <ProofSection />
      <WhatToExpect />
      <Footer />
    </main>
  );
}
