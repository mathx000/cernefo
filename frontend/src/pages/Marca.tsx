import React from "react";
import { Section, SectionHeading, Eyebrow } from "../components/UI";
import { Wordmark, IconTile, LockupCompact, Seal } from "../components/Logo";

const palette = [
  { name: "Verde Arquivo", hex: "#1F3A2E" },
  { name: "Latão", hex: "#C9A227" },
  { name: "Pergaminho", hex: "#EAE2D2" },
  { name: "Tinta", hex: "#14181B" },
  { name: "Pedra", hex: "#9C9284" },
];

export default function Marca() {
  return (
    <div className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <Eyebrow>Identidade gráfica</Eyebrow>
        <h1 className="font-display mt-4 max-w-[18ch] text-4xl font-medium leading-tight md:text-[58px]">
          Marca &amp; aplicações
        </h1>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Logótipo"
          title="Versão tipográfica, sobre claro e sobre escuro."
        />
        <div className="grid gap-0.5 md:grid-cols-2">
          <div className="flex items-center justify-center bg-pergaminho-alt py-24">
            <Wordmark ground="light" />
          </div>
          <div className="flex items-center justify-center bg-verde py-24">
            <Wordmark ground="dark" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Ícone"
          title="Selo em diferentes formatos e fundos."
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="flex flex-col items-center gap-4">
            <IconTile size={96} ground="dark" shape="square" />
            <span className="text-xs text-tinta/50 dark:text-pergaminho/50">
              Ícone de aplicação · verde
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconTile size={96} ground="light" shape="square" />
            <span className="text-xs text-tinta/50 dark:text-pergaminho/50">
              Ícone de aplicação · pergaminho
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconTile size={96} ground="dark" shape="circle" />
            <span className="text-xs text-tinta/50 dark:text-pergaminho/50">
              Avatar · verde
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <IconTile size={96} ground="light" shape="circle" />
            <span className="text-xs text-tinta/50 dark:text-pergaminho/50">
              Avatar · pergaminho
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Assinatura"
          title="Versão compacta para cabeçalhos e rodapés."
        />
        <div className="grid gap-0.5 md:grid-cols-2">
          <div className="flex items-center justify-center bg-pergaminho-alt py-20">
            <LockupCompact ground="light" />
          </div>
          <div className="flex items-center justify-center bg-verde py-20">
            <LockupCompact ground="dark" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Selo isolado"
          title="O elemento base de toda a identidade."
        />
        <div className="flex justify-center py-10">
          <Seal
            size={160}
            className="text-verde dark:text-latao-soft"
            ringInner="#C9A227"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Paleta"
          title="Verde-escuro de arquivo, latão, pergaminho."
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {palette.map((c) => (
            <div key={c.hex}>
              <div
                className="mb-3 aspect-square rounded-sm"
                style={{ background: c.hex }}
              />
              <p className="font-display text-sm">{c.name}</p>
              <p className="text-xs text-tinta/50 dark:text-pergaminho/50">
                {c.hex}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Tipografia"
          title="Fraunces para o nome, Manrope para o corpo."
        />
        <div className="space-y-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-pedra">
              Display — Fraunces, opsz 144, peso 500
            </p>
            <p className="font-display opsz-max text-5xl font-medium">
              CERNE FO
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-pedra">
              Corpo & utilitário — Manrope
            </p>
            <p className="font-body text-sm font-semibold uppercase tracking-widest2">
              Gestão de ativos imobiliários — desde 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
