import { App, Plugin } from 'vue';
import JlcTextEllipsis from './src/index.vue';

export const JlcTextEllipsisPlugin: Plugin = {
  install(app: App) {
    app.component('jlc-text-ellipsis', JlcTextEllipsis);
  },
};

export { JlcTextEllipsis };