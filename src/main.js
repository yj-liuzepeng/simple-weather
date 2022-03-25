/*
 * @Author: lzp
 * @Date: 2022-03-23 10:32:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 16:57:59
 * @Description: file content
 * @FilePath: /simple-weather/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
// import SimpleWeather from '../dist/simple-weather.es'
import SimpleWeather from '../packages/index.ts'
// import SimpleWeather from 'simple-weather-vue'
// import '../dist/style.css'
// import 'simple-weather-vue/dist/style.css'



const app = createApp(App)

app.use(SimpleWeather,{test:'12'}).mount('#app')
