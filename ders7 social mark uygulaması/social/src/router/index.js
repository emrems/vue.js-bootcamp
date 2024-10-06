import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";



const routes = [
    {
        name : "homePage",
        path : "/",
        component : () => import("@/views/HomeApp.vue"),
    },
    {
        name : "loginPage",
        path : "/login",
        component : () => import("@/views/LoginApp.vue"),

    },
    {
        name : "registerPage",
        path : "/register",
        component : () => import("@/views/RegisterApp.vue"),
    },
    {
        
            name : "NewBookmarkPage",
            path : "/new",
            component : () => import("@/views/NewBookmark.vue"),
        
    },
    {
        
        name : "Favorites",
        path : "/favorites",
        meta:{
            componentName :"appBookmarkList"
        },
        component : () => import("@/views/AccountApp.vue"),
    
    },
    {
        
        name : "Likes",
        path : "/likes",
        meta:{
            componentName :"appBookmarkList"
        },
        component : () => import("@/views/AccountApp.vue"),
    
    },
    {
        
        name : "Settings",
        path : "/settings",
        meta:{
            componentName :"userSettings"
        },
        component : () => import("@/views/AccountApp.vue"),
    
    },

]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})


//kullanıcı başka bir sayfaya geçmeye çalıştığında bu kod bloğu çalışır
router.beforeEach((to , from , next) => {
    const authRequiredRoutes = ["homePage"]// giriş için izin gereken sayfa
    const authNotRequiredRoutes = ["loginPage","registerPage"]//giriş için izne gerek olmayan sayfalar
    const _isAuthenticated = store.getters._isAuthenticated//buradan true yada false dönecek giriş yapmasına göre
    //eğer login olmuşsa birdaha login ve register sayfalarına yönlendirme yasak
    if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false)


    if(authRequiredRoutes.indexOf(to.name) > -1 ){
        if(_isAuthenticated) next()
        else next({name : "loginPage"})    
    }else{
        next()
    }
})
export default router