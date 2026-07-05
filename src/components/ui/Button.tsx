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
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold tracking-wide uppercase transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.06] hover:-rotate-1 active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
