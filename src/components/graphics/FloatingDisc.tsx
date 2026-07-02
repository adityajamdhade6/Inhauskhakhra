import { KhakhraDisc } from "./KhakhraDisc";

export function FloatingDisc({
  size = 48,
  accent,
  rotate = 0,
  className = "",
  slow = false,
  delay = 0,
}: {
  size?: number;
  accent?: string;
  rotate?: number;
  className?: string;
  slow?: boolean;
  delay?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${slow ? "animate-float-slow" : "animate-float"} ${className}`}
      style={
        {
          "--float-rot": `${rotate}deg`,
          transform: `rotate(${rotate}deg)`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <KhakhraDisc size={size} accent={accent} />
    </div>
  );
}
