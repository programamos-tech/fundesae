import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        politica: './politica-privacidad.html'
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
});
