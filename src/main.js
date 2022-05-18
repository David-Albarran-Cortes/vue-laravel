import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.js';





axios.defaults.baseURL = "https://cursos-prueba.tk/api/v2"

axios.defaults.withCredentials = true;

const app = createApp(App)
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(store);
app.use(router);

app.mount('#app')