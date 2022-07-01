import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import pinia from './config/pinia-setup';
import i18n from './config/i18n-config';

createApp(App)
    .use(pinia)
    .use(router)
    .use(i18n)
        .mount('#app')
