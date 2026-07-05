"use client";

import { useEffect, useRef } from "react";
import { flavors } from "@/lib/flavors";
import { shopUrlForAll } from "@/lib/shopify";
import { Nav } from "./Nav";
import { Button } from "./ui/Button";
import { ProductPack } from "./graphics/ProductPack";
import { Doodle } from "./graphics/Doodle";
import { useGsap } from "@/lib/gsap";

const rotations = [-10, -4, 2, 8, 14];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const packsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = useGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.5 })
        .from(
          "[data-hero-line]",
          { opacity: 0, y: 60, duration: 0.8, stagger: 0.08 },
          "-=0.25"
        )
        .from(
          "[data-hero-sub]",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.45"
        )
        .from(
          "[data-hero-pack]",
          {
            opacity: 0,
            y: 40,
            rotate: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "back.out(1.6)",
          },
          "-=0.4"
        );

      // Cursor-reactive parallax on the pack row (physics-inspired lag).
      const packs = packsRef.current;
      if (packs && window.matchMedia("(pointer: fine)").matches) {
        const items = gsap.utils.toArray<HTMLElement>("[data-hero-pack]");
        const quickX = items.map((el) =>
          gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" })
        );
        const quickY = items.map((el) =>
          gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" })
        );
        const onMove = (e: MouseEvent) => {
          const rect = packs.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          items.forEach((_, i) => {
            const depth = (i + 1) * 4;
            quickX[i](relX * depth);
            quickY[i](relY * depth * 0.6);
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      data-bg-color="var(--color-masala)"
      className="bg-masala relative flex min-h-dvh flex-col overflow-hidden pt-28 pb-10 md:pt-36"
    >
      <div
        className="animate-drift pointer-events-none absolute -top-[20%] -right-[10%] h-[70vw] w-[70vw] rounded-full opacity-40"
        style={{ background: "var(--color-masala-dark)" }}
        aria-hidden="true"
      />
      <div
        className="animate-drift pointer-events-none absolute -bottom-[25%] -left-[15%] h-[55vw] w-[55vw] rounded-full opacity-30"
        style={{ background: "var(--color-masala-light)", animationDelay: "3s" }}
        aria-hidden="true"
      />

      <Nav />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between gap-10 px-5 md:px-10">
        <div className="max-w-4xl">
          <p
            data-hero-eyebrow
            className="text-ink/70 mb-4 text-sm font-bold tracking-[0.3em] uppercase"
          >
            Premium Coin Khakhra
          </p>
          <h1 className="font-display text-ink text-[17vw] leading-[0.86] tracking-tight md:text-[9vw] lg:text-[7.5vw]">
            <span data-hero-line className="block overflow-hidden">
              THIN. CRISPY.
            </span>
            <span data-hero-line className="block overflow-hidden">
              ROUND. LOUD.
            </span>
          </h1>
          <div
            data-hero-sub
            className="mt-6 flex flex-col items-start gap-6 md:mt-8 md:flex-row md:items-center md:gap-10"
          >
            <p className="text-ink/80 max-w-sm text-base font-medium md:text-lg">
              A snack that skips the guilt trip. Five bold flavours, baked
              not fried, built for the crunch-obsessed.
            </p>
            <Button href={shopUrlForAll()} variant="ink">
              Shop Now
            </Button>
          </div>
        </div>

        <div
          ref={packsRef}
          className="relative flex items-end justify-center pt-6 pb-4 md:justify-between md:pb-8"
        >
          <div data-hero-pack className="flex md:hidden">
            <ProductPack flavor={flavors[0]} width={180} rotate={-6} />
          </div>
          {flavors.map((flavor, i) => (
            <div
              key={flavor.id}
              data-hero-pack
              className="hidden md:flex"
              style={{ marginLeft: i === 0 ? 0 : -22 }}
            >
              <ProductPack flavor={flavor} width={i === 2 ? 168 : 132} rotate={rotations[i]} />
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 self-center pb-2 md:flex">
          <span className="text-ink/60 text-xs font-bold tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="border-ink/40 relative h-9 w-5 rounded-full border-2">
            <span className="bg-ink absolute top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full [animation:scrollDot_1.6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <div className="animate-float pointer-events-none absolute top-[16%] right-[18%] hidden md:block" aria-hidden="true">
        <Doodle name="sparkle" size={34} color="var(--color-ink)" />
      </div>
      <div className="animate-float-slow pointer-events-none absolute right-[4%] bottom-[10%] hidden md:block" aria-hidden="true">
        <Doodle name="squiggle" size={60} color="rgba(14,13,11,0.35)" />
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { transform: translate(-50%, 0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(-50%, 14px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
