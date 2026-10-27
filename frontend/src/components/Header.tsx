import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LockupCompact } from './Logo'
import { useLang } from '../hooks/useLang'

function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLang()
  const base = 'px-1 py-1 text-[12px] font-semibold tracking-[0.14em] transition-colors'
  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center text-pergaminho ${className}`}>
      <button
        type="button"
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        className={`${base} ${lang === 'pt' ? 'text-pergaminho' : 'text-pergaminho/60 hover:text-pergaminho'}`}
      >
        PT
      </button>
      <span aria-hidden="true" className="mx-1 text-pergaminho/30">
        /
      </span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? 'text-pergaminho' : 'text-pergaminho/60 hover:text-pergaminho'}`}
      >
        EN
      </button>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls =
    'text-[13px] font-medium tracking-[0.06em] text-pergaminho/80 transition-colors hover:text-pergaminho'

  return (
    <header className="on-verde fixed inset-x-0 top-0 z-50 border-b border-pergaminho/10 bg-verde/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-wrap items-center justify-between px-6 md:px-10">
        <Link to="/" aria-label={t.nav.home} className="shrink-0" onClick={() => setOpen(false)}>
          <LockupCompact on="verde" />
        </Link>

        <nav aria-label={t.nav.label} className="hidden items-center gap-10 md:flex">
          {t.nav.links.map((l) => (
            <Link key={l.id} to={{ pathname: '/', hash: `#${l.id}` }} className={linkCls}>
              {l.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-pergaminho/20" />
          <LangSwitch />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="menu-movel"
          className="-mr-2 p-2 text-pergaminho md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" />
            ) : (
              <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.4" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="menu-movel"
          aria-label={t.nav.label}
          className="border-t border-pergaminho/10 bg-verde px-6 pb-10 pt-8 md:hidden"
        >
          <ul className="flex flex-col gap-6">
            {t.nav.links.map((l) => (
              <li key={l.id}>
                <Link
                  to={{ pathname: '/', hash: `#${l.id}` }}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-pergaminho"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch className="mt-8" />
        </nav>
      )}
    </header>
  )
}
