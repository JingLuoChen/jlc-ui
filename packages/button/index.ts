import { App, Plugin } from 'vue';
import MicoButton from './src/index.vue';

export const MicoButtonPlugin: Plugin = {
  install(app: App) {
    app.component('mico-button', MicoButton);
  },
};

export { MicoButton };