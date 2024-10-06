<template>
    
    <div class="container-sm">
        <app-header></app-header>
         <h3 class="mb-2">{{counter}}</h3>
         <button @click="counter++" class="red sm">arttır</button>
        <button @click="counter--" class="green sm">azalt</button>
    </div>
</template>

<script>
export default {//bu kısım template kısmında kullandığım counteri templatede göstermemi sağladı.
    data() {
        return{
            counter: 0
        }
    }
}
</script>