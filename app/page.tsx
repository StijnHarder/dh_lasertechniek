import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ServicesBlock from "@/components/ServicesBlock";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesBlock />
      <About />
    </div>
  );
}
