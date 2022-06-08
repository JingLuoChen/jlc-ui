import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/markdown.css';

import jlcui from '../packages'
console.log(jlcui, 'xui')
import Preview from './components/preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(jlcui).use(router).mount('#app')
