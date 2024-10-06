import { createApp } from 'vue'
import App from './App.vue';
import "@/assets/style.css";
import appHeader from '@/components/appHeader';

const app =createApp(App);
app.component("app-header",appHeader);//app-header ismiyle kullanacağım nerde kullanacaksam. Değeri ise appHeader'dan geliyor appHeader ise .vue uzantılı bir dosya components klasörü içinde

app.mount('#app');
