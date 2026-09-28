import React from "react";
import { Section, SectionHeading, Eyebrow } from "../components/UI";
import { Seal } from "../components/Logo";

const team = [
  {
    name: "Duarte Marques",
    role: "Sócio-gerente",
    focus: "Estratégia de investimento e relação com famílias",
  },
  {
    name: "Inês Cardoso",
    role: "Diretora de promoção",
    focus: "Coordenação de obra e licenciamento",
  },
  {
    name: "Rui Tavares",
    role: "Consultor patrimonial",
    focus: "Estruturação fiscal e sucessória",
  },
  {
    name: "Beatriz Nogueira",
    role: "Gestora de ativos",
    focus: "Administração de carteira e relatório",
  },
];

export default function Equipa() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 pb-16 md:px-10">
        <Eyebrow>Equipa</Eyebrow>
        <h1 className="font-display mt-4 max-w-[18ch] text-4xl font-medium leading-tight md:text-[58px]">
          Uma equipa pequena, por escolha.
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-tinta/60 dark:text-pergaminho/60">
          Mantemos a estrutura enxuta de propósito: cada família trabalha
          diretamente com quem decide, sem camadas de gestão intermédia.
        </p>
      </div>

      <Section>
        <div className="grid gap-px border border-tinta/10 bg-tinta/10 dark:border-pergaminho/10 dark:bg-pergaminho/10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="bg-pergaminho p-8 dark:bg-[#14100C]">
              <Seal size={40} className="text-pedra" ringInner="#C9A227" />
              <h3 className="font-display mt-5 text-lg font-medium">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-latao">{m.role}</p>
              <p className="mt-3 text-sm text-tinta/60 dark:text-pergaminho/60">
                {m.focus}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Junte-se a nós"
          title="Não recrutamos por volume."
          lede="Procuramos, ocasionalmente, perfis técnicos experientes em direito imobiliário, engenharia ou gestão de ativos que partilhem a mesma visão de longo prazo."
        />
        <a
          href="mailto:carreiras@cernefo.pt"
          className="inline-block rounded-sm border border-tinta/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-tinta dark:border-pergaminho/25 dark:hover:border-pergaminho"
        >
          carreiras@cernefo.pt
        </a>
      </Section>
    </div>
  );
}
