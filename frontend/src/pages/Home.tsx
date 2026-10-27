import React from 'react'
import { Seal } from '../components/Logo'
import { Section, Eyebrow, Button, scrollToId } from '../components/UI'
import ContactForm from '../components/ContactForm'
import { useLang } from '../hooks/useLang'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  const { t } = useLang()
  const heroRef = useReveal<HTMLDivElement>()

  return (
    <>
      {/* 1 · HERO — verde arquivo, selo em marca de água */}
      <section aria-labelledby="hero-titulo" className="on-verde relative overflow-hidden bg-verde text-pergaminho">
        <div aria-hidden="true" className="pointer-events-none absolute -right-[30%] top-[48%] w-[min(145vw,980px)] -translate-y-1/2 opacity-[0.08] sm:-right-[18%] sm:top-1/2 sm:w-[min(120vw,980px)] sm:opacity-[0.06]">
          <Seal size="100%" ring="#EAE2D2" ringInner="#C9A227" letter="#EAE2D2" rule="#C9A227" className="hero-seal" />
        </div>
        <div
          ref={heroRef}
          className="reveal relative mx-auto flex min-h-[100svh] max-w-wrap flex-col justify-center px-6 pb-24 pt-40 md:px-10"
        >
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1
            id="hero-titulo"
            className="mt-8 max-w-[15ch] font-display text-[44px] font-normal leading-[1.06] tracking-[-0.01em] sm:text-6xl md:text-[84px] lg:text-[92px]"
          >
            {t.hero.title}
          </h1>
          <span aria-hidden="true" className="mt-10 block h-px w-14 bg-latao" />
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-pergaminho/80 md:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-12">
            <Button tone="pergaminho" onClick={() => scrollToId('contacto')}>
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* 2 · A CASA */}
      <Section id="casa" labelledBy="casa-titulo">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Eyebrow>{t.casa.eyebrow}</Eyebrow>
            <h2 id="casa-titulo" className="mt-6 max-w-[16ch] font-display text-4xl font-normal leading-[1.1] md:text-[56px]">
              {t.casa.title}
            </h2>
          </div>
          <p className="max-w-[46ch] font-display text-xl font-normal leading-[1.6] text-tinta-soft md:col-span-6 md:col-start-7 md:text-[22px]">
            {t.casa.text}
          </p>
        </div>
      </Section>

      {/* 3 · ÂMBITO */}
      <Section id="ambito" labelledBy="ambito-titulo" className="border-t border-tinta/10">
        <Eyebrow>{t.ambito.eyebrow}</Eyebrow>
        <h2 id="ambito-titulo" className="mt-6 font-display text-4xl font-normal leading-[1.1] md:text-[56px]">
          {t.ambito.title}
        </h2>
        <ol className="mt-16 md:mt-24">
          {t.ambito.areas.map((a) => (
            <li
              key={a.n}
              className="grid gap-3 border-t border-latao/60 py-9 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <span aria-hidden="true" className="font-display text-2xl text-latao-deep md:col-span-1">
                {a.n}.
              </span>
              <h3 className="font-display text-2xl font-normal leading-snug md:col-span-5 md:text-[28px]">
                {a.title}
              </h3>
              <p className="max-w-[44ch] leading-relaxed text-tinta-soft md:col-span-5 md:col-start-8">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 · CÍRCULO */}
      <Section id="circulo" tone="alt" labelledBy="circulo-titulo">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Eyebrow>{t.circulo.eyebrow}</Eyebrow>
            <h2 id="circulo-titulo" className="mt-6 max-w-[14ch] font-display text-4xl font-normal leading-[1.1] md:text-[56px]">
              {t.circulo.title}
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="max-w-[46ch] font-display text-xl leading-[1.6] text-tinta-soft md:text-[22px]">
              {t.circulo.text}
            </p>
            <div className="mt-12">
              <Button tone="verde" onClick={() => scrollToId('contacto')}>
                {t.circulo.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 5 · PRINCÍPIOS */}
      <Section id="principios" labelledBy="principios-titulo">
        <Eyebrow id="principios-titulo">{t.principios.eyebrow}</Eyebrow>
        <p className="mt-4 font-display text-xl leading-relaxed text-tinta-soft md:text-[22px]">
          {t.principios.subtitle}
        </p>
        <ul className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {t.principios.values.map((v) => (
            <li key={v.word} className="group lg:border-l lg:border-tinta/15 lg:px-8 lg:first:border-l-0 lg:first:pl-0">
              <h3 className="font-display relative w-fit text-[28px] font-normal leading-tight transition-colors duration-300 group-hover:text-verde after:absolute after:-bottom-2 after:left-0 after:h-px after:w-8 after:origin-left after:scale-x-0 after:bg-latao-deep after:transition-transform after:duration-300 group-hover:after:scale-x-100 md:text-[32px]">
                {v.word}
              </h3>
              <p className="mt-4 max-w-[26ch] leading-relaxed text-tinta-soft transition-colors duration-300 group-hover:text-tinta">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6 · INTERLÚDIO */}
      <InterludeBand />

      {/* 7 · CONTACTO */}
      <Section id="contacto" labelledBy="contacto-titulo">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Eyebrow>{t.contacto.eyebrow}</Eyebrow>
            <h2 id="contacto-titulo" className="mt-6 max-w-[12ch] font-display text-4xl font-normal leading-[1.1] md:text-[56px]">
              {t.contacto.title}
            </h2>
            <p className="mt-8 max-w-[40ch] leading-relaxed text-tinta-soft">{t.contacto.text}</p>
            <address className="mt-12 space-y-2 border-t border-latao/60 pt-8 not-italic">
              <p>
                <a href={`mailto:${t.contacto.email}`} className="font-display text-xl underline decoration-tinta/25 underline-offset-[6px] transition-colors hover:decoration-tinta">
                  {t.contacto.email}
                </a>
              </p>
              <p>
                <a href={t.contacto.phoneHref} className="font-display text-xl transition-colors hover:text-verde">
                  {t.contacto.phone}
                </a>
              </p>
              <p className="pt-2 text-sm text-tinta-soft">{t.contacto.place}</p>
            </address>
          </div>
          <div className="relative md:col-span-6 md:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

function InterludeBand() {
  const { t } = useLang()
  const ref = useReveal<HTMLDivElement>()
  const i = t.interludio
  return (
    <section aria-labelledby="interludio-titulo" className="relative overflow-hidden bg-pergaminho-alt">
      <svg
        aria-hidden="true"
        viewBox="0 0 240 360"
        fill="none"
        className="pointer-events-none absolute -right-12 bottom-0 h-[82%] max-h-[440px] text-verde opacity-[0.09] sm:right-[6%]"
      >
        <path
          d="M120 346V91m0 124-48-50m48 9 55-57m-55 1L83 72m37 24 35-48m-35 161-36 37m36-21 45 45M120 346l-29 12m29-12 30 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72 165c-17-1-26-12-24-25 2-12 14-18 25-13 2-14 14-22 27-16 7-15 25-17 35-6 10-13 29-10 34 4 14-5 28 5 26 19 14 8 12 28-2 34m-126 5c-10 9-9 24 2 30m123-30c10 9 9 24-2 30M83 72c-12-8-12-24-1-32 10-7 23-3 27 8 8-11 24-10 30 2 14-7 29 1 29 15 13 3 19 19 10 29m-95-55c-2-12 8-22 20-21m65 47c12-4 23 3 25 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div ref={ref} className="reveal relative z-10 mx-auto grid max-w-wrap gap-10 px-6 py-32 md:grid-cols-12 md:items-center md:gap-10 md:px-10 md:py-44">
        <div className="md:col-span-4">
          <h2 id="interludio-titulo" className="font-display text-5xl font-normal italic leading-none text-verde md:text-6xl">
            {i.term}
          </h2>
          <p className="mt-5 font-display text-2xl italic tracking-wide text-verde md:text-3xl">{i.phonetic}</p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <span aria-hidden="true" className="mb-6 block h-px w-12 bg-latao-deep" />
          <p className="max-w-[34ch] font-display text-2xl leading-[1.45] text-verde md:text-3xl">
            {i.text}
          </p>
        </div>
      </div>
    </section>
  )
}
