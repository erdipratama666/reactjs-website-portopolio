import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Erdi Pratama - Web Developer Portfolio',
        icons: [
          {
            src: '/logo192.png', // Pastikan file ada di public/
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        }
      }
    }
  }
})