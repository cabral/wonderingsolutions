// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { defineHastPlugin } from 'satteri';

// On narrow screens, tables in notes turn into one labelled record per row
// (see the note template). This copies each column header onto its cells as
// data-label, and sets explicit table roles so screen readers keep the table
// structure when CSS changes how it displays.
const labelTableCells = defineHastPlugin({
  name: 'label-table-cells',
  element: {
    filter: ['table'],
    visit(table, ctx) {
      /**
       * Child elements only, skipping the whitespace text between them.
       * @param {import('hast').Element | undefined} node
       * @returns {import('hast').Element[]}
       */
      const kids = (node) => (node?.children ?? []).filter(
        /**
         * @param {import('hast').ElementContent} c
         * @returns {c is import('hast').Element}
         */
        (c) => c.type === 'element',
      );
      const thead = kids(table).find((c) => c.tagName === 'thead');
      const tbody = kids(table).find((c) => c.tagName === 'tbody');
      if (!thead || !tbody) return;

      const headers = kids(kids(thead)[0]).map((th) => ctx.textContent(th).trim());

      ctx.setProperty(table, 'role', 'table');
      for (const group of [thead, tbody]) {
        ctx.setProperty(group, 'role', 'rowgroup');
        for (const tr of kids(group)) {
          ctx.setProperty(tr, 'role', 'row');
          kids(tr).forEach((cell, i) => {
            ctx.setProperty(cell, 'role', cell.tagName === 'th' ? 'columnheader' : 'cell');
            if (cell.tagName === 'td' && headers[i]) ctx.setProperty(cell, 'dataLabel', headers[i]);
          });
        }
      }
    },
  },
});

// Pages rendered with `noindex` in Base.astro. Keep in step with those pages.
const noindexPaths = ['/agent-day/'];

// Markdown checklists in notes are blank forms to print or copy, and the
// disabled checkbox is only a box drawn before the text. Hide it from screen
// readers so each item reads once, as plain list text.
const hideChecklistBoxes = defineHastPlugin({
  name: 'hide-checklist-boxes',
  element: {
    filter: ['input'],
    visit(input, ctx) {
      if (input.properties?.type === 'checkbox' && input.properties?.disabled) {
        ctx.setProperty(input, 'ariaHidden', 'true');
      }
    },
  },
});

export default defineConfig({
  site: 'https://wonderingsolutions.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // The CSS is a few KB, so it goes in the page. No render-blocking request,
    // and the browser finds the font files on the first parse.
    inlineStylesheets: 'always',
  },
  integrations: [
    // Writes /sitemap-index.xml. Pages marked noindex stay out of it.
    sitemap({ filter: (page) => !noindexPaths.some((p) => page.endsWith(p)) }),
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [labelTableCells, hideChecklistBoxes],
      // Straight quotes, the same as every .astro page on the site.
      features: { smartPunctuation: false },
    }),
    // Code blocks render plain and take the site's colours from the note
    // template, in both themes. Shiki's themes bring their own backgrounds.
    syntaxHighlight: false,
  },
});
