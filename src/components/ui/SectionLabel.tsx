export function SectionLabel({
  children,
  tone = "ink",
}: {
  children: string;
  tone?: "ink" | "cream";
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase ${
        tone === "cream" ? "text-cream/80" : "text-ink/70"
      }`}
    >
      <span
        className={`h-[2px] w-8 ${tone === "cream" ? "bg-cream/80" : "bg-ink/70"}`}
      />
      {children}
    </span>
  );
}
