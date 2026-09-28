import React from 'react'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest2 text-pedra">{children}</p>
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
        {lede && <p className="mt-4 max-w-[52ch] text-tinta/60 dark:text-pergaminho/60">{lede}</p>}
      </div>
    </div>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-medium">{value}</div>
      <div className="mt-1 text-sm text-tinta/60 dark:text-pergaminho/60">{label}</div>
    </div>
  )
}

export function Section({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={`border-t border-tinta/10 py-20 dark:border-pergaminho/10 md:py-28 ${className}`}>
      <div className="mx-auto max-w-wrap px-6 md:px-10">{children}</div>
    </section>
  )
}
