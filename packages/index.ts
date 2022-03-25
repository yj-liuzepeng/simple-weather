/*
 * @Author: lzp
 * @Date: 2022-03-23 10:35:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 15:00:49
 * @Description: file content
 * @FilePath: /simple-weather/packages/index.ts
 */
import SimpleWeather from './weather/index.vue'

const myPlugin = {
  install(app, options) {
    // 配置此应用
    app.component("SimpleWeather", SimpleWeather);
    console.log('查看配置',options)
  }
}


export default myPlugin