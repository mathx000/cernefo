import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest2 text-pedra">
        Erro 404
      </p>
      <h1 className="font-display mt-4 text-4xl font-medium">
        Esta página não existe.
      </h1>
      <p className="mt-4 max-w-[46ch] text-tinta/60 dark:text-pergaminho/60">
        O endereço pode ter mudado ou nunca ter existido. Verifique a ligação ou
        volte à página inicial.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-sm bg-verde px-7 py-3.5 text-sm font-semibold text-pergaminho transition-colors hover:bg-verde-deep"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
