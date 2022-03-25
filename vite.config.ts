import { defineConfig } from "vite"; // 工具函数，获取类型提示
import { resolve } from "path";

import vue from '@vitejs/plugin-vue';
// 路径函数
function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
    plugins:[vue()],
    resolve: {
        alias: { // 设置别名,@就代表src目录
          "@": pathResolve("src"),
        }
    },
    build: {
      lib: {
	      entry: pathResolve('packages/index.ts'), // 入口文件
	      name: 'SimpleWeather',	// 暴露的全局变量
	      fileName: (format) => `simple-weather.${format}.js` //  输出的包文件名
	    },
      rollupOptions: {
	      external: ['vue'], // 确保外部化处理那些不想打包进库的依赖
	      output: {
	        globals: {	// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
	          vue: 'Vue'
	        }
	      }
	    }
    },
    server: {
        cors: true, // 为开发服务器配置 CORS
        open: true, // 自动打开页面
        proxy: {
          '/getweather': {
              target: 'https://way.jd.com',   //代理接口
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/getweather/, '')
          }
        }
    }
});