import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-runtime',
            {
              regenerator: true,
            },
          ],
        ],
      },
      fastRefresh: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.webp'],
      manifest: {
        name: 'Erdi Pratama - Web Developer Portfolio',
        short_name: 'Erdi Pratama',
        description: 'Portofolio Erdi Pratama, Web Developer yang berfokus pada pengembangan website modern dengan React.js',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'logo512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'helmet': ['react-helmet-async'],
          'critical': ['./src/components/Hero.jsx', './src/components/Navbar.jsx'],
        },
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name.includes('critical') 
            ? 'assets/[name]-[hash].js'
            : 'assets/[name]-[hash].js';
        }
      }
    },
    minify: 'esbuild',
    assetsInlineLimit: 4096,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    legalComments: 'none',
    treeShaking: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})