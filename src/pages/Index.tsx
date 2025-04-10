
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import FeatureHighlights from "@/components/FeatureHighlights";
import KeyFeatures from "@/components/KeyFeatures";
import UseCases from "@/components/UseCases";
import Disclaimer from "@/components/Disclaimer";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductOverview />
      <KeyFeatures />
      <FeatureHighlights />
      <UseCases />
      <Disclaimer />
      <CallToAction />
    </main>
  );
};

export default Index;
