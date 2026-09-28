import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LockupCompact } from './Logo'

const links = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/abordagem', label: 'Abordagem' },
  { to: '/patrimonio', label: 'Património' },
  { to: '/equipa', label: 'Equipa' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-tinta/10 bg-pergaminho/85 backdrop-blur-md dark:border-pergaminho/10 dark:bg-[#14100C]/85">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="shrink-0" aria-label="CERNE FO — página inicial">
          <LockupCompact ground="dark" />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.slice(0, -1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-tinta dark:text-pergaminho' : 'text-tinta/60 hover:text-tinta dark:text-pergaminho/60 dark:hover:text-pergaminho'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className="rounded-sm bg-latao px-5 py-2.5 text-sm font-semibold text-verde-deep transition-colors hover:bg-latao-soft"
          >
            Marcar consulta
          </NavLink>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="text-tinta dark:text-pergaminho md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 border-t border-tinta/10 bg-pergaminho px-8 py-10 dark:border-pergaminho/10 dark:bg-[#14100C] md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-lg font-medium text-tinta dark:text-pergaminho">
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
