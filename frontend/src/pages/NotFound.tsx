import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../hooks/useLang'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="mx-auto max-w-wrap px-6 pb-32 pt-48 md:px-10 md:pt-56">
      <h1 className="max-w-[18ch] font-display text-4xl font-normal leading-tight md:text-6xl">{t.notFound.title}</h1>
      <span aria-hidden="true" className="mt-8 block h-px w-14 bg-latao" />
      <p className="mt-8 max-w-[44ch] text-tinta-soft">{t.notFound.text}</p>
      <Link to="/" className="mt-10 inline-block border-b border-verde pb-1 text-sm font-semibold text-verde">
        {t.notFound.back}
      </Link>
    </div>
  )
}
