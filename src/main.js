import { createApp } from 'vue';
import './style.css';
import './tailwind.css';
import router from './router';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const head = createHead();

const app = createApp(App);

app.AOS = new AOS.init();

app.use(router);
app.use(head)
app.use(createPinia())
app.use(AOS);

app.mount('#app');
