import { BackgroundGraphic } from "./graphics/BackgroundGraphic";
import { SpiceIcon } from "./graphics/SpiceIcon";
import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const base = ["Rice", "Urad Dal", "Rock Salt", "Real Spices"];
const spices = [
  "Red Chilli",
  "Cumin Seed",
  "Turmeric",
  "Garlic",
  "Tamarind",
  "Fenugreek Leaf",
  "Szechuan Pepper",
  "Mint",
];

export function Ingredients() {
  return (
    <section id="ingredients" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <BackgroundGraphic variant="rays" className="text-cream opacity-[0.06]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel tone="cream">What&apos;s Inside</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-[10vw] leading-[0.9] tracking-tight text-cream md:text-[4.2vw]">
            {base.join(". ") + "."}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-lg font-medium text-cream/80">
            No palm oil, no preservatives, no long words you need a dictionary
            for. Just the spice cabinet, baked in.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-8 border-t border-cream/20 pt-10">
          {spices.map((s, i) => (
            <Reveal key={s} delay={0.03 * i} className="flex items-center gap-3">
              <SpiceIcon name={s} size={30} color="var(--color-jeera)" />
              <span className="text-sm font-bold tracking-wide text-cream uppercase">{s}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
