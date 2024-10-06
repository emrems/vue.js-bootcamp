const app = Vue.createApp({
    data(){
        return{
            search:"",
            itemList:["elma","armut","kiraz"],
            //filteredList:[],
        };
    },
    methods:{
        searchList(){
           // this.filteredList = this.itemList.filter(i=>i.includes(this.search));//search'e gelen kelimeye göre itemlist içinde filtreleme yapıyor
            
        }
    },
    computed : {
        filteredList(){
            return  this.itemList.filter(i=>i.includes(this.search));
        }
    }
}).mount("#app")