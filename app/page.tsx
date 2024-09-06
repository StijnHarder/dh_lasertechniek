import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProductsOverview from "@/components/ProductsOverview";

export default async function Home() {
  return (
    <div>
      Helo
      <HeroSection />
      <ProductsOverview />
      <About />
    </div>
  );
}
