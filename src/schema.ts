// Structured data (schema.org JSON-LD) shared by the pages.
// Base.astro renders whatever a page passes as `schema`.
import { site } from './config';

const origin = 'https://wonderingsolutions.com';

// One Person node with a stable @id, so every page points at the same person.
export const personId = `${origin}/#person`;
export const websiteId = `${origin}/#website`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.person,
  url: `${origin}/`,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: site.city },
  sameAs: [site.linkedin],
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: site.name,
  url: `${origin}/`,
  inLanguage: 'en',
  publisher: { '@id': personId },
};

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
