import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-dvh bg-cream">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-8 md:px-0">
        <Link href="/" className="font-display text-lg tracking-wide text-ink">
          INHAUS KHAKHRA
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-wide text-ink/70 uppercase hover:text-ink"
        >
          ← Back to site
        </Link>
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-24 md:px-0">
        <h1 className="font-display text-[13vw] leading-[0.9] tracking-tight text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-xs font-bold tracking-[0.2em] text-ink-soft uppercase">
          Last updated: {updated}
        </p>

        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </article>
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl tracking-wide text-ink md:text-3xl">{heading}</h2>
      <div className="mt-3 flex flex-col gap-3 text-base leading-relaxed font-medium text-ink-soft">
        {children}
      </div>
    </section>
  );
}
