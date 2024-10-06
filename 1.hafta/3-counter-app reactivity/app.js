const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
        };
    },
    //! normalde sayaç için uzun hali bu ancak tek satılık kod olduğu için template içine yedirebiliriz
    // methods:{
    //     decr(){
    //         this.counter+=1
    //     },
    //     incr(){
    //         this.counter-=1
    //     }
    // }
    methods:{},
    computed:{///data ve methods gibi bir keydir.Method gibi tanımlana değişken gibi davranır
        //! burada işin esprisi aşağıdaki methodları aslında bir değişken gibi kullandım computed içineki bilgilerin değişiminde bir değer döndürmek zorunda ama watch değer dönmek zorund dğil 
        getCounterResult(){
            console.log("counter1 çalıştı");
            return this.counter>5 ? 'büyük': 'küçük'    
            },

        getCounterResult2(){
            console.log("counter2 çalıştı");
            return this.counter2>5 ? 'büyük': 'küçük'    
            }
    },
    watch:{//data ve computeddeki bir bilgiyi direk inceleyebiliyoruz
        counter(newValue,oldValue){//counteri direkt ismiyle alabildik this kullanmadık
            console.log(oldValue + "->"+newValue);
        },
        getCounterResult(newValue,oldValue){
            console.log("result:",oldValue + "->"+newValue);
        }
    }
}).mount("#app")