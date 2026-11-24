import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../hooks/useLang'

const LOGIN_ENDPOINT = (import.meta.env.VITE_LOGIN_ENDPOINT as string | undefined) ?? '/api/auth/login'
const RESET_ENDPOINT = (import.meta.env.VITE_PASSWORD_RESET_ENDPOINT as string | undefined) ?? '/api/auth/password/reset'
const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

export default function Login() {
  const { lang } = useLang()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'login' | 'reset'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState('')

  const copy = lang === 'en'
    ? {
        title: 'Manager Area',
        email: 'Email',
        password: 'Password',
        login: 'Sign in',
        signingIn: 'Signing in…',
        forgot: 'Forgot your password?',
        resetTitle: 'Reset password',
        resetText: 'Enter your email to receive a reset link.',
        reset: 'Send reset link',
        sending: 'Sending…',
        resetSent: 'If the account exists, a reset link will be sent.',
        backToLogin: 'Back to login',
        invalidEmail: 'Enter a valid email address.',
        invalidPassword: 'Enter your password.',
        failed: 'Email or password is incorrect.',
        unavailable: 'Login is temporarily unavailable.',
        back: 'Back to home',
      }
    : {
        title: 'Área do Gestor',
        email: 'Email',
        password: 'Senha',
        login: 'Entrar',
        signingIn: 'A entrar…',
        forgot: 'Esqueci minha senha',
        resetTitle: 'Recuperar senha',
        resetText: 'Introduza o seu email para receber o link de recuperação.',
        reset: 'Enviar link',
        sending: 'A enviar…',
        resetSent: 'Se a conta existir, receberá um link de recuperação.',
        backToLogin: 'Voltar ao login',
        invalidEmail: 'Introduza um email válido.',
        invalidPassword: 'Introduza a sua senha.',
        failed: 'Email ou senha incorretos.',
        unavailable: 'O login está temporariamente indisponível.',
        back: 'Voltar ao início',
      }

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!emailOk(email)) {
      setError(copy.invalidEmail)
      return
    }
    if (!password) {
      setError(copy.invalidPassword)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email.trim(), password }),
      })

      if (!response.ok) {
        setError(response.status === 401 ? copy.failed : copy.unavailable)
        setStatus('idle')
        return
      }

      const data = await response.json().catch(() => ({})) as { redirectTo?: string }
      setPassword('')
      navigate(data.redirectTo || '/')
    } catch {
      setStatus('idle')
      setError(copy.unavailable)
    }
  }

  async function submitReset(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!emailOk(email)) {
      setError(copy.invalidEmail)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(RESET_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('sent')
    } catch {
      setStatus('idle')
      setError(copy.unavailable)
    }
  }

  return (
    <div className="mx-auto max-w-wrap px-6 pb-32 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-[440px]">
        <h1 className="font-display text-4xl font-normal leading-tight md:text-5xl">
          {mode === 'login' ? copy.title : copy.resetTitle}
        </h1>
        <span aria-hidden="true" className="mt-8 block h-px w-14 bg-latao" />

        {mode === 'reset' ? (
          status === 'sent' ? (
            <div role="status" className="mt-8">
              <p className="leading-relaxed text-tinta-soft">{copy.resetSent}</p>
              <button
                type="button"
                onClick={() => { setMode('login'); setStatus('idle') }}
                className="mt-8 border-b border-verde pb-1 text-sm font-semibold text-verde"
              >
                {copy.backToLogin}
              </button>
            </div>
          ) : (
            <form onSubmit={submitReset} noValidate className="mt-8 space-y-7">
              <p className="text-tinta-soft">{copy.resetText}</p>
              <div>
                <label htmlFor="reset-email" className="mb-1 block text-[12px] font-semibold uppercase tracking-widest2 text-pedra-deep">
                  {copy.email}
                </label>
                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="field"
                />
              </div>
              {error && <p role="alert" className="text-sm text-erro">{error}</p>}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-verde px-5 py-4 text-sm font-semibold text-pergaminho disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'sending' ? copy.sending : copy.reset}
              </button>
              <button
                type="button"
                onClick={() => { setMode('login'); setError('') }}
                className="block text-sm text-tinta-soft underline underline-offset-4"
              >
                {copy.backToLogin}
              </button>
            </form>
          )
        ) : (
          <form onSubmit={submitLogin} noValidate className="mt-8 space-y-7">
            <div>
              <label htmlFor="login-email" className="mb-1 block text-[12px] font-semibold uppercase tracking-widest2 text-pedra-deep">
                {copy.email}
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="mb-1 block text-[12px] font-semibold uppercase tracking-widest2 text-pedra-deep">
                {copy.password}
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="field pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? (lang === 'en' ? 'Hide password' : 'Ocultar senha') : (lang === 'en' ? 'Show password' : 'Mostrar senha')}
                  className="absolute inset-y-0 right-0 px-2 text-xs font-semibold text-pedra-deep"
                >
                  {showPassword ? (lang === 'en' ? 'Hide' : 'Ocultar') : (lang === 'en' ? 'Show' : 'Mostrar')}
                </button>
              </div>
            </div>
            {error && <p role="alert" className="text-sm text-erro">{error}</p>}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-verde px-5 py-4 text-sm font-semibold text-pergaminho disabled:cursor-wait disabled:opacity-60"
            >
              {status === 'sending' ? copy.signingIn : copy.login}
            </button>
            <button
              type="button"
              onClick={() => { setMode('reset'); setError(''); setStatus('idle') }}
              className="block text-sm text-tinta-soft underline underline-offset-4"
            >
              {copy.forgot}
            </button>
          </form>
        )}

        <Link to="/" className="mt-10 inline-block border-b border-verde pb-1 text-sm font-semibold text-verde">
          {copy.back}
        </Link>
      </div>
    </div>
  )
}
