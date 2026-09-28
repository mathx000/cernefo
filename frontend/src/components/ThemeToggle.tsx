import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem('cerne-theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(stored ? stored === 'dark' : prefers)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('cerne-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="inline-flex items-center gap-2 rounded-sm border border-tinta/20 px-3.5 py-2 text-xs text-tinta/70 transition-colors hover:border-tinta hover:text-tinta dark:border-pergaminho/20 dark:text-pergaminho/70 dark:hover:border-pergaminho dark:hover:text-pergaminho"
      aria-label="Alternar tema claro/escuro"
    >
      {dark ? 'Modo claro' : 'Modo escuro'}
    </button>
  )
}
