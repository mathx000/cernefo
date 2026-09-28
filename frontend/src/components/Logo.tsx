import React from "react";

/**
 * CERNE FO brand marks.
 * Faithful to "Proposta de Identidade Gráfica" and "Logos & Social" PDFs:
 * - Wordmark: Fraunces, opsz 144, weight 500, brass rule beneath, "FAMILY OFFICE" caption in Manrope with wide tracking.
 * - Seal: two concentric rings (outer neutral, inner brass) with serif "C" centred and a short brass rule beneath it.
 * - Icon container: rounded-square "app icon" tile and a circular "avatar" tile, each in verde or pergaminho ground.
 */

type Ground = "light" | "dark";

const grounds = {
  light: {
    bg: "transparent",
    text: "text-tinta dark:text-[#EDE6D8]",
    caption: "text-pedra",
    rule: "bg-latao",
  },
  dark: {
    bg: "bg-verde",
    text: "text-pergaminho",
    caption: "text-pergaminho/70",
    rule: "bg-latao",
  },
};

/** The seal: two concentric rings + centred "C" + short rule. Colors follow `ring`/`letter`/`rule` props so it can sit on any ground. */
export function Seal({
  size = 60,
  ring = "currentColor",
  ringInner = "#C9A227",
  letter = "currentColor",
  rule = "#C9A227",
  className = "",
}: {
  size?: number;
  ring?: string;
  ringInner?: string;
  letter?: string;
  rule?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="26.5" stroke={ring} strokeWidth="1" />
      <circle cx="30" cy="30" r="21.5" stroke={ringInner} strokeWidth="1" />
      <text
        x="30"
        y="38.5"
        fontFamily="Fraunces, serif"
        fontWeight={500}
        fontSize="23"
        textAnchor="middle"
        fill={letter}
      >
        C
      </text>
      <line
        x1="19.5"
        y1="43.5"
        x2="40.5"
        y2="43.5"
        stroke={rule}
        strokeWidth="1.4"
      />
    </svg>
  );
}

/** Rounded-square "app icon" tile carrying the Seal — used for favicon, avatar, WhatsApp Business per the brand PDF. */
export function IconTile({
  size = 96,
  ground = "dark",
  shape = "square",
}: {
  size?: number;
  ground?: Ground;
  shape?: "square" | "circle";
}) {
  const isDark = ground === "dark";
  const bg = isDark ? "#1F3A2E" : "#EAE2D2";
  const ring = isDark ? "#EAE2D2" : "#1F3A2E";
  const letter = isDark ? "#EAE2D2" : "#1F3A2E";

  return (
    <div
      className={shape === "square" ? "rounded-[22%]" : "rounded-full"}
      style={{
        width: size,
        height: size,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      <Seal
        size={size * 0.62}
        ring={ring}
        ringInner="#C9A227"
        letter={letter}
        rule="#C9A227"
      />
    </div>
  );
}

/** Full stacked wordmark: CERNE FO / brass rule / FAMILY OFFICE — as in the primary logo PDF pages. */
export function Wordmark({
  ground = "light",
  align = "center",
  size = "lg",
}: {
  ground?: Ground;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  const g = grounds[ground];
  const titleSize = size === "lg" ? "text-5xl md:text-6xl" : "text-3xl";
  return (
    <div
      className={`${g.bg} inline-flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} px-2`}
    >
      <span
        className={`font-display font-medium opsz-max ${titleSize} tracking-tight ${g.text}`}
      >
        CERNE FO
      </span>
      <span className={`mt-4 mb-3 h-px w-14 ${g.rule}`} />
      <span
        className={`font-body text-xs font-semibold uppercase tracking-widest2 ${g.caption}`}
      >
        Escritório Familiar
      </span>
    </div>
  );
}

/** Compact lockup: icon tile beside the two-line wordmark — for headers, contract footers, business cards. */
export function LockupCompact({ ground = "dark" }: { ground?: Ground }) {
  const isDark = ground === "dark";
  return (
    <div className="inline-flex items-center gap-3">
      <IconTile size={40} ground={ground} shape="square" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-medium opsz-max text-lg ${isDark ? "text-pergaminho" : "text-tinta dark:text-pergaminho"}`}
        >
          CERNE FO
        </span>
        <span
          className={`mt-1 font-body text-[10px] font-semibold uppercase tracking-widest2 ${isDark ? "text-pergaminho/60" : "text-pedra"}`}
        >
          Escritório Familiar
        </span>
      </span>
    </div>
  );
}

export default { Seal, IconTile, Wordmark, LockupCompact };
