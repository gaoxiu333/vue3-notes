import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App) // 创建应用实例

const { config, version } = app
console.log('查看应用实例配置:', { version, config })
// 配置可以通过 app.config.key = newConfig 直接修改
// 比如:
// app.config.errorHandler = (err, instance, info) => {
//     // 处理错误，例如：报告给一个服务(应用在埋点场景？)
// }

app.mount('#app')   // 将应用实例 app 挂载到容器元素#app下面。


// TODO: 如果没有执行 mount 的时候会发生什么？