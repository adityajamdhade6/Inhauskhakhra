import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "ink" | "cream" | "outline-ink" | "outline-cream";
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  ink: "bg-ink text-cream hover:bg-ink-soft",
  cream: "bg-cream text-ink hover:bg-white",
  "outline-ink":
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream",
  "outline-cream":
    "bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-ink",
};

export function Button({
  href = "#flavours",
  children,
  variant = "ink",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
