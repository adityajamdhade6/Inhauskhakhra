import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { FlavorSection } from "@/components/FlavorSection";
import { MagicMasalaWorld } from "@/components/MagicMasalaWorld";
import { WhyKhakhra } from "@/components/WhyKhakhra";
import { Ingredients } from "@/components/Ingredients";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ScrollBackground } from "@/components/motion/ScrollBackground";
import { flavors } from "@/lib/flavors";

const restFlavors = flavors.filter((f) => f.id !== "magic-masala");

export default function Home() {
  return (
    <main>
      <ScrollBackground />
      <Hero />
      <BrandStatement />
      <div id="flavours">
        <MagicMasalaWorld />
        {restFlavors.map((flavor, i) => (
          <FlavorSection key={flavor.id} flavor={flavor} reverse={i % 2 === 0} />
        ))}
      </div>
      <WhyKhakhra />
      <Ingredients />
      <CTASection />
      <Footer />
    </main>
  );
}
