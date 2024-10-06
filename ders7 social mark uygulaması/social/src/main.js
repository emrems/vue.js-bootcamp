import { createApp } from 'vue'
import App from './App.vue'
import index from './router'
import store from "./store"
import "@/assets/style.css"
import appHeader from "@/components/shared/appHeader"
import appBookMarkList from "@/components/shared/appBookMarkList/ListIndexComponent.vue"
import appAxios  from "@/utils/appAxios"


const app = createApp(App)
app.component("appHeader",appHeader)//bu headeri çoğu yerde kullanıcaz bu yüzden global olarak import ediyoruz ve istediğim yerde <appHeader/> olarak kullanabilirm ve appHeader.js içeriğini aktarmış olurum
app.component("appBookMarkList",appBookMarkList)
app.use(index)//bu aslında router
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$log = console.log
app.mount('#app')
