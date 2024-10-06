import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Vuex store'u import ediyoruz
import '@/assets/style.css';

// Vuex'i kontrol etmek yerine, store'un yüklü olup olmadığını kontrol edebiliriz
if (store) {
  console.log("Vuex Store mevcut.");
} else {
  console.log("Vuex Store mevcut değil.");
}

const app = createApp(App);

app.use(store); // Vuex store'u uygulamanıza ekleyin
app.mount('#app');
