import type { Flavor } from "@/lib/flavors";

export function ProductPack({
  flavor,
  width = 220,
  rotate = -6,
  className = "",
}: {
  flavor: Flavor;
  width?: number;
  rotate?: number;
  className?: string;
}) {
  const height = (width * flavor.imageHeight) / flavor.imageWidth;

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flavor.image}
        alt={`Inhaus Khakhra ${flavor.name} pack`}
        width={flavor.imageWidth}
        height={flavor.imageHeight}
        draggable={false}
        className="block h-full w-full origin-center select-none"
        style={{
          transform: `rotate(${rotate}deg)`,
          filter: "drop-shadow(10px 14px 18px rgba(25,17,8,0.35))",
        }}
      />
    </div>
  );
}
