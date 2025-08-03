import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MembersSection from "@/components/MembersSection";
import CelebrationGallery from "@/components/CelebrationGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <CelebrationGallery />
      <Footer />
    </div>
  );
};

export default Index;
