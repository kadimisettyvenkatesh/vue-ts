import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import pinia from './config/pinia-setup';

createApp(App).use(pinia).use(router).mount('#app')
