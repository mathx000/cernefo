import React, { useState } from 'react'
import { Button } from './UI'
import { useLang } from '../hooks/useLang'

type Errors = Partial<Record<'name' | 'email' | 'message' | 'send', string>>
type Status = 'idle' | 'sending' | 'sent'

/**
 * Se VITE_FORM_ENDPOINT estiver definido (ex.: Formspree, função serverless), o pedido é enviado por POST (JSON).
 * Caso contrário, abre o cliente de email do utilizador com a mensagem preenchida (sem perder o pedido).
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

export default function ContactForm() {
  const { t } = useLang()
  const c = t.contacto
  const f = c.form
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    const v = (k: string) => String(d.get(k) ?? '').trim()

    // Campo-isco anti-spam: se preenchido, finge sucesso e não envia.
    if (v('website')) {
      setStatus('sent')
      return
    }

    const next: Errors = {}
    if (!v('name')) next.name = f.errors.name
    if (!emailOk(v('email'))) next.email = f.errors.email
    if (!v('message')) next.message = f.errors.message
    setErrors(next)
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus()
      return
    }

    const payload = {
      name: v('name'),
      email: v('email'),
      phone: v('phone'),
      subject: v('subject'),
      message: v('message'),
    }

    if (!ENDPOINT) {
      const body = [
        `${f.name}: ${payload.name}`,
        `${f.email}: ${payload.email}`,
        ...(payload.phone ? [`${f.phone}: ${payload.phone}`] : []),
        '',
        payload.message,
      ].join('\n')
      window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(
        payload.subject || 'CERNE FO',
      )}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('idle')
      setErrors({ send: f.errors.send })
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border-t border-latao pt-8">
        <p className="font-display text-2xl leading-snug md:text-3xl">{f.confirmation}</p>
      </div>
    )
  }

  const label = 'mb-1 block text-[12px] font-semibold uppercase tracking-widest2 text-pedra-deep'
  const err = 'mt-2 text-sm text-erro'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className={label}>{f.name}</label>
        <input
          id="name" name="name" type="text" autoComplete="name" required
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
          className="field"
        />
        {errors.name && <p id="name-err" className={err}>{errors.name}</p>}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>{f.email}</label>
          <input
            id="email" name="email" type="email" autoComplete="email" required
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined}
            className="field"
          />
          {errors.email && <p id="email-err" className={err}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>{f.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={label}>{f.subject}</label>
        <select
          id="subject" name="subject" defaultValue=""
          className="field field-select"
        >
          <option value="" disabled>{f.subjectPlaceholder}</option>
          {f.subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>{f.message}</label>
        <textarea
          id="message" name="message" rows={4} required
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined}
          className="field resize-y"
        />
        {errors.message && <p id="message-err" className={err}>{errors.message}</p>}
      </div>

      {/* Isco anti-spam, invisível para pessoas e leitores de ecrã. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <Button type="submit" tone="verde" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </Button>
        {errors.send && (
          <p role="alert" className={err}>{errors.send}</p>
        )}
      </div>
    </form>
  )
}
