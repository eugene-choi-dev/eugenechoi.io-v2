import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'frontend'),
  resolve: {
    alias: {
      'three': resolve(__dirname, '/node_modules/three/build/three.js'),
    },
  },
});