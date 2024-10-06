const app = Vue.createApp({
    data(){
        return{
            
        }
    }

})

app.component("counter-item",{
    data(){
        return{
            counter:0,
        }
    },
    template:
    `
    <div class="container">
         <h1>{{ counter }}</h1>
        <div class="name">
       
            <button @click="counter++">arttır</button>
            <button @click="counter--">azalt</button>
        </div>
    </div>
    `
    
    
});
app.mount("#app")