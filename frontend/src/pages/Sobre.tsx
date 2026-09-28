import React from 'react'
import { Section, SectionHeading, Eyebrow } from '../components/UI'

const milestones = [
  { year: '2008', text: 'Início da atividade familiar em cantaria e obras de reabilitação no centro histórico de Lisboa.' },
  { year: '2014', text: 'Primeira promoção imobiliária própria: reabilitação de um edifício de habitação no Príncipe Real.' },
  { year: '2019', text: 'Criação da CERNE FO como estrutura de investimento e gestão de património para a família e terceiros.' },
  { year: '2026', text: 'Carteira sob gestão ultrapassa os €240M, distribuída por 62 projetos concluídos.' },
]

export default function Sobre() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:px-10">
        <Eyebrow>Sobre a Cerne FO</Eyebrow>
        <h1 className="font-display mt-4 max-w-[16ch] text-4xl font-medium leading-tight md:text-[58px]">
          Uma casa, não uma startup.
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-tinta/60 dark:text-pergaminho/60">
          A CERNE FO nasceu de um negócio de família dedicado à pedra e à construção, transformado ao
          longo de três gerações numa estrutura de investimento imobiliário e gestão patrimonial.
        </p>
      </div>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-6 text-tinta/70 dark:text-pergaminho/70">
            <p>
              Continuamos a tratar cada edifício como um ativo de longo prazo — e cada cliente como parte
              de uma relação que atravessa décadas. Atuamos onde a paciência e o rigor técnico se cruzam:
              aquisição, promoção e requalificação de imóveis, consultoria a investidores privados e
              institucionais, e gestão contínua de carteiras patrimoniais mistas.
            </p>
            <p>
              O nome "Cerne" remete à parte mais densa e resistente do tronco de uma árvore — a que sustenta
              a estrutura e resiste ao tempo. É essa a ambição: ser o cerne de um património familiar,
              não uma camada de gestão passageira.
            </p>
          </div>
          <blockquote className="border-l-2 border-latao pl-6">
            <p className="font-display text-2xl italic leading-snug text-tinta dark:text-pergaminho">
              "Não vendemos metros quadrados. Estruturamos património para atravessar gerações."
            </p>
            <cite className="mt-6 block text-sm not-italic text-tinta/50 dark:text-pergaminho/50">
              — Princípio fundador, Cerne FO
            </cite>
          </blockquote>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Percurso" title="Dezoito anos de decisões de longo prazo." />
        <div className="grid grid-cols-1 gap-px border border-tinta/10 bg-tinta/10 dark:border-pergaminho/10 dark:bg-pergaminho/10 md:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.year} className="bg-pergaminho p-8 dark:bg-[#14100C]">
              <span className="font-display block text-2xl text-pedra">{m.year}</span>
              <p className="mt-4 text-sm text-tinta/60 dark:text-pergaminho/60">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Governo" title="Estrutura simples, decisão concentrada." lede="A família mantém a titularidade e a decisão final sobre toda a carteira, apoiada por uma pequena equipa de consultoria técnica e financeira dedicada." />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-medium">Núcleo familiar</h3>
            <p className="mt-3 text-sm text-tinta/60 dark:text-pergaminho/60">Define objetivos patrimoniais, aprova operações e representa a continuidade entre gerações.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Consultoria técnica</h3>
            <p className="mt-3 text-sm text-tinta/60 dark:text-pergaminho/60">Due diligence, análise de mercado e acompanhamento de obra em cada projeto.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Gestão corrente</h3>
            <p className="mt-3 text-sm text-tinta/60 dark:text-pergaminho/60">Administração de arrendamentos, reporte financeiro e manutenção dos ativos.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
