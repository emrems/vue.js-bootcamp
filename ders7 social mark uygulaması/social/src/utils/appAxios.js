import axios from "axios";

// 'appAxios' tanımını export ederken "default" ifadesini doğru kullanmalısınız.
const appAxios = axios.create({
    baseURL: "http://localhost:3000" // "localsost" yerine "localhost" olmalı
});

// 'appAxios' değişkenini dışa aktarıyoruz
export default appAxios;
