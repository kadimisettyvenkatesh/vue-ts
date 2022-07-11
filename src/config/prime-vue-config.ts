// config
import PrimeVue from 'primevue/config';

// css
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.css';
import 'primeicons/primeicons.css';

// components
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const primeVue = {
    install(app:any) {
        app.use(PrimeVue);
        /* eslint-disable */
        app.component('Dialog', Dialog);
        app.component('Button', Button);

        app.component('InputText', InputText);
    }
}
export default primeVue;