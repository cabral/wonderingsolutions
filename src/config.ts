// Site-wide constants. Change links here, not in the pages.
export const site = {
  name: 'Wondering Solutions',
  person: 'Felipe Cabral',
  city: 'Stockholm',
  email: 'captain@wonderingsolutions.com',
  // TODO: confirm the LinkedIn profile URL before launch.
  linkedin: 'https://www.linkedin.com/in/felipecabral/',
  // GitHub is linked from /serenata only, on purpose.
  serenataRepo: 'https://github.com/cabral/serenata',
  // Form endpoint for "Notify me" (Buttondown, Formspree, etc.).
  // Leave empty and the form falls back to a pre-filled email.
  notifyAction: '',
};

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/serenata/', label: 'Serenata' },
  { href: '/estaleiro/', label: 'Estaleiro' },
  { href: '/notes/', label: 'Notes' },
  { href: '/about/', label: 'About' },
];
