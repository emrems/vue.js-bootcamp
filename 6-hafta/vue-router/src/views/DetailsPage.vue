<template>
    <div>
        <h1>{{ $route.params.userID }}</h1>
        <p>açıklamalar burdan yapılacak</p>
        <p> {{ $route.query.isim }}</p>
        <button @click="gotoHome" >geri dön(basıldığında home gidecek)</button>
    </div>
</template>

<script>
export default{
    created(){
        console.log(this.$route)
    },
    methods:{
        gotoHome(){
            this.$router.push("/")
        }
    }

    
}

</script>