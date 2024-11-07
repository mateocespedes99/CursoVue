import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

//este archivo de configuracion de como trabaja vite, vue esta construido
//con vite en el fondo, vite nos permite  tener por ej el livereload, etc
//empaca la aplicacion cuando este lista para publicar/subir a un sitio web
