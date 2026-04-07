import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OWASPSection from "@/components/OWASPSection";
import PipelineSection from "@/components/PipelineSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden digital-grain" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <HeroSection />
        <OWASPSection />
        <PipelineSection />
        <ServicesSection />
        <BlogSection />
      </main>
    </div>
  );
};

export default Index;
