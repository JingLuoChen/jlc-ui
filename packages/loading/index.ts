import { App } from 'vue'
// 导入组件，组件必须声明 name
import MicoLoading from './src/index.vue'

// 定义 install 方法， App 作为参数
// 为组件提供 install 安装方法，供按需引入
MicoLoading.install = (app: App): void => {
    app.component(MicoLoading.name, MicoLoading)
}
// 导出组件
export default MicoLoading
