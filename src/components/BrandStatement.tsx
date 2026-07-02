import { BackgroundGraphic } from "./graphics/BackgroundGraphic";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-36">
      <BackgroundGraphic variant="waves" className="text-ink opacity-[0.06]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>The Philosophy</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[13vw] leading-[0.86] tracking-tight text-ink md:text-[7vw]">
            BAKED.
            <br />
            NOT FRIED.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg font-medium text-ink-soft md:ml-auto md:text-right md:text-xl">
            Small. Round. Addictive. No oil slick, no guilt trip — just
            stone-baked coin khakhra that hits harder than it should.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
