import type { Flavor } from "@/lib/flavors";
import { BackgroundGraphic } from "./graphics/BackgroundGraphic";
import { ProductPack } from "./graphics/ProductPack";
import { FloatingDisc } from "./graphics/FloatingDisc";
import { SpiceIcon } from "./graphics/SpiceIcon";
import { Button } from "./ui/Button";
import { SectionLabel } from "./ui/SectionLabel";
import { Reveal } from "./motion/Reveal";

export function FlavorSection({ flavor, reverse = false }: { flavor: Flavor; reverse?: boolean }) {
  const textColor = flavor.textOn === "cream" ? "text-cream" : "text-ink";
  const subColor = flavor.textOn === "cream" ? "text-cream/85" : "text-ink-soft";
  const iconColor = flavor.textOn === "cream" ? "var(--color-cream)" : "var(--color-ink)";
  const buttonVariant = flavor.textOn === "cream" ? "cream" : "ink";

  return (
    <section
      id={flavor.id}
      className={`relative flex min-h-[90vh] items-center overflow-hidden py-20 md:min-h-screen md:py-0`}
      style={{ background: flavor.color }}
    >
      <BackgroundGraphic
        variant={flavor.graphic}
        className={`${flavor.textOn === "cream" ? "text-cream" : "text-ink"} opacity-[0.12]`}
      />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-14 px-5 md:px-10 lg:flex-row lg:items-center lg:gap-10 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <Reveal>
            <SectionLabel tone={flavor.textOn}>{flavor.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display mt-5 text-[15vw] leading-[0.85] tracking-tight sm:text-[11vw] lg:text-[6vw] ${textColor}`}>
              {flavor.nameLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`mt-6 max-w-md text-lg font-medium md:text-xl ${subColor}`}>{flavor.tagline}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8">
              <Button href="#flavours" variant={buttonVariant}>
                Shop {flavor.name}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-6">
              {flavor.ingredients.map((ing) => (
                <div key={ing} className="flex items-center gap-2">
                  <SpiceIcon name={ing} size={26} color={iconColor} />
                  <span className={`text-xs font-bold tracking-wide uppercase ${subColor}`}>{ing}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-6">
          <FloatingDisc
            size={54}
            accent={flavor.colorDark}
            rotate={-16}
            className="top-[6%] left-[8%]"
            delay={0.1}
          />
          <FloatingDisc
            size={38}
            accent={flavor.colorDark}
            rotate={24}
            className="right-[6%] bottom-[10%]"
            slow
            delay={0.5}
          />
          <FloatingDisc
            size={30}
            accent={flavor.colorDark}
            rotate={4}
            className="top-[42%] right-[2%] hidden sm:block"
            delay={0.9}
          />
          <Reveal delay={0.15}>
            <ProductPack flavor={flavor} width={280} rotate={reverse ? 7 : -7} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
