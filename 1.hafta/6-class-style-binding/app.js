// bir HTML öğesine dinamik olarak CSS sınıfı eklemek veya kaldırmak için kullanılması
const app = Vue.createApp({
    data(){
        return {
            showBorder:false,
            redBg:false,
            boxClass:"emre green",//burdaki emre benim style.css dosyamdaki .emre classına verdiğim style özellikleri
            bgColor:"cyan",
        }
    },
    computed : {
        boxClasses(){
            return {emre : this.showBorder , green:this.redBg}
        }
    }
}).mount("#app")