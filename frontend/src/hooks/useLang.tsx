import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { pt, type Content } from '../content/pt'
import { en } from '../content/en'

export type Lang = 'pt' | 'en'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Content }
const LangContext = createContext<Ctx | null>(null)

function merge<T extends object>(base: T, over: Partial<T>): T {
  const out: any = Array.isArray(base) ? [...(base as any)] : { ...base }
  for (const k of Object.keys(over) as (keyof T)[]) {
    const v: any = over[k]
    out[k] = v && typeof v === 'object' && !Array.isArray(v) ? merge(out[k], v) : v
  }
  return out
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('cerne-lang')
      return s === 'en' ? 'en' : 'pt'
    } catch {
      return 'pt'
    }
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('cerne-lang', l)
    } catch {
      /* armazenamento indisponível: ignorar */
    }
  }

  const t = useMemo(() => (lang === 'en' ? merge(pt, en) : pt), [lang])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en-GB' : 'pt-PT'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const c = useContext(LangContext)
  if (!c) throw new Error('useLang fora de LangProvider')
  return c
}
