import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 必须添加

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 绝对路径配置
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [] // 确保不为空数组
    }
  }
})
