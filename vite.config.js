import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html, ctx) {
        // Only process HTML files
        if (!ctx.filename.endsWith('.html')) return html;
        
        return html.replace(/<title>(.*?)<\/title>/, (match, p1) => {
          // Get the page name from the filename
          const pageName = ctx.filename.split('/').pop().replace('.html', '');
          // Capitalize the first letter of the page name
          const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
          // Return the new title
          return `<title>LethalLizard Studios - ${pageName === 'index' ? 'Home' : capitalizedPageName}</title>`;
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sanction: resolve(__dirname, 'sanction.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        project: resolve(__dirname, 'project.html'),
        golf: resolve(__dirname, 'golf.html'),
        controlboxhelp: resolve(__dirname, 'controlbox-help.html'),
        // Add any other HTML pages you have here
      }
    }
  }
}); 