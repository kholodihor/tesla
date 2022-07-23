import { createApp } from 'vue';
import './style.css';
import './tailwind.css';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.AOS = new AOS.init();

app.use(router);
app.use(createPinia())
app.use(AOS);

app.mount('#app');
