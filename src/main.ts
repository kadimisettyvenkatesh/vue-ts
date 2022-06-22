import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import pinia from './plugins/pinia-setup';

createApp(App).use(router).use(pinia).mount('#app')
