type DoodleName = "sparkle" | "squiggle" | "ring" | "burst";

export function Doodle({
  name = "sparkle",
  size = 32,
  color = "currentColor",
  className = "",
}: {
  name?: DoodleName;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      {name === "squiggle" && (
        <path
          d="M2 20c4-10 8 8 12-2s8 8 12-2"
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
        />
      )}
      {name === "ring" && (
        <circle
          cx={16}
          cy={16}
          r={11}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      )}
      {name === "burst" && (
        <g stroke={color} strokeWidth={3} strokeLinecap="round">
          <path d="M16 3v9M16 20v9M3 16h9M20 16h9M7 7l6.5 6.5M18.5 18.5L25 25M25 7l-6.5 6.5M13.5 18.5L7 25" />
        </g>
      )}
      {name === "sparkle" && (
        <>
          <path d="M16 2c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9Z" fill={color} />
          <circle cx={27} cy={6} r={2} fill={color} />
        </>
      )}
    </svg>
  );
}
