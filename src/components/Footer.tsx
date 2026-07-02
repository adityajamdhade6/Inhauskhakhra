import Link from "next/link";
import { flavors } from "@/lib/flavors";

const nav = [
  { href: "#flavours", label: "Flavours" },
  { href: "#why", label: "Why Khakhra" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#reviews", label: "Reviews" },
];

const social = ["Instagram", "TikTok", "X"];

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-cream md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <h2 className="font-display text-[13vw] leading-[0.85] tracking-tight md:text-[6vw]">
          INHAUS
          <br />
          KHAKHRA
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-cream/20 pt-10 md:grid-cols-4">
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.3em] text-cream/50 uppercase">Explore</p>
            <ul className="mt-4 space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-medium hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.3em] text-cream/50 uppercase">Flavours</p>
            <ul className="mt-4 space-y-2">
              {flavors.map((f) => (
                <li key={f.id}>
                  <Link href={`#${f.id}`} className="text-sm font-medium hover:opacity-70">
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.3em] text-cream/50 uppercase">Follow</p>
            <ul className="mt-4 space-y-2">
              {social.map((s) => (
                <li key={s}>
                  <Link href="#" className="text-sm font-medium hover:opacity-70">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold tracking-[0.3em] text-cream/50 uppercase">Get In Touch</p>
            <p className="mt-4 text-sm font-medium break-words">hello@inhauskhakhra.com</p>
          </div>
        </div>

        <div className="mt-14 max-w-2xl border-t border-cream/20 pt-6 text-xs font-medium text-cream/50">
          <p>
            <span className="font-bold text-cream/70">Allergen Information:</span>{" "}
            Contains Wheat. Manufactured in a facility that also processes
            soybean products, peanuts, tree nuts, milk products and gluten
            containing products.
          </p>
          <p className="mt-3">
            <span className="font-bold text-cream/70">Storage:</span> After
            opening, transfer to an airtight container and store in a cool,
            dry place.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-cream/20 pt-6 text-xs font-medium text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Inhaus Khakhra. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-cream/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream/80">
              Terms of Service
            </Link>
            <Link href="/shipping-returns" className="hover:text-cream/80">
              Shipping &amp; Returns
            </Link>
          </div>
          <p>Baked in small batches. Eaten in smaller windows of time.</p>
        </div>
      </div>
    </footer>
  );
}
