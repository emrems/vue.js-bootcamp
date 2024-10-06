//!template'i vue.js üzerinden kontrol etme
// 1- string interpolition. string interpolition textcontent'in olduğu yerlerde çalışır. yani her html tagında olmaz
// Vue uygulamasını oluşturma
const app = Vue.createApp({
    data() {
        return {
            title: "vue bootcamp", 
            content:"bizim içeriğimiz",
            eduflow:{
                name:"içerik için lütfen tıklayınız",
                url:"https://sahibinden.com",
                target:"_blank",
                alt:"eduflow",
            },
            coords:{
                x:0,
                y:0,
            }
            
        };
    },
    methods :{
        changeTitle(pTitle){
            this.title = pTitle;//this.title kullanmamın sebebi üstte title'ye ulaşmak için
        },
        updateCoords(message,event){
            this.changeTitle(`${event.x}, ${event.y}`)
            console.log(message,event.x,event.y);
            this.coords = {
                x: event.x,
                y: event.y,
            };
        },

    },
});

// Vue uygulamasını HTML'deki #app sınırları içinde çalışsın
app.mount("#app");
