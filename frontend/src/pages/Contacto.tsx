import React, { useState } from "react";
import { Eyebrow } from "../components/UI";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up — replace with a real endpoint or form service.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <Eyebrow>Contacto</Eyebrow>
        <h1 className="font-display mt-4 max-w-[18ch] text-4xl font-medium leading-tight md:text-[58px]">
          Iniciar uma conversa privada.
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-tinta/60 dark:text-pergaminho/60">
          Cada relação começa com uma reunião de diagnóstico, sem compromisso,
          para compreender os objetivos patrimoniais em causa.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label
                htmlFor="nome"
                className="mb-2 block text-sm text-tinta/60 dark:text-pergaminho/60"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                className="w-full border-b border-tinta/30 bg-transparent py-2.5 outline-none transition-colors focus:border-latao dark:border-pergaminho/30"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-tinta/60 dark:text-pergaminho/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-b border-tinta/30 bg-transparent py-2.5 outline-none transition-colors focus:border-latao dark:border-pergaminho/30"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="area"
                className="mb-2 block text-sm text-tinta/60 dark:text-pergaminho/60"
              >
                Área de interesse
              </label>
              <select
                id="area"
                name="area"
                className="w-full border-b border-tinta/30 bg-transparent py-2.5 outline-none transition-colors focus:border-latao dark:border-pergaminho/30"
              >
                <option>Investimento imobiliário</option>
                <option>Promoção</option>
                <option>Consultoria</option>
                <option>Gestão de património</option>
              </select>
            </div>
            <div className="mb-8">
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm text-tinta/60 dark:text-pergaminho/60"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                className="w-full resize-y border-b border-tinta/30 bg-transparent py-2.5 outline-none transition-colors focus:border-latao dark:border-pergaminho/30"
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-verde px-7 py-3.5 text-sm font-semibold text-pergaminho transition-colors hover:bg-verde-deep"
            >
              Enviar pedido
            </button>
            {sent && (
              <p
                role="status"
                className="mt-4 text-sm text-verde dark:text-latao-soft"
              >
                Pedido registado. Entraremos em contacto brevemente.
              </p>
            )}
          </form>

          <dl className="space-y-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
                Email
              </dt>
              <dd className="font-display mt-2 text-xl">
                <a
                  href="mailto:cerne.fo@gmail.com"
                  className="transition-colors hover:text-latao"
                >
                  cerne.fo@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
                Telefone
              </dt>
              <dd className="font-display mt-2 text-xl">+351 21 000 0000</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
                Escritório
              </dt>
              <dd className="font-display mt-2 text-xl">
                Avenida da Liberdade, Lisboa
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
                Horário
              </dt>
              <dd className="font-display mt-2 text-xl">
                Segunda a sexta, 9h—18h
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
