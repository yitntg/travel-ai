import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 关键：确保资源路径正确
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
