import { flavors } from "@/lib/flavors";
import { shopUrlForAll } from "@/lib/shopify";
import { Nav } from "./Nav";
import { Button } from "./ui/Button";
import { BackgroundGraphic } from "./graphics/BackgroundGraphic";
import { ProductPack } from "./graphics/ProductPack";
import { FloatingDisc } from "./graphics/FloatingDisc";
import { Reveal } from "./motion/Reveal";

const rotations = [-10, -4, 2, 8, 14];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-masala pt-28 pb-10 md:pt-36"
    >
      <BackgroundGraphic variant="sunburst" className="text-masala-dark opacity-40" />

      <Nav />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between gap-10 px-5 md:px-10">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cream/80 uppercase">
            Premium Coin Khakhra
          </p>
          <h1 className="font-display text-cream text-[16vw] leading-[0.85] tracking-tight md:text-[9vw] lg:text-[7.5vw]">
            CRUNCH
            <br />
            DIFFERENT.
          </h1>
          <div className="mt-6 flex flex-col items-start gap-6 md:mt-8 md:flex-row md:items-center md:gap-10">
            <p className="max-w-sm text-base font-medium text-cream/90 md:text-lg">
              Five bold flavours of small, round, baked-not-fried khakhra. Made for the crunch-obsessed.
            </p>
            <Button href={shopUrlForAll()} variant="cream">
              Shop The Pack
            </Button>
          </div>
        </Reveal>

        <div className="relative flex items-end justify-center pt-6 pb-4 md:justify-between md:pb-8">
          <div className="flex md:hidden">
            <ProductPack flavor={flavors[0]} width={180} rotate={-6} />
          </div>
          {flavors.map((flavor, i) => (
            <div
              key={flavor.id}
              className="hidden md:flex"
              style={{ marginLeft: i === 0 ? 0 : -22 }}
            >
              <ProductPack flavor={flavor} width={i === 2 ? 168 : 132} rotate={rotations[i]} />
            </div>
          ))}
        </div>
      </div>

      <FloatingDisc size={40} rotate={-12} className="top-[26%] left-[6%] hidden md:block" delay={0.2} />
      <FloatingDisc size={30} variant="bite" rotate={20} className="top-[20%] right-[8%] hidden md:block" slow delay={0.6} />
      <FloatingDisc size={26} rotate={8} className="bottom-[30%] left-[3%] hidden md:block" delay={1} />
    </section>
  );
}
