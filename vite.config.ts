import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 这里是关键配置
  server: {
    port: 8000, // 设置前端启动端口为 8000
    proxy: {
      // 字符串简写写法：
      // 把所有 /api 开头的请求代理到 http://localhost:3001
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true, // 允许跨域
        // 如果后端接口没有 /api 前缀，可以进行路径重写：
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
