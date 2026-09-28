import React from "react";
import { Section, SectionHeading, Eyebrow } from "../components/UI";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Levantamento do património ou da oportunidade, objetivos da família e horizonte temporal do investimento.",
  },
  {
    n: "02",
    title: "Estruturação",
    text: "Desenho da operação — aquisição, promoção ou reorganização de carteira — com análise de risco e enquadramento fiscal.",
  },
  {
    n: "03",
    title: "Execução",
    text: "Acompanhamento direto de obra, arrendamento ou transação, com controlo de prazos e custos.",
  },
  {
    n: "04",
    title: "Gestão e transmissão",
    text: "Administração corrente do ativo e preparação da sucessão entre gerações da família.",
  },
];

const principles = [
  {
    title: "Discrição",
    text: "Trabalhamos com um número limitado de famílias e investidores, sem exposição pública desnecessária das operações.",
  },
  {
    title: "Rigor técnico",
    text: "Cada decisão de investimento é sustentada por diligência devida própria, nunca por intuição de mercado.",
  },
  {
    title: "Visão de longo prazo",
    text: "Medimos sucesso em décadas e gerações, não em ciclos de mercado ou resultados trimestrais.",
  },
];

export default function Abordagem() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:px-10">
        <Eyebrow>Abordagem</Eyebrow>
        <h1 className="font-display mt-4 max-w-[20ch] text-4xl font-medium leading-tight md:text-[58px]">
          O processo, do primeiro contacto à transmissão.
        </h1>
      </div>

      <Section>
        <div className="grid grid-cols-1 gap-px border border-tinta/10 bg-tinta/10 dark:border-pergaminho/10 dark:bg-pergaminho/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-pergaminho p-9 dark:bg-[#14100C]">
              <span className="font-display block text-4xl text-pedra">
                {s.n}
              </span>
              <h3 className="font-display mt-5 text-lg font-medium">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-tinta/60 dark:text-pergaminho/60">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Princípios" title="O que rege cada decisão." />
        <div className="grid gap-12 md:grid-cols-3">
          {principles.map((v) => (
            <div key={v.title}>
              <h3 className="font-display flex items-center gap-3 text-xl font-medium">
                <span className="h-2 w-2 shrink-0 rounded-full bg-latao" />
                {v.title}
              </h3>
              <p className="mt-3 max-w-[42ch] text-sm text-tinta/60 dark:text-pergaminho/60">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Enquadramento"
          title="Critérios de decisão"
          lede="Antes de qualquer operação avançar, é avaliada segundo os mesmos quatro critérios — independentemente da área de atuação envolvida."
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Horizonte", v: "Mínimo de 7 anos de detenção projetada" },
            { k: "Localização", v: "Zonas de procura estrutural comprovada" },
            {
              k: "Risco técnico",
              v: "Diligência devida própria, sem exceções",
            },
            { k: "Liquidez", v: "Compatibilidade com o perfil da família" },
          ].map((c) => (
            <div
              key={c.k}
              className="border-t border-tinta/10 pt-5 dark:border-pergaminho/10"
            >
              <p className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
                {c.k}
              </p>
              <p className="font-display mt-3 text-lg">{c.v}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
