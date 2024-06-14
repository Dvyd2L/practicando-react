import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@router': path.resolve(__dirname, 'src/router'),
      // '@features': path.resolve(__dirname, 'src/features'),
      // '@utils': path.resolve(__dirname, 'src/utils'),
      // '@constants': path.resolve(__dirname, 'src/constants'),
      // '@store': path.resolve(__dirname, 'src/store'),
      // '@styles': path.resolve(__dirname, 'src/styles'),
      // '@types': path.resolve(__dirname, 'src/types'),
    }
  }
})
