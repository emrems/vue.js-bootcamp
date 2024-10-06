import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"

import { appAxios } from './utils/appAxios'

const app = createApp(App)
app.use(router);
//global olarak axiosu import etmiş oldum
//app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
