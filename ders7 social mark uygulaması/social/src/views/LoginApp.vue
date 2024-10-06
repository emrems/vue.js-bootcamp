<template>
  <div class="login_register_container">
    {{ $store.getters._saltKey }}
    <h3 class="text-2xl text-center mb-3">Giriş yap</h3>
    <input v-model="userData.username"   type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
     
      <router-link :to="{name:'registerPage'}" class="text-red-900 hover:text-black">
         üye olmak istiyorum
        </router-link>
    </span>
  </div>
</template>

<script>
import cryptoJS from "crypto-js"
export default{
  data(){
    return{
      userData :{
        username:null,
        password:null
      }
    }
  },
  methods :{
    onSubmit(){
      const password = cryptoJS.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();//burda şifreleme işlemi yapılıyor
      //register edilmiş şifreler içinden uyanları al
      this.$appAxios.get(`users?username=${this.userData.username}&password=${password}`).then(login_response =>{
        //login olan kullanıcıyı state state üzerinde tut
        if(login_response?.data?.length > 0){
          this.$store.commit('setUser',login_response.data[0])//login_response array olarak döndüğüğ için ilk elemanı alıyoruz
          this.$router.push({name:'homePage'})
        }
        else{
          alert("kullanıcı bulunamadı")
        }
        console.log(login_response)
      })

    }
  }
}
</script>
