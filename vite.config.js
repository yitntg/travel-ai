import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 需要新增的导入

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 关键配置
    }
  },
  build: {
    outDir: 'dist'
  }
});
