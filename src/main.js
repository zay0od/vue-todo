import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';


createApp(App).use(store).use(BootstrapIconsPlugin).mount('#app')
