import { App, Plugin } from 'vue';

import { JlcButtonPlugin } from './button';
import { JlcTextEllipsisPlugin } from './text-ellipsis';

const JLCUIPlugin: Plugin = {
  install(app: App) {
    JlcButtonPlugin.install?.(app);
    JlcTextEllipsisPlugin.install?.(app)
  },
};

export default JLCUIPlugin;

export * from './button';
export * from './text-ellipsis';

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