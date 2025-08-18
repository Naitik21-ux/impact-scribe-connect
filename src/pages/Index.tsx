import { DonationHero } from "@/components/DonationHero";
import { ImpactSection } from "@/components/ImpactSection";
import { DonationForm } from "@/components/DonationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DonationHero />
      <ImpactSection />
      <DonationForm />
      <Footer />
    </div>
  );
};

export default Index;
