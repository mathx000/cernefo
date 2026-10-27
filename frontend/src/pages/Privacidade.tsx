import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../hooks/useLang'

/** Marcador de posição: o texto legal tem de ser fornecido/validado pelo cliente. */
export default function Privacidade() {
  const { t } = useLang()
  return (
    <div className="mx-auto max-w-wrap px-6 pb-32 pt-48 md:px-10 md:pt-56">
      <h1 className="font-display text-4xl font-normal leading-tight md:text-6xl">{t.privacy.title}</h1>
      <span aria-hidden="true" className="mt-8 block h-px w-14 bg-latao" />
      <p className="mt-8 max-w-[52ch] leading-relaxed text-tinta-soft">
        {t.privacy.text}{' '}
        <a href={`mailto:${t.contacto.email}`} className="underline underline-offset-4">
          {t.contacto.email}
        </a>
        .
      </p>
      <Link to="/" className="mt-10 inline-block border-b border-verde pb-1 text-sm font-semibold text-verde">
        {t.privacy.back}
      </Link>
    </div>
  )
}
