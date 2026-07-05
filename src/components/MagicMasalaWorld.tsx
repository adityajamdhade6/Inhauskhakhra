"use client";

import { useEffect, useRef } from "react";
import { flavors } from "@/lib/flavors";
import { shopUrlFor } from "@/lib/shopify";
import { ProductPack } from "./graphics/ProductPack";
import { SectionLabel } from "./ui/SectionLabel";
import { Button } from "./ui/Button";
import { Doodle } from "./graphics/Doodle";
import { useGsap } from "@/lib/gsap";

const flavor = flavors.find((f) => f.id === "magic-masala")!;

const motifs = [
  { path: "M20 6c7 0 12 7 9 16-3 10-11 20-19 20-6 0-9-5-9-10 0-12 9-26 19-26Z", label: "Chilli" },
  { path: "M20 8a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0-6v4M8 20H4M36 20h-4M11 11l-3-3M29 11l3-3", label: "Tomato" },
  { path: "M20 4c6 4 8 10 8 16 0 8-4 14-8 16-4-2-8-8-8-16 0-6 2-12 8-16Z", label: "Garlic" },
];

export function MagicMasalaWorld() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-mm-reveal]", {
        opacity: 0,
        y: 48,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 65%",
        },
      });

      gsap.to("[data-mm-pack]", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-mm-motif]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -40 : 40,
          rotate: i % 2 === 0 ? 12 : -12,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8 + i * 0.2,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="magic-masala"
      ref={rootRef}
      data-bg-color={flavor.color}
      className="relative flex min-h-screen items-center overflow-hidden py-24"
      style={{ background: flavor.color }}
    >
      {motifs.map((m, i) => (
        <svg
          key={m.label}
          data-mm-motif
          viewBox="0 0 40 40"
          className="pointer-events-none absolute h-16 w-16 opacity-25 md:h-24 md:w-24"
          style={{
            top: `${18 + i * 26}%`,
            left: i % 2 === 0 ? "6%" : undefined,
            right: i % 2 === 1 ? "8%" : undefined,
          }}
          aria-hidden="true"
        >
          <path d={m.path} fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}

      <div className="animate-float pointer-events-none absolute top-[10%] right-[26%] hidden md:block" aria-hidden="true">
        <Doodle name="burst" size={40} color="var(--color-ink)" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-14 px-5 md:px-10 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex-1">
          <div data-mm-reveal>
            <SectionLabel tone="ink">Flavour No. 01 — Enter The World Of</SectionLabel>
          </div>
          <h2
            data-mm-reveal
            className="font-display text-ink mt-5 text-[16vw] leading-[0.85] tracking-tight sm:text-[11vw] lg:text-[6.5vw]"
          >
            MAGIC
            <br />
            MASALA
          </h2>
          <p data-mm-reveal className="text-ink/80 mt-6 max-w-md text-lg font-medium md:text-xl">
            The one everyone fights over at tea-time. Bold masala, tangy
            tomato, a hit of garlic — zero apology.
          </p>
          <div data-mm-reveal className="mt-8">
            <Button href={shopUrlFor("magic-masala")} variant="ink">
              Shop Magic Masala
            </Button>
          </div>
          <div data-mm-reveal className="mt-10 flex flex-wrap gap-6">
            {flavor.ingredients.map((ing) => (
              <div key={ing} className="group flex items-center gap-2">
                <span className="border-ink/30 group-hover:bg-ink/10 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-colors">
                  <span className="bg-ink h-2 w-2 rounded-full transition-transform group-hover:scale-150" />
                </span>
                <span className="text-ink/80 text-xs font-bold tracking-wide uppercase">
                  {ing}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-6">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[340px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
            style={{ background: "var(--color-masala-dark)" }}
            aria-hidden="true"
          />
          <div data-mm-pack className="relative">
            <ProductPack flavor={flavor} width={300} rotate={-6} />
          </div>
        </div>
      </div>
    </section>
  );
}
