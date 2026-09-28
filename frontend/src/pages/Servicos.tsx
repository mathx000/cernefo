import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Eyebrow } from '../components/UI'

const services = [
  {
    n: '01',
    title: 'Investimento imobiliário',
    text: 'Identificação e aquisição de ativos residenciais, comerciais e de solo com potencial de valorização estrutural, avaliados com critérios de risco próprios de um family office.',
    points: ['Análise de mercado e localização', 'Due diligence jurídica e técnica', 'Modelação financeira de retorno'],
  },
  {
    n: '02',
    title: 'Promoção',
    text: 'Desenvolvimento e reabilitação de edifícios, do licenciamento à entrega — com acompanhamento técnico direto em cada fase da obra.',
    points: ['Coordenação de projeto e licenciamento', 'Gestão de empreitada e fiscalização', 'Controlo de prazos e orçamento'],
  },
  {
    n: '03',
    title: 'Consultoria',
    text: 'Aconselhamento a famílias e instituições sobre estruturação de investimento imobiliário, devida diligência e análise de oportunidades de mercado.',
    points: ['Estruturação fiscal e societária', 'Avaliação de oportunidades de terceiros', 'Segunda opinião técnica independente'],
  },
  {
    n: '04',
    title: 'Gestão de património',
    text: 'Administração contínua de carteiras de ativos imobiliários e mistos, com reporte periódico e visão de sucessão patrimonial.',
    points: ['Gestão de arrendamento e ocupação', 'Reporte financeiro trimestral', 'Planeamento de sucessão geracional'],
  },
]

export default function Servicos() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:px-10">
        <Eyebrow>Áreas de atuação</Eyebrow>
        <h1 className="font-display mt-4 max-w-[20ch] text-4xl font-medium leading-tight md:text-[58px]">
          Quatro disciplinas, uma só lógica de longo prazo.
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-tinta/60 dark:text-pergaminho/60">
          Cada área funciona de forma independente, mas todas partilham o mesmo critério de decisão:
          valorização sustentada do ativo ao longo do tempo.
        </p>
      </div>

      {services.map((s, i) => (
        <Section key={s.n} className={i === 0 ? '' : ''}>
          <div className="grid gap-12 md:grid-cols-[0.5fr_1fr]">
            <div>
              <span className="font-display block text-lg text-latao">{s.n}</span>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight md:text-4xl">{s.title}</h2>
            </div>
            <div>
              <p className="max-w-[56ch] text-tinta/60 dark:text-pergaminho/60">{s.text}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {s.points.map((p) => (
                  <li key={p} className="border-t border-tinta/10 pt-3 text-sm text-tinta/70 dark:border-pergaminho/10 dark:text-pergaminho/70">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-verde !border-t-0 text-pergaminho dark:bg-verde-deep">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow><span className="text-latao-soft">Próximo passo</span></Eyebrow>
            <h2 className="font-display mt-4 max-w-[22ch] text-3xl font-medium leading-tight md:text-[42px]">
              Comece com uma reunião de diagnóstico.
            </h2>
          </div>
          <Link to="/contacto" className="shrink-0 rounded-sm bg-latao px-8 py-4 text-sm font-semibold text-verde-deep transition-colors hover:bg-latao-soft">
            Marcar consulta privada
          </Link>
        </div>
      </Section>
    </div>
  )
}
