import React from "react";
import { Section, SectionHeading, Eyebrow } from "../components/UI";

const types = [
  {
    label: "Residencial",
    title: "Edifícios de habitação e reabilitação urbana",
    grad: "from-[#1F3A2E] to-[#0E1F17]",
  },
  {
    label: "Comercial",
    title: "Escritórios, retalho e ativos de rendimento",
    grad: "from-[#4B4636] to-[#221F18]",
  },
  {
    label: "Solo & promoção",
    title: "Terrenos e projetos de construção nova",
    grad: "from-[#8C7B45] to-[#2A2312]",
  },
];

const cases = [
  {
    name: "Edifício Príncipe Real",
    type: "Residencial · Reabilitação",
    year: "2019",
  },
  { name: "Quinta do Arneiro", type: "Solo · Promoção", year: "2021" },
  {
    name: "Torre Central, Avenidas Novas",
    type: "Comercial · Gestão",
    year: "2023",
  },
  {
    name: "Bairro Alto, Lote 14",
    type: "Residencial · Aquisição",
    year: "2025",
  },
];

export default function Patrimonio() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:px-10">
        <Eyebrow>Tipologias de património</Eyebrow>
        <h1 className="font-display mt-4 max-w-[18ch] text-4xl font-medium leading-tight md:text-[58px]">
          Onde investimos e como gerimos.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
        {types.map((t) => (
          <div
            key={t.label}
            className={`flex aspect-[4/5] items-end bg-gradient-to-br p-7 ${t.grad}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-latao-soft">
                {t.label}
              </p>
              <h4 className="font-display mt-2 text-xl font-medium text-pergaminho">
                {t.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <Section>
        <SectionHeading
          eyebrow="Casos ilustrativos"
          title="Uma carteira construída projeto a projeto."
          lede="Uma amostra representativa das tipologias de operação — os dados de cada carteira específica são partilhados apenas em contexto de consultoria direta."
        />
        <div className="grid grid-cols-1 divide-y divide-tinta/10 border-t border-tinta/10 dark:divide-pergaminho/10 dark:border-pergaminho/10">
          {cases.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-6"
            >
              <h4 className="font-display text-lg font-medium">{c.name}</h4>
              <p className="text-sm text-tinta/60 dark:text-pergaminho/60">
                {c.type}
              </p>
              <p className="text-sm text-pedra">{c.year}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Relatórios"
          title="Transparência com quem investe connosco."
          lede="Cada família ou investidor recebe um relatório periódico sobre o desempenho dos ativos sob gestão, com indicadores comparáveis entre projetos."
        />
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-medium">Trimestral</p>
            <p className="mt-2 text-sm text-tinta/60 dark:text-pergaminho/60">
              Frequência do relatório financeiro e operacional.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-medium">Individual</p>
            <p className="mt-2 text-sm text-tinta/60 dark:text-pergaminho/60">
              Cada carteira é reportada isoladamente, sem consolidação forçada.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-medium">Direto</p>
            <p className="mt-2 text-sm text-tinta/60 dark:text-pergaminho/60">
              Ponto de contacto único, sem intermediários adicionais.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
