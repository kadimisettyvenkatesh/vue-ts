import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/tailwind.css';
import '@/scss/index.scss';
import pinia from './config/pinia-setup';
import i18n from './config/i18n-config';
import primeVue from './config/prime-vue-config';

createApp(App)
    .use(pinia)
    .use(router)
    .use(i18n)
    .use(primeVue)
    .mount('#app')
