import React from 'react'
import { useReveal } from '../hooks/useReveal'

type Tone = 'pergaminho' | 'alt' | 'verde'

const tones: Record<Tone, string> = {
  pergaminho: 'bg-pergaminho text-tinta',
  alt: 'bg-pergaminho-alt text-tinta',
  verde: 'on-verde bg-verde text-pergaminho',
}

/** Secção de página: margens largas, uma ideia por ecrã, fade único à entrada. */
export function Section({
  id,
  tone = 'pergaminho',
  className = '',
  labelledBy,
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  labelledBy?: string
  children: React.ReactNode
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} ${className}`}>
      <div ref={ref} className="reveal mx-auto max-w-wrap px-6 py-28 md:px-10 md:py-44">
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <p id={id} className="eyebrow">
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: React.ReactNode
  lede?: React.ReactNode
}) {
  return (
    <div className="mb-16 grid gap-6 md:mb-20 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div>
        <h2 className="font-display text-3xl font-medium leading-tight md:text-[42px]">{title}</h2>
        {lede && <p className="mt-4 max-w-[52ch] text-tinta-soft">{lede}</p>}
      </div>
    </div>
  )
}

/** Botão de ação. `tone="verde"` sobre pergaminho; `tone="pergaminho"` sobre verde. Sem latão. */
export function Button({
  tone = 'verde',
  className = '',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'verde' | 'pergaminho' }) {
  const styles =
    tone === 'verde'
      ? 'border-verde bg-verde text-pergaminho hover:bg-verde-deep'
      : 'border-pergaminho/60 text-pergaminho hover:bg-pergaminho hover:text-verde'
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center rounded-sm border px-8 py-3.5 font-body text-[13px] font-semibold tracking-[0.08em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${styles} ${className}`}
    />
  )
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
