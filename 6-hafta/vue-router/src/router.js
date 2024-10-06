import { createRouter, createWebHashHistory } from "vue-router";//createRouter  vue-router paketinden alınmış bir fonksiyondur ve router yapımı sağlar

const routes =[
    {
        name:"anasayfa",//name parametresi hangi rootta olduğunu kontrol eder
        path:"/",
        component : ()=> import("@/views/HomePage.vue")
    },
    {
        name:"hakkımda sayfasi",
        path:"/hakkimda",
        component : ()=> import("@/views/AboutPage.vue")
    },
    {
        name:"detaysayfasi",
        path:"/detay/:userID",
        component : ()=> import("@/views/DetailsPage.vue")
    },
];
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;