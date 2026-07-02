import { Reveal } from "./motion/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const rows: { label: string; per100: string; perServing: string; rda: string }[] = [
  { label: "Energy", per100: "479.1 kcal", perServing: "191.7 kcal", rda: "9.6" },
  { label: "Carbohydrates", per100: "67.4 g", perServing: "27.0 g", rda: "—" },
  { label: "Total Sugars", per100: "6.8 g", perServing: "2.7 g", rda: "—" },
  { label: "Added Sugars", per100: "0 g", perServing: "0 g", rda: "—" },
  { label: "Dietary Fibre", per100: "10.7 g", perServing: "4.3 g", rda: "—" },
  { label: "Protein", per100: "9.0 g", perServing: "3.6 g", rda: "—" },
  { label: "Total Fat", per100: "19.3 g", perServing: "7.7 g", rda: "11.5" },
  { label: "Saturated Fat", per100: "4.6 g", perServing: "1.8 g", rda: "8.4" },
  { label: "Trans Fat", per100: "0 g", perServing: "0 g", rda: "—" },
  { label: "Cholesterol", per100: "0 mg", perServing: "0 mg", rda: "—" },
  { label: "Sodium", per100: "800 mg", perServing: "320 mg", rda: "16.0" },
];

export function NutritionFacts() {
  return (
    <section id="nutrition" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel>Straight Up</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 max-w-3xl text-[10vw] leading-[0.88] tracking-tight text-ink md:text-[4.5vw]">
            NUTRITION FACTS.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-4 text-sm font-bold tracking-wide text-ink-soft uppercase">
            Approximate values
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="sr-only">
                Nutrition facts for Inhaus Khakhra, per 100g and per 40g serving
              </caption>
              <thead>
                <tr className="bg-ink text-cream">
                  <th scope="col" className="px-4 py-3 text-xs font-bold tracking-wide uppercase">
                    Nutrient
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold tracking-wide uppercase">
                    Per 100g
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold tracking-wide uppercase">
                    Per Serving (40g)
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold tracking-wide uppercase">
                    %RDA*
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 1 ? "bg-ink/[0.04]" : undefined}>
                    <th
                      scope="row"
                      className="px-4 py-3 text-sm font-bold whitespace-nowrap text-ink"
                    >
                      {r.label}
                    </th>
                    <td className="px-4 py-3 text-sm font-medium tabular-nums text-ink-soft">
                      {r.per100}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium tabular-nums text-ink-soft">
                      {r.perServing}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium tabular-nums text-ink-soft">
                      {r.rda}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 max-w-lg text-xs font-medium text-ink-soft/80">
            *% Recommended Dietary Allowance based on a 2000 kcal diet. Values
            are approximate and may vary slightly by batch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
