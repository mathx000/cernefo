import React from "react";
import { NavLink } from "react-router-dom";
import { IconTile } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-tinta/10 py-14 dark:border-pergaminho/10">
      <div className="mx-auto max-w-wrap px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <IconTile size={40} ground="dark" />
            <p className="mt-5 max-w-[34ch] text-sm text-tinta/60 dark:text-pergaminho/60">
              Investimento imobiliário, promoção, consultoria e gestão de
              património — estruturado com o rigor de um escritório familiar.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-pedra">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-tinta/70 dark:text-pergaminho/70">
              <li>
                <NavLink to="/sobre">Sobre</NavLink>
              </li>
              <li>
                <NavLink to="/servicos">Serviços</NavLink>
              </li>
              <li>
                <NavLink to="/abordagem">Abordagem</NavLink>
              </li>
              <li>
                <NavLink to="/patrimonio">Património</NavLink>
              </li>
              <li>
                <NavLink to="/equipa">Equipa</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-pedra">
              Contacto
            </p>
            <ul className="space-y-2 text-sm text-tinta/70 dark:text-pergaminho/70">
              <li>cerne.fo@gmail.com</li>
              <li>+351 21 000 0000</li>
              <li>Avenida da Liberdade, Lisboa</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-tinta/10 pt-6 text-xs text-tinta/50 dark:border-pergaminho/10 dark:text-pergaminho/50">
          © 2026 Cerne FO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
