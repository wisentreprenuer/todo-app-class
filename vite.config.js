import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwind(),
  ],
  server: {
    host: '0.0.0.0'
  }
})