import { App, Plugin } from 'vue'

import { MicoButtonPlugin } from './button';

const JLCUIPlugin: Plugin = {
  install(app: App) {
    MicoButtonPlugin.install?.(app);
  },
};

export default JLCUIPlugin;

export * from './button'
// // 所有组件列表
// const components = [ MicoButton, MicoPageLoading ]

// // 定义 install 方法， App 作为参数
// const install = (app: App): void => {
//     // 遍历注册所有组件
//     components.map((component) => app.component(component.name, component))
// }

// export default {
//     install,
//     MicoButton,
//     MicoPageLoading
// }