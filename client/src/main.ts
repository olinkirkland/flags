import axios from 'axios';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import Card from './components/Card.vue';
import { connectToSocketIO } from './connection';
import { router } from './router';

// Create the App and apply plugins
const app = createApp(App);
const pinia = createPinia();

// app.use(i18n); // TODO: Add this later if needed
app.use(router);
app.use(pinia);

/**
 * Components
 */
app.component('Card', Card);

/**
 * Setup Connection
 */
const isLocalhost = window.location.hostname.includes('localhost');
export const baseURL = isLocalhost
    ? 'http://localhost:3000/'
    : 'https://flags-production-9115.up.railway.app/';
export const server = axios.create({
    baseURL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

connectToSocketIO();

// Mount the App
app.mount('#app');
