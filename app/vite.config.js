import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open: true,
    css: {
      postcss: {
        plugins: [
          autoprefixer({})
        ],
      }
    },
  },
  build: {
    outDir: './build',
    emptyOutDir: true,
  },
})
