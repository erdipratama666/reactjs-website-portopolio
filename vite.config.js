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
      includeAssets: ['assets/profile-picture.webp'],
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          // Preload critical images
          preloadImages: `
            <link rel="preload" as="image" href="/assets/profile-picture.webp" type="image/webp">
          `
        }
      }
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
          // Critical images tanpa hash untuk konsistensi caching
          const criticalImages = ['profile-picture.webp'];
          
          if (criticalImages.includes(assetInfo.name)) {
            return 'assets/[name][extname]';
          }
          
          // Images lain dengan hash
          const imgExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg'];
          const isImage = imgExtensions.some(ext => assetInfo.name?.endsWith(ext));
          
          if (isImage) {
            return 'assets/images/[name]-[hash][extname]';
          }
          
          // Assets lain
          return 'assets/[name]-[hash][extname]';
        },
        // Chunk splitting untuk optimasi loading
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      },
    },
    // Optimasi untuk production
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // Optimasi dev server
  server: {
    hmr: {
      overlay: false
    },
    headers: {
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  },
  // Optimasi preview
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});