import Hero from "@/components/landing/Hero";
import ProductExplanation from "@/components/landing/ProductExplanation";
import RealTimePicks from "@/components/landing/RealTimePicks";
import ForCreators from "@/components/landing/ForCreators";
import PeopleCheering from "@/components/landing/PeopleCheering";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PeopleCheering />
      <ForCreators />
      <RealTimePicks />
      <CTASection />
    </main>
  );
}
