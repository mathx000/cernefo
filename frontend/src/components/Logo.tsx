import React from 'react'

/**
 * Marcas CERNE FO, conforme a "Proposta de Identidade Gráfica" e o ficheiro "Logos & Social":
 * - Selo: dois anéis concêntricos, C serifado ao centro e traço de latão sob a letra.
 * - Tile: ícone retangular de cantos arredondados (verde ou pergaminho).
 * - Lockup compacto: tile + CERNE FO + FAMILY OFFICE.
 */

export function Seal({
  size = 60,
  ring = 'currentColor',
  ringInner = '#C9A227',
  letter = 'currentColor',
  rule = '#C9A227',
  className = '',
}: {
  size?: number | string
  ring?: string
  ringInner?: string
  letter?: string
  rule?: string
  className?: string
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
        fontFamily="Fraunces, Georgia, serif"
        fontWeight={500}
        fontSize="23"
        textAnchor="middle"
        fill={letter}
      >
        C
      </text>
      <line x1="19.5" y1="43.5" x2="40.5" y2="43.5" stroke={rule} strokeWidth="1.4" />
    </svg>
  )
}

/** `ground` = cor do tile: "verde" (versão principal) ou "pergaminho" (versão inversa, sobre fundos verdes). */
export function IconTile({
  size = 96,
  ground = 'verde',
}: {
  size?: number
  ground?: 'verde' | 'pergaminho'
}) {
  const onVerde = ground === 'verde'
  const fg = onVerde ? '#EAE2D2' : '#1F3A2E'
  return (
    <div
      className="flex flex-none items-center justify-center rounded-[22%]"
      style={{ width: size, height: size, background: onVerde ? '#1F3A2E' : '#EAE2D2' }}
      aria-hidden="true"
    >
      <Seal size={size * 0.62} ring={fg} letter={fg} />
    </div>
  )
}

/** Lockup compacto. `on` = fundo onde é colocado. */
export function LockupCompact({ on = 'verde' }: { on?: 'verde' | 'pergaminho' }) {
  const onVerde = on === 'verde'
  return (
    <span className="inline-flex items-center gap-3.5">
      <IconTile size={40} ground={onVerde ? 'pergaminho' : 'verde'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[19px] font-medium opsz-max ${onVerde ? 'text-pergaminho' : 'text-tinta'}`}
        >
          CERNE FO
        </span>
        <span
          className={`mt-1.5 font-body text-[9px] font-semibold uppercase tracking-widest2 ${
            onVerde ? 'text-pergaminho/65' : 'text-pedra-deep'
          }`}
        >
          Family Office
        </span>
      </span>
    </span>
  )
}
