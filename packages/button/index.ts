import { App, Plugin } from 'vue';
import JlcButton from './src/index.vue';

export const JlcButtonPlugin: Plugin = {
  install(app: App) {
    app.component('jlc-button', JlcButton);
  },
};

export { JlcButton };