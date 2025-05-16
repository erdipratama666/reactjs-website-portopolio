import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer' // tambahkan npm install rollup-plugin-visualizer

export default defineConfig({
  base: '/',
  plugins: [
    react({
      // Konfigurasi babel runtime
      babel: {
        plugins: [
          ['@babel/plugin-transform-runtime',
            {
              regenerator: true,
            },
          ],
        ],
      },
      // Hanya lakukan transformasi pada kode React, bukan node_modules
      fastRefresh: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Erdi Pratama - Web Developer Portfolio',
        short_name: 'Erdi Pratama',
        description: 'Portofolio Erdi Pratama, Web Developer yang berfokus pada pengembangan website modern dengan React.js',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    // Analisis bundle untuk melihat apa yang membuat JS besar
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    sourcemap: false,
    // Kurangi ukuran chunk agar tidak menunda render
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Strategi chunking yang lebih baik untuk mobile
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'helmet': ['react-helmet-async'],
          // Pastikan komponen critical (untuk LCP) berada di chunk utama
          'critical': ['./src/components/Hero.jsx', './src/components/Navbar.jsx'],
        },
        // Memprioritaskan chunk yang kritikal
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name.includes('critical') 
            ? 'assets/[name]-[hash].js'
            : 'assets/[name]-[hash].js';
        }
      }
    },
    // Gunakan esbuild untuk minify yang lebih cepat
    minify: 'esbuild',
    // Gunakan gzip untuk kompresi
    assetsInlineLimit: 4096,
  },
  // Optimalkan untuk ukuran lebih kecil dengan esbuild
  esbuild: {
    jsxInject: `import React from 'react'`,
    legalComments: 'none',
    treeShaking: true,
  },
  // Preload untuk file kritikal
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})