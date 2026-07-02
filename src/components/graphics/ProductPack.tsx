import type { Flavor } from "@/lib/flavors";
import { KhakhraDisc } from "./KhakhraDisc";

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
  const textColor = flavor.textOn === "cream" ? "text-cream" : "text-ink";

  return (
    <div
      className={`relative aspect-[100/158] shrink-0 ${className}`}
      style={{
        width,
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(9px 11px 0px rgba(25,17,8,0.16))",
      }}
    >
      {/* pouch body */}
      <div
        className="absolute inset-0 overflow-hidden rounded-t-[46%_28%] rounded-b-[10%] border-[3px] border-ink"
        style={{ background: flavor.color }}
      >
        {/* flat fold shading panel, no gradient */}
        <div
          className="absolute inset-y-0 right-0 w-[24%]"
          style={{ background: flavor.colorDark }}
        />

        {/* top seal band */}
        <div
          className="absolute inset-x-0 top-0 h-[9%] border-b-[3px] border-ink"
          style={{ background: flavor.colorDark }}
        />

        {/* tear notch */}
        <div
          className="absolute top-[3%] right-[6%] h-3 w-3 rotate-45 border-[2px] border-ink bg-cream"
          aria-hidden="true"
        />

        {/* brand mark */}
        <div className={`absolute inset-x-0 top-[13%] flex flex-col items-center ${textColor}`}>
          <span className="text-[10px] font-bold tracking-[0.35em]">INHAUS</span>
          <span className="font-display text-[22px] leading-none tracking-wide">KHAKHRA</span>
        </div>

        {/* window */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2">
          <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[3px] border-ink bg-cream">
            <KhakhraDisc size={58} accent={flavor.colorDark} />
          </div>
        </div>

        {/* flavour name band */}
        <div
          className="absolute inset-x-0 bottom-0 border-t-[3px] border-ink px-2 py-2 text-center"
          style={{ background: "var(--color-ink)" }}
        >
          <span className="font-display block text-[15px] leading-[0.95] tracking-wide text-cream">
            {flavor.name}
          </span>
        </div>
      </div>
    </div>
  );
}
