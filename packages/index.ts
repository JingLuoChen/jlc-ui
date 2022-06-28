import { App, Plugin } from 'vue';

import { JlcButtonPlugin } from './button';
import { JlcTextEllipsisPlugin } from './text-ellipsis';
import { JlcLoadingPlugin } from './loading';

const JLCUIPlugin: Plugin = {
  install(app: App) {
    JlcButtonPlugin.install?.(app);
    JlcTextEllipsisPlugin.install?.(app)
    JlcLoadingPlugin.install?.(app)
  },
};

export default JLCUIPlugin;

export * from './button';
export * from './text-ellipsis';
export * from './loading';