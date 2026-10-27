/**
 * Textos finais do site — fonte: "Textos e notas para o novo site" (CERNE FO, outubro 2026).
 * Não editar a redação sem falar com o cliente.
 */
export const pt = {
  meta: {
    title: 'CERNE FO  Family Office | Gestão de Património, Porto',
    description:
      'Family office no Porto. Gestão de património e de ativos imobiliários, promoção e consultoria patrimonial, com discrição e visão de longo prazo.',
  },
  nav: {
    label: 'Navegação principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    home: 'CERNE FO — início',
    skipToContent: 'Saltar para o conteúdo',
    links: [
      { id: 'casa', label: 'A Casa' },
      { id: 'ambito', label: 'Âmbito' },
      { id: 'principios', label: 'Princípios' },
      { id: 'contacto', label: 'Contacto' },
    ],
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Family Office · Porto',
    title: 'Património que se constrói. E que fica.',
    subtitle:
      'Gestão de património e de ativos imobiliários, com o cuidado de quem gere o que é seu.',
    cta: 'Marcar uma conversa',
  },
  casa: {
    eyebrow: 'A Casa',
    title: 'Um family office, no sentido literal.',
    text: 'A CERNE FO nasceu de um património de família e da forma como o gerimos: com tempo, com critério, sem pressa de mostrar. Hoje, essa mesma disciplina estende-se a um círculo restrito de clientes e parceiros. Quem trabalha connosco não é atendido. É recebido, e passa a fazer parte da casa.',
  },
  ambito: {
    eyebrow: 'Âmbito',
    title: 'Onde atuamos.',
    areas: [
      {
        n: 'I',
        title: 'Gestão de Património',
        text: 'Estruturação, acompanhamento e preservação de patrimónios familiares, numa visão de longo prazo.',
      },
      {
        n: 'II',
        title: 'Gestão de Ativos Imobiliários',
        text: 'Arrendamento tradicional e alojamento local, geridos com o rigor de quem é proprietário.',
      },
      {
        n: 'III',
        title: 'Promoção & Construção',
        text: 'Do terreno à entrega: desenvolvimento de projetos imobiliários de escala ponderada.',
      },
      {
        n: 'IV',
        title: 'Consultoria Patrimonial',
        text: 'Para famílias e investidores que procuram um interlocutor, não um intermediário.',
      },
    ],
  },
  circulo: {
    eyebrow: 'Co-investimento',
    title: 'Um círculo, não um mercado.',
    text: 'Para além da gestão, a CERNE FO reúne um grupo reservado de famílias e parceiros que investem lado a lado em operações selecionadas. O acesso faz-se por relação e por convite.',
    cta: 'Pedir uma apresentação',
  },
  principios: {
    eyebrow: 'Princípios',
    subtitle: 'A forma como cuidamos do que tem valor.',
    values: [
      { word: 'Discrição.', text: 'O que gerimos não se expõe.' },
      { word: 'Rigor.', text: 'Cada decisão tem números e fundamento.' },
      { word: 'Permanência.', text: 'Pensamos em gerações, não em ciclos.' },
      { word: 'Proximidade.', text: 'Poucos clientes. Todos tratados como família.' },
    ],
  },
  interludio: {
    term: 'cerne',
    phonetic: '/ˈsɛɾnɨ/',
    text: 'o núcleo da árvore. A madeira mais densa, a que resiste ao tempo.',
  },
  contacto: {
    eyebrow: 'Contacto',
    title: 'Conversas, por marcação.',
    text: 'Recebemos novos clientes e parceiros mediante contacto prévio. Responderemos com a discrição que o assunto pede.',
    email: 'cerne.fo@gmail.com',
    phone: '+351 938 182 005',
    phoneHref: 'tel:+351938182005',
    place: 'Vila Nova de Gaia · Porto',
    form: {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      subject: 'Assunto',
      subjectPlaceholder: 'Selecione um assunto',
      subjects: ['Gestão de património', 'Ativos imobiliários', 'Co-investimento', 'Outro'],
      message: 'Mensagem',
      submit: 'Enviar',
      sending: 'A enviar…',
      confirmation: 'Obrigado. Entraremos em contacto em breve.',
      errors: {
        name: 'Indique o seu nome.',
        email: 'Indique um email válido.',
        message: 'Escreva uma mensagem.',
        send: 'Não foi possível enviar. Tente novamente ou escreva para cerne.fo@gmail.com.',
      },
    },
  },
  footer: {
    line1: ['CERNE FO', 'Family Office'],
    line2: 'Porto · Portugal',
    copyright: '© 2026 CERNE FO',
    privacy: 'Política de Privacidade',
    complaints: 'Livro de Reclamações',
    small: 'CERNE FO é uma marca de Tavares & Marques, Lda. · NIPC 519 542 479',
  },
  privacy: {
    title: 'Política de Privacidade',
    text: 'O texto desta página está em preparação. Para qualquer questão sobre dados pessoais, escreva para',
    back: 'Voltar ao início',
  },
  notFound: {
    title: 'Página não encontrada.',
    text: 'O endereço que indicou não existe ou foi alterado.',
    back: 'Voltar ao início',
  },
}

export type Content = typeof pt
