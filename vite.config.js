import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'pages/home.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        process: resolve(__dirname, 'pages/process.html'),
        info: resolve(__dirname, 'pages/info.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
})