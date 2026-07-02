import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const features = [
  {
    n: "01",
    title: "BAKED. NOT FRIED.",
    body: "Stone-baked till it snaps — not soaked in oil till it sags.",
  },
  {
    n: "02",
    title: "100% ROUND. ZERO SHORTCUTS.",
    body: "Every coin khakhra pressed thin and even for a crunch that carries through.",
  },
  {
    n: "03",
    title: "5 FLAVOURS. ONE OBSESSION.",
    body: "From Jeera-humble to Schezwan-loud, made for repeat offenders.",
  },
  {
    n: "04",
    title: "NO PALM OIL. NO NONSENSE.",
    body: "Ingredients you can actually pronounce, in a language you already speak.",
  },
];

export function WhyKhakhra() {
  return (
    <section id="why" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>Why Coin Khakhra</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 max-w-4xl text-[11vw] leading-[0.86] tracking-tight text-ink md:text-[5.5vw]">
            MORE CRUNCH.
            <br />
            LESS BORING.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 border-t-2 border-ink/80 pt-10 md:grid-cols-2 md:gap-y-16">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={0.05 * i}>
              <div className="flex gap-6">
                <span className="font-display text-2xl text-ink/30 md:text-3xl">{f.n}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-ink md:text-3xl">{f.title}</h3>
                  <p className="mt-3 max-w-sm text-base font-medium text-ink-soft md:text-lg">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
