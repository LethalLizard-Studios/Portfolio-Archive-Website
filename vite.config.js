import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sanction: resolve(__dirname, 'sanction.html'),
        project: resolve(__dirname, 'project.html'),
        // Add any other HTML pages you have here
      }
    }
  }
}); 