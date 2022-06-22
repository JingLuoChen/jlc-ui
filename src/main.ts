import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css';

import jlcui from '../packages'
console.log(jlcui, 'xui')
import Preview from './components/preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(router)
app.use(jlcui)
app.mount('#app')
