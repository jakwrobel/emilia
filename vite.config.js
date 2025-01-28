import path from 'path';
import fs from 'fs';
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';

function getHtmlEntries() {
  const pagesDir = path.resolve(__dirname, "");
  const entries = {};

  // Read all files in the directory
  const files = fs.readdirSync(pagesDir);

  // Filter out HTML files
  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  // Create entries for each HTML file
  htmlFiles.forEach((file) => {
    const name = path.basename(file, ".html");
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}

const homeTiles =[
  {"title": "8 lat doświadczenia", "description": "w obszarze marketingu z naciskiem na social media oraz strategie komunikacji"},
  {"title": "+20 klientów", "description": "ze skuteczną strategią marketingową, komunikacją w social mediach dopasowaną do grupy odbiorców oraz wzrostem sprzedaży"},
  {"title": "+ 15 branż", "description": "w których działałam do tej pory, m. in.: OZE, turystyka, gastronomia, elektronika, sport, gaming, zdrowie, ubezpieczenia"},
  {"title": "∞ pula pomysłów", "description": "na kreacje graficzne, teksty, filmy w social mediach i strategie marketingowe dla różnych biznesów"}
]

export default defineConfig({
  base: '/emilia/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: {homeTiles} 
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }},
  build: {
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
