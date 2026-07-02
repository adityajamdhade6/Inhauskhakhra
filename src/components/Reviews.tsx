import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const reviews = [
  {
    quote: "Opened one pack to “try it” and the whole tin was gone by the cricket match.",
    name: "Riya M.",
    flavor: "Magic Masala",
  },
  {
    quote: "Tastes like actual golgappa pani. Didn’t think that was possible in a khakhra.",
    name: "Aakash D.",
    flavor: "Pani Puri",
  },
  {
    quote: "Finally a healthy snack that doesn’t taste like punishment. Jeera is my desk drawer staple now.",
    name: "Sana P.",
    flavor: "Jeera",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>What People Say</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 max-w-3xl text-[10vw] leading-[0.88] tracking-tight text-ink md:text-[4.5vw]">
            THEY CAME. THEY CRUNCHED.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y-2 divide-ink/15 border-t-2 border-ink/15">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.05 * i}>
              <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:gap-10">
                <p className="font-display max-w-2xl text-2xl leading-[1.05] tracking-wide text-ink md:text-3xl">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="shrink-0 text-left md:text-right">
                  <p className="text-sm font-bold tracking-wide text-ink uppercase">★★★★★</p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {r.name} &middot; {r.flavor}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
