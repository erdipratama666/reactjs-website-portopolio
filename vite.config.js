import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Erdi Pratama - Web Developer',
        short_name: 'Erdi Pratama',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      },
      // Tambahkan strategi workbox untuk menangani request secara offline
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }),
    createHtmlPlugin({
      minify: true,
      // Tambahkan script untuk menangkap error global di production
      inject: {
        data: {
          injectScript: process.env.NODE_ENV === 'production' 
            ? `<script>
                window.onerror = function(message, source, lineno, colno, error) {
                  console.error('Caught by window.onerror:', message, source, lineno, colno);
                  return false;
                };
              </script>`
            : '',
        },
      },
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    sourcemap: true,
    // Tambahkan opsi rollup untuk meningkatkan kompatibilitas
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-helmet-async'],
          // Pisahkan chunks untuk meningkatkan caching
        }
      }
    },
    // Pastikan output adalah ES module yang kompatibel
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // Minify output untuk mengurangi ukuran
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Biarkan console.error untuk debugging
        drop_debugger: true
      }
    }
  },
  // Tambahkan opsi server untuk pengujian lokal
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  // Tambahkan opsi preview untuk pengujian build
  preview: {
    port: 4173,
    strictPort: true,
    open: true,
  }
});