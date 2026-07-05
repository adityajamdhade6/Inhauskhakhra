"use client";

import { useEffect } from "react";
import { useGsap } from "@/lib/gsap";

/**
 * Keeps <body>'s background in sync with whichever full-bleed section is
 * currently in view, so iOS rubber-band overscroll and the area behind a
 * fixed header never flash the wrong colour between flavour worlds.
 */
export function ScrollBackground() {
  useEffect(() => {
    const { ScrollTrigger } = useGsap();
    const sections = document.querySelectorAll<HTMLElement>("[data-bg-color]");

    const triggers = Array.from(sections).map((section) => {
      const color = section.dataset.bgColor!;
      return ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => document.body.style.setProperty("--scroll-bg", color),
        onEnterBack: () => document.body.style.setProperty("--scroll-bg", color),
      });
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return null;
}
