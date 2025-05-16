import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      // konfigurasi yang sudah ada
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          // Ini akan diinjeksi ke HTML
          profilePictureUrl: '/assets/profile-picture.png',
        },
      },
    }),
  ],
  build: {
    sourcemap: false,
  }
})