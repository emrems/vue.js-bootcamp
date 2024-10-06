const app = Vue.createApp({
    data(){
        return{
            valuee:"ilk deneme",
            todoList:[],
            url: "https://çelikmotors.com",
            title:"merhaba vue",
            exampleValue:"bu yeni bir örnke",
            coordinate:{
                cordx:0,
                cordy:0

            },
            value:"",
            newValue:"en yeni",
            counter:0,
            counter2:0,
            itemlist:[]
        }
    },
    methods:{
        getValue(event){
            
            this.todoList.push(this.valuee);
            event.target.value="";
        },
        changeTitle(){
            this.title = "merhaba vue 2"
        },
        showCoordinate(e){
            console.log(e.clientX,e.clientY);
            this.coordinate.cordx = e.clientX;
            this.coordinate.cordy = e.clientY;
        },
        getİnputValue(event){
            this.value = event.target.value;
        },
        add(){
            this.itemlist.push(new Date().getTime());
        }
  
    },
    computed:{
        getResult(){
            console.log("getresult çalıştı");
            return this.counter>0 ? 'pozitif' : this.counter<0 ? 'negatif': 'sıfır'
        },
        getResult2(){
            console.log("getresult2 çalıştı");
            return this.counter2>0 ? 'pozitif' : this.counter2<0 ? 'negatif': 'sıfır'
        }
    },
    watch:{
        counter(newValue,oldValue){//counteri izliyoruz
            console.log(newValue,oldValue);
        },
        itemlist:{//itemlistte yapılacak bir değişiklikte hemen değişiklikler consola yazılıyor
            deep:true,//bu bir özellik derin bir takip yapıyor genelde dizi takibinde kullanılıyor
            handler(itemlist){
                console.log("itemlist=>",itemlist);
            }
        }
    }
}).mount("#app")

