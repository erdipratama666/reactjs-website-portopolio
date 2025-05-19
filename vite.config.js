import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Erdi Pratama Portfolio',
        short_name: 'ErdiPortfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#ffffff',

      },
      // Tambahkan include untuk memastikan favicon.png ter-copy
      includeAssets: ['assets/profile-picture.webp'],
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Pastikan profile-picture.png tetap berada di /assets/
          if (assetInfo.name === 'profile-picture.webp') {
            return 'assets/profile-picture.webp';
          }
          // Asset lainnya di-hash seperti biasa
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});