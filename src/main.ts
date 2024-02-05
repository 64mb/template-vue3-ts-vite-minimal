import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from '@/router';
import '@/assets/main.css';

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(router);

app.mount('#app');
