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

export default defineConfig({
  base: '/emilia/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: {} 
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
