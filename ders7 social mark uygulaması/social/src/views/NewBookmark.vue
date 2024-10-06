<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
      <input v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
      <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
      <select v-model="userData.categoryId" class="input mb-3">
        <option disabled value="" selected>kategori</option>
        <option v-for="category in categoryList" :key="category.id"  :value="category.id"  selected>{{category.name}}</option>
        
      </select>
      <textarea v-model="userData.description"  placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button @click="$router.push({name:'homePage'})"  class="secondary-button">İptal</button>
        <button @click="onSave" class="default-button">Kaydet</button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      //categoryList değişkenini oluşturmamdaki neden ddb.jsondaki verileri buraya atıp template üzerinde  kullanmak
      categoryList : [],
      //userData eklenecek bookmarkların özelliklerini barındırıyor
      userData :{
        title : null,
        url : null,
        categoryId : null,
        description : null
      }
    }
  },
  //mounted kısmına yazmamızın sebebi tamamen doma entegre eddilmiştir artık apilere istek atılabilir herşey hazır demek
  mounted(){
    this.$appAxios.get("/categories").then(category_response =>{
      console.log(category_response)
      this.categoryList = category_response?.data || []
      
    })
  },
  methods :{
    onSave(){
      //console.log(this.userData)
      //console.log(this._getCurrentUser)
      const saveData = {
        ...this.userData,//userDatadaki tüm bilgileri al
        userId : this._getCurrentUser.id,//bu ise login olmuş kullanıcının idsi
        created_at : new Date()
      }
      this.$appAxios.post("/bookmarks",saveData).then(bookmarks_response =>{
        console.log(bookmarks_response)
        //formu temizledim
        Object.keys(this.userData)?.forEach(field => (this.userData[field] =null))
        this.$router.push({name : "homePage"})
      })
    }
  },
  computed :{
    // storedan kullanıcı bilgilerini al
    ...mapGetters(["_getCurrentUser"])
  }

}
</script>