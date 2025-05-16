import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      // konfigurasi PWA default atau kamu sesuaikan di sini
      registerType: 'autoUpdate',
      manifest: {
        name: 'Erdi Pratama Portfolio',
        short_name: 'ErdiPortfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    createHtmlPlugin({
      minify: true,
      // Tidak meng-inject profilePictureUrl statis supaya path gambar tidak bermasalah
    }),
  ],
  build: {
    sourcemap: false,
  }
});
