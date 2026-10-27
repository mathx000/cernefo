import type { Content } from './pt'

export const en: Content = {
  meta: {
    title: 'CERNE FO Family Office | Wealth Management, Porto',
    description:
      'A family office in Porto specialising in wealth and real estate asset management, development and advisory, with discretion and a long-term perspective.',
  },
  nav: {
    label: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    home: 'CERNE FO — home',
    skipToContent: 'Skip to content',
    links: [
      { id: 'casa', label: 'The House' },
      { id: 'ambito', label: 'Our Scope' },
      { id: 'principios', label: 'Principles' },
      { id: 'contacto', label: 'Contact' },
    ],
    language: 'Language',
  },
  hero: {
    eyebrow: 'Family Office · Porto',
    title: 'We build wealth. And make it last.',
    subtitle:
      'Wealth and real estate asset management, with the care of those who manage their own.',
    cta: 'Arrange a conversation',
  },
  casa: {
    eyebrow: 'The House',
    title: 'A family office in the truest sense.',
    text: 'CERNE FO grew out of a family estate and the way we manage it: with time, discernment and no need to show. Today, that same discipline extends to a select circle of clients and partners. Those who work with us are not simply served. They are welcomed and become part of the house.',
  },
  ambito: {
    eyebrow: 'Our Scope',
    title: 'Where we work.',
    areas: [
      {
        n: 'I',
        title: 'Wealth Management',
        text: 'Structuring, overseeing and preserving family wealth with a long-term perspective.',
      },
      {
        n: 'II',
        title: 'Real Estate Asset Management',
        text: 'Traditional and short-term lettings, managed with an owner’s care and rigour.',
      },
      {
        n: 'III',
        title: 'Development & Construction',
        text: 'From site to handover: considered-scale real estate development.',
      },
      {
        n: 'IV',
        title: 'Wealth Advisory',
        text: 'For families and investors seeking a trusted point of contact, not an intermediary.',
      },
    ],
  },
  circulo: {
    eyebrow: 'Co-investment',
    title: 'A circle, not a market.',
    text: 'Alongside managing assets, CERNE FO brings together a select group of families and partners who invest side by side in carefully chosen opportunities. Access is built on relationships and invitation.',
    cta: 'Request an introduction',
  },
  principios: {
    eyebrow: 'Principles',
    subtitle: 'How we care for what matters.',
    values: [
      { word: 'Discretion.', text: 'What we manage stays private.' },
      { word: 'Rigour.', text: 'Every decision is grounded in facts and analysis.' },
      { word: 'Continuity.', text: 'We think in generations, not cycles.' },
      { word: 'Closeness.', text: 'Fewer clients. Each treated like family.' },
    ],
  },
  interludio: {
    term: 'cerne',
    phonetic: '/ˈsɛɾnɨ/',
    text: 'the heartwood of a tree: its densest wood, the part that withstands time.',
  },
  contacto: {
    eyebrow: 'Contact',
    title: 'Conversations by appointment.',
    text: 'We welcome new clients and partners by prior arrangement. We will respond with the discretion the matter deserves.',
    email: 'cerne.fo@gmail.com',
    phone: '+351 938 182 005',
    phoneHref: 'tel:+351938182005',
    place: 'Vila Nova de Gaia · Porto',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      subjectPlaceholder: 'Choose a subject',
      subjects: ['Wealth management', 'Real estate assets', 'Co-investment', 'Other'],
      message: 'Message',
      submit: 'Send',
      sending: 'Sending…',
      confirmation: 'Thank you. We will be in touch shortly.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        message: 'Please write a message.',
        send: 'We could not send your message. Please try again or email cerne.fo@gmail.com.',
      },
    },
  },
  footer: {
    line1: ['CERNE FO', 'Family Office'],
    line2: 'Porto · Portugal',
    copyright: '© 2026 CERNE FO',
    privacy: 'Privacy Policy',
    complaints: 'Portuguese Complaints Book',
    small: 'CERNE FO is a brand of Tavares & Marques, Lda. · NIPC 519 542 479',
  },
  privacy: {
    title: 'Privacy Policy',
    text: 'The text on this page is being prepared. For any questions about personal data, please write to',
    back: 'Back to home',
  },
  notFound: {
    title: 'Page not found.',
    text: 'The address you entered does not exist or has changed.',
    back: 'Back to home',
  },
}
