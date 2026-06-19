import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vannidelprete.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});