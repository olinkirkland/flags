import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

/**
 * Setup Axios
 */

// Is 'localhost' in the hostname?
const isLocalhost = window.location.hostname.includes('localhost');
const baseURL = isLocalhost
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

createApp(App).mount('#app');
