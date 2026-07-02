import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { FlavorSection } from "@/components/FlavorSection";
import { WhyKhakhra } from "@/components/WhyKhakhra";
import { Ingredients } from "@/components/Ingredients";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { flavors } from "@/lib/flavors";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <div id="flavours">
        {flavors.map((flavor, i) => (
          <FlavorSection key={flavor.id} flavor={flavor} reverse={i % 2 === 1} />
        ))}
      </div>
      <WhyKhakhra />
      <Ingredients />
      <CTASection />
      <Footer />
    </main>
  );
}
