<template>
     <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">kayıt ol</h3>
      <input v-model="userData.username" type="text" placeholder="Tam Ad" class="input mb-3" />
      <input v-model="userData.fullname" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input v-model="userData.password"   type="password" placeholder="Şifre" class="input mb-3" />
      <button @click="onSave" class="default-button">Kayıt ol</button>
      <span class="text-center mt-3 text-sm">
        Zaten Üyeyim,
        <router-link :to="{name:'loginPage'}" class="text-red-900 hover:text-black">
          Giriş Yap
        </router-link>
        
      </span>
    </div>
</template>
<script>
import cryptoJS from "crypto-js"
export default{
  data(){
    return{
      userData : {
        username : null,
        fullname:null,
        password:null
      }
    }
  },
  methods :{
    onSave(){
      //şifreyi kriptoluyoruz
      
      
     
      const password = cryptoJS.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString();
      //db.json dosyasındaki users a post isteği attık
      this.$appAxios.post("/users", { ...this.userData, password}).then(registered_response => {
        console.log(registered_response)
        this.$router.push({name:'homePage'})
      })
      

      // const decryptedPassword = cryptoJS.AES.encrypt(cryptedPassword,key).toString(cryptoJS.enc.Utf8);
      // console.log(decryptedPassword)
    }
  }
}

</script>