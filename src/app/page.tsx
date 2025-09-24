import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import ContactSection from "./components/sections/ContactSection";
import PricingSection from "./components/sections/PricingSection";

export default function Home() {
  return (
    <div className="min-h-svh">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
