/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    // 1. Entorno de simulación de navegador
    environment: 'jsdom',
    // 2. Habilitar los globales como en Jest (expect, describe, etc.)
    // 3. Archivo de setup para matchers de Testing Library
    setupFiles: './src/setupTests.ts',
    // 4. Configuración de cobertura
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // Aquí forzamos el cumplimiento del 80% que pide la prueba
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        'src/main.tsx',
        '**/*.d.ts',
      ],
    },
  },
})