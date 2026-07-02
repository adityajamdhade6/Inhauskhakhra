import { shopUrlForAll } from "@/lib/shopify";
import { BackgroundGraphic } from "./graphics/BackgroundGraphic";
import { FloatingDisc } from "./graphics/FloatingDisc";
import { Reveal } from "./motion/Reveal";
import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-schezwan py-28 text-center md:py-36">
      <BackgroundGraphic variant="sunburst" className="text-schezwan-light opacity-30" />

      <FloatingDisc size={44} accent="var(--color-cream)" rotate={-10} className="top-[15%] left-[8%] hidden md:block" />
      <FloatingDisc size={34} accent="var(--color-cream)" rotate={18} className="right-[10%] bottom-[18%] hidden md:block" slow />

      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="font-display text-[14vw] leading-[0.88] tracking-tight text-cream md:text-[7vw]">
            GET YOUR
            <br />
            CRUNCH ON.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-md text-lg font-medium text-cream/90">
            Five flavours. One tin. Zero regrets.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-8 flex justify-center">
            <Button href={shopUrlForAll()} variant="cream">
              Shop All Flavours
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
