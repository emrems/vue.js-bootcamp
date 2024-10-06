<template>
   <div>
    <h1>home sayfası</h1>
    <input type="text" @keydown.enter="gotoDetails" placeholder="gidilecek yerin id sini yaz">
   </div>
</template>

<script>
export default{
    methods:{
        gotoDetails(e){
            
            //this.$router.push(`detay/${e.target.value}`)
            this.$router.push({name:"detaysayfasi", params:{userID:e.target.value}, query:{type:"detailAuth",user:"emrealmamis"}})//userID router.js de detay sayfasının aldığı parametredir
        }

    }
}

</script>