"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";

const links = [
  { href: "#flavours", label: "Flavours" },
  { href: "#why", label: "Why Khakhra" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link href="#top" className="font-display text-xl tracking-wide text-cream md:text-2xl">
          INHAUS KHAKHRA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-bold tracking-wide text-cream uppercase transition-opacity hover:opacity-70"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#flavours" variant="cream">
            Shop Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-cream transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-6 bg-cream transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="mx-5 flex flex-col gap-5 rounded-3xl border-[3px] border-ink bg-cream px-6 py-8 text-ink shadow-[6px_6px_0_var(--color-ink)] md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Button href="#flavours" variant="ink" className="w-fit">
            Shop Now
          </Button>
        </div>
      )}
    </header>
  );
}
