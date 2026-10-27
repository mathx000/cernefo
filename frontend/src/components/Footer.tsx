import React from 'react'
import { Link } from 'react-router-dom'
import { Seal } from './Logo'
import { useLang } from '../hooks/useLang'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const link = 'underline decoration-pergaminho/30 underline-offset-4 transition-colors hover:decoration-pergaminho'
  return (
    <footer className="on-verde relative overflow-hidden bg-verde text-pergaminho">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[18%] top-1/2 w-[min(100vw,760px)] -translate-y-1/2 opacity-[0.06]">
        <Seal size="100%" ring="#EAE2D2" ringInner="#C9A227" letter="#EAE2D2" rule="#C9A227" />
      </div>
      <div className="relative z-10 mx-auto max-w-wrap px-6 py-20 md:px-10 md:py-24">
        <p className="font-display text-2xl font-medium opsz-max md:text-3xl">
          {f.line1[0]}
          <span className="ml-4 font-body text-[11px] font-semibold uppercase tracking-widest2 text-pergaminho/70">
            {f.line1[1]}
          </span>
        </p>
        <span aria-hidden="true" className="mt-6 block h-px w-12 bg-latao" />
        <p className="mt-6 text-sm text-pergaminho/75">{f.line2}</p>

        <div className="mt-16 border-t border-pergaminho/15 pt-8 text-[13px] text-pergaminho/75">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>{f.copyright}</span>
            <span aria-hidden="true">·</span>
            <Link to="/privacidade" className={link}>
              {f.privacy}
            </Link>
            <span aria-hidden="true">·</span>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className={link}>
              {f.complaints}
            </a>
          </p>
          <p className="mt-4 text-xs text-pergaminho/60">{f.small}</p>
        </div>
      </div>
    </footer>
  )
}
