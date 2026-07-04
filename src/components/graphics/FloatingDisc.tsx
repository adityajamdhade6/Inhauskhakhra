const IMAGES = {
  pair: { src: "/products/khakhra-pair.png", ratio: 340 / 435 },
  bite: { src: "/products/khakhra-bite.png", ratio: 297 / 385 },
};

export function FloatingDisc({
  size = 48,
  variant = "pair",
  rotate = 0,
  className = "",
  slow = false,
  delay = 0,
}: {
  size?: number;
  variant?: "pair" | "bite";
  rotate?: number;
  className?: string;
  slow?: boolean;
  delay?: number;
}) {
  const { src, ratio } = IMAGES[variant];

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={size}
        height={size / ratio}
        draggable={false}
        className={`select-none ${slow ? "animate-float-slow" : "animate-float"}`}
        style={
          {
            width: size,
            height: size / ratio,
            "--float-rot": `${rotate}deg`,
            transform: `rotate(${rotate}deg)`,
            animationDelay: `${delay}s`,
            filter: "drop-shadow(4px 6px 8px rgba(25,17,8,0.25))",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
