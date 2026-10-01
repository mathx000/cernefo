import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Seal, Wordmark } from "../components/Logo";
import { Section, Stat, Eyebrow } from "../components/UI";

const services = [
  {
    n: "01",
    title: "Investimento imobiliário",
    text: "Identificação e aquisição de ativos residenciais, comerciais e de solo com potencial de valorização estrutural.",
  },
  {
    n: "02",
    title: "Promoção",
    text: "Desenvolvimento e reabilitação de edifícios, do licenciamento à entrega, com acompanhamento técnico direto.",
  },
  {
    n: "03",
    title: "Consultoria",
    text: "Aconselhamento a famílias e instituições sobre estruturação de investimento e devida diligência.",
  },
  {
    n: "04",
    title: "Gestão de património",
    text: "Administração contínua de carteiras de ativos imobiliários e mistos, com visão de sucessão.",
  },
];

const contacts = [
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

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ease-out ${revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`;

  return (
    <>
      {/* HERO */}
      <div className="bg-verde text-pergaminho">
        <div className="mx-auto max-w-wrap px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="grid items-end gap-14 md:grid-cols-[1.1fr_0.7fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest2 text-latao-soft">
                Proposta de identidade e gestão patrimonial
              </p>
              <h1
                style={{ transitionDelay: "80ms" }}
                className={`font-display max-w-[14ch] text-[40px] font-medium leading-[1.04] md:text-[74px] ${fade(0)}`}
              >
                CERNE FO
              </h1>
              <p
                style={{ transitionDelay: "180ms" }}
                className={`mt-7 max-w-[46ch] text-lg text-pergaminho/75 ${fade(0)}`}
              >
                Investimento imobiliário, promoção, consultoria e gestão de
                património. Uma casa familiar que transmite solidez, rigor e
                notoriedade.
              </p>
              <div
                style={{ transitionDelay: "260ms" }}
                className={`mt-9 flex flex-wrap gap-4 ${fade(0)}`}
              >
                <Link
                  to="/contacto"
                  className="rounded-sm bg-latao px-7 py-3.5 text-sm font-semibold text-verde-deep transition-colors hover:bg-latao-soft"
                >
                  Marcar consulta privada
                </Link>
                <Link
                  to="/servicos"
                  className="rounded-sm border border-pergaminho/35 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-pergaminho"
                >
                  Ver áreas de atuação
                </Link>
              </div>
            </div>
            <div
              style={{ transitionDelay: "200ms" }}
              className={`flex flex-col items-center justify-center pb-2 ${fade(0)}`}
            >
              <Seal
                size={230}
                ring="currentColor"
                ringInner="#C9A227"
                letter="currentColor"
                rule="#C9A227"
                className="text-pergaminho"
              />
              <Wordmark ground="dark" size="md" />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-pergaminho/15 pt-8 md:grid-cols-4">
            <Stat value="18" label="anos de atividade" />
            <Stat value="€240M+" label="ativos sob gestão" />
            <Stat value="62" label="projetos concluídos" />
            <Stat value="3" label="gerações de família" />
          </div>
        </div>
      </div>

      {/* SOBRE (resumo) */}
      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Sobre a Cerne FO</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-medium leading-tight md:text-[42px]">
              Uma casa, não uma empresa emergente.
            </h2>
            <p className="mt-6 max-w-[48ch] text-tinta/60 dark:text-pergaminho/60">
              Nascida de um negócio de família dedicado à pedra e à construção,
              a CERNE FO transformou-se ao longo de três gerações numa estrutura
              de investimento imobiliário e gestão patrimonial.
            </p>
            <Link
              to="/sobre"
              className="mt-6 inline-block text-sm font-semibold text-verde underline underline-offset-4 dark:text-latao-soft"
            >
              Conhecer a nossa história
            </Link>
          </div>
          <blockquote className="border-l-2 border-latao pl-6">
            <p className="font-display text-2xl italic leading-snug text-tinta dark:text-pergaminho">
              "Não vendemos metros quadrados. Estruturamos património para
              atravessar gerações."
            </p>
            <cite className="mt-6 block text-sm not-italic text-tinta/50 dark:text-pergaminho/50">
              — Princípio fundador, Cerne FO
            </cite>
          </blockquote>
        </div>
      </Section>

      {/* SERVIÇOS (resumo) */}
      <Section className="!py-0 !border-t-0">
        <div className="mb-16 grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight md:text-[42px]">
              Quatro disciplinas, uma só lógica de longo prazo.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-tinta/10 dark:border-pergaminho/10 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.n}
              className="border-b border-r border-tinta/10 p-10 transition-colors hover:bg-pergaminho-alt dark:border-pergaminho/10 dark:hover:bg-white/5 md:p-12"
            >
              <span className="font-display mb-5 block text-sm text-latao">
                {s.n}
              </span>
              <h3 className="font-display mb-3 text-xl font-medium md:text-2xl">
                {s.title}
              </h3>
              <p className="max-w-[38ch] text-sm text-tinta/60 dark:text-pergaminho/60">
                {s.text}
              </p>
            </div>
          ))}
        </div>
        <div className="pb-28 pt-14 text-center md:pb-28">
          <Link
            to="/servicos"
            className="text-sm font-semibold text-verde underline underline-offset-4 dark:text-latao-soft"
          >
            Explorar todas as áreas de atuação
          </Link>
        </div>
      </Section>

      {/* CONTACTOS */}
      <Section className="bg-tinta !border-t-0 text-pergaminho">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-pergaminho/15 pb-12 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pergaminho/10">
              <Seal
                size={28}
                ring="currentColor"
                ringInner="#C9A227"
                letter="currentColor"
                rule="#C9A227"
              />
            </div>
            <div>
              <Eyebrow>
                <span className="text-latao-soft">Contactos</span>
              </Eyebrow>
              <h2 className="font-display mt-2 text-3xl font-medium leading-tight md:text-[38px]">
                Tem um projeto em mente?
              </h2>
              <p className="mt-2 text-sm text-pergaminho/65 md:text-base">
                Fale connosco e encontre a pessoa certa para o seu património.
              </p>
            </div>
          </div>
          <Link
            to="/contacto"
            className="shrink-0 bg-latao px-7 py-4 text-sm font-semibold text-tinta transition-colors hover:bg-latao-soft"
          >
            Solicitar contacto{" "}
            <span aria-hidden="true" className="ml-3">
              →
            </span>
          </Link>
        </div>
        <div className="grid border-x border-b border-pergaminho/15 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="border-b border-pergaminho/15 p-8 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <Seal
                size={40}
                className="text-pergaminho/70"
                ringInner="#C9A227"
              />
              <h3 className="font-display mt-5 text-lg font-medium">
                {contact.name}
              </h3>
              <p className="mt-1 text-sm text-latao-soft">{contact.role}</p>
              <p className="mt-3 text-sm text-pergaminho/60">{contact.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-verde !border-t-0 text-pergaminho dark:bg-verde-deep">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>
              <span className="text-latao-soft">Iniciar uma conversa</span>
            </Eyebrow>
            <h2 className="font-display mt-4 max-w-[18ch] text-3xl font-medium leading-tight md:text-[42px]">
              Cada relação começa com um diagnóstico, sem compromisso.
            </h2>
          </div>
          <a
            href="https://wa.me/351210000000?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20privada."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-sm bg-[#25D366] px-8 py-4 text-sm font-semibold text-[#102A1F] transition-colors hover:bg-[#1FC15B]"
          >
            WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
