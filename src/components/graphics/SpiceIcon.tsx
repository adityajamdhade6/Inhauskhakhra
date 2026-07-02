type Shape = "chilli" | "leaf" | "seed" | "salt" | "garlic" | "pod" | "root";

function shapeFor(name: string): Shape {
  const n = name.toLowerCase();
  if (n.includes("chilli") || n.includes("pepper") || n.includes("paprika")) return "chilli";
  if (n.includes("leaf") || n.includes("mint") || n.includes("turmeric") || n.includes("parsley")) return "leaf";
  if (n.includes("seed") || n.includes("cumin") || n.includes("ajwain")) return "seed";
  if (n.includes("salt")) return "salt";
  if (n.includes("garlic")) return "garlic";
  if (n.includes("tamarind") || n.includes("amchur")) return "pod";
  return "root";
}

const paths: Record<Shape, React.JSX.Element> = {
  chilli: (
    <path d="M20 8c6 0 10 6 8 14-2 9-10 18-16 18-5 0-8-4-8-9 0-10 8-23 16-23Z" />
  ),
  leaf: <path d="M6 30C6 14 18 4 34 4c0 16-12 26-28 26Z" />,
  seed: (
    <>
      <ellipse cx="12" cy="20" rx="5" ry="3" transform="rotate(-20 12 20)" />
      <ellipse cx="22" cy="14" rx="5" ry="3" transform="rotate(10 22 14)" />
      <ellipse cx="26" cy="26" rx="5" ry="3" transform="rotate(-35 26 26)" />
    </>
  ),
  salt: (
    <>
      <rect x="6" y="6" width="10" height="10" transform="rotate(20 11 11)" />
      <rect x="18" y="18" width="8" height="8" transform="rotate(-15 22 22)" />
      <rect x="20" y="4" width="6" height="6" transform="rotate(35 23 7)" />
    </>
  ),
  garlic: (
    <path d="M20 4c6 4 8 10 8 16 0 8-4 14-8 16-4-2-8-8-8-16 0-6 2-12 8-16Zm0 0v4M14 10c2-2 4-3 6-3M26 10c-2-2-4-3-6-3" />
  ),
  pod: <path d="M4 20c0-10 8-16 18-16-2 10-4 14-4 20s2 10 4 12C12 36 4 30 4 20Z" />,
  root: (
    <path d="M8 6c8 0 16 4 18 12 2 8-4 16-12 16-2-6-2-10 0-14-6 0-10-4-10-10 0-2 2-4 4-4Z" />
  ),
};

export function SpiceIcon({
  name,
  size = 32,
  color = "var(--color-ink)",
  className = "",
}: {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}) {
  const shape = shapeFor(name);
  return (
    <svg
      viewBox="0 0 32 40"
      width={size}
      height={(size * 40) / 32}
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        {paths[shape]}
      </g>
    </svg>
  );
}
