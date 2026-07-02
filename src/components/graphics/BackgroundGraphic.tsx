type Variant = "sunburst" | "waves" | "rays" | "stripes" | "blob";

function Sunburst() {
  const lines = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const x2 = 50 + Math.cos(angle) * 70;
    const y2 = 50 + Math.sin(angle) * 70;
    return <line key={i} x1="50" y1="50" x2={x2} y2={y2} strokeWidth="0.6" />;
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <g stroke="currentColor" fill="none">
        {lines}
      </g>
    </svg>
  );
}

function Waves() {
  const rows = [12, 30, 48, 66, 84];
  return (
    <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="h-full w-full">
      <g stroke="currentColor" fill="none" strokeWidth="1">
        {rows.map((y) => (
          <path
            key={y}
            d={`M -10 ${y} Q 15 ${y - 10}, 40 ${y} T 90 ${y} T 140 ${y} T 190 ${y} T 240 ${y}`}
          />
        ))}
      </g>
    </svg>
  );
}

function Rays() {
  const circles = [8, 18, 28, 38, 48, 58, 68];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        {circles.map((r) => (
          <circle key={r} cx="80" cy="20" r={r} />
        ))}
      </g>
    </svg>
  );
}

function Stripes() {
  const stripes = Array.from({ length: 10 }, (_, i) => i * 24 - 60);
  return (
    <svg viewBox="0 0 200 120" preserveAspectRatio="none" className="h-full w-full">
      <g stroke="currentColor" fill="none" strokeWidth="6">
        {stripes.map((x) => (
          <path key={x} d={`M ${x} 130 Q ${x + 40} 60, ${x + 20} -10`} />
        ))}
      </g>
    </svg>
  );
}

function Blob() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <g fill="currentColor">
        <path d="M76 8C92 18 98 42 90 62C82 82 58 96 36 90C14 84 -2 60 4 38C10 16 32 2 52 2C58 2 66 4 76 8Z" />
      </g>
    </svg>
  );
}

const map: Record<Variant, () => React.JSX.Element> = {
  sunburst: Sunburst,
  waves: Waves,
  rays: Rays,
  stripes: Stripes,
  blob: Blob,
};

export function BackgroundGraphic({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  const Graphic = map[variant];
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Graphic />
    </div>
  );
}
