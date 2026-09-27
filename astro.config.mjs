// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wonderingsolutions.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
