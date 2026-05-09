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
  // 2. 构建分包配置 (对应 webpack optimization.splitChunks)
  build: {
    rollupOptions: {
      output: {
        // 手动分包逻辑
        manualChunks(id) {
          // id 是模块的绝对路径，通过判断路径来决定分到哪个 chunk
          if (id.includes('node_modules')) {
            if (id.includes('antd')) {
              return 'antd-chunk'
            }
            if (id.includes('react-dom')) {
              return 'reactDom-chunk'
            }
            // 其余 node_modules 里的内容分到 vendors
            return 'vendors-chunk'
          }
        },
      },
    },
  },
})
