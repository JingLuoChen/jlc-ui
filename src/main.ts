import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css';

// import jlcui from '../packages'
import jlcui from '../dist/jlc-ui.es'
console.log(jlcui, 'xui')

const app = createApp(App)
app.use(router)
app.use(jlcui)
app.mount('#app')
