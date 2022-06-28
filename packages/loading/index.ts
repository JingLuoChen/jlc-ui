import { App, Plugin } from 'vue';
import JlcLoading from './src/index.vue';

export const JlcLoadingPlugin: Plugin = {
  install(app: App) {
    app.component('jlc-loading', JlcLoading);
  },
};

export { JlcLoading };