const SPECKLES = [
  [-24, -10],
  [18, -22],
  [30, 8],
  [-8, 26],
  [6, -4],
  [-30, 14],
  [22, 26],
];

export function KhakhraDisc({
  size = 96,
  accent = "var(--color-schezwan)",
  className = "",
  style,
}: {
  size?: number;
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={className}
      style={style}
      role="presentation"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="46" fill="var(--color-khakhra)" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="48" cy="48" r="36" fill="none" stroke="var(--color-khakhra-dark)" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="48" cy="48" r="25" fill="none" stroke="var(--color-khakhra-dark)" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="48" cy="48" r="14" fill="none" stroke="var(--color-khakhra-dark)" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="48" cy="48" r="4" fill="var(--color-khakhra-dark)" />
      {SPECKLES.map(([dx, dy], i) => (
        <circle key={i} cx={48 + dx} cy={48 + dy} r={i % 2 === 0 ? 2 : 1.4} fill={accent} />
      ))}
    </svg>
  );
}
