<template>
  <div class="contianer">
    <AppTitle/>
    <hr>
    <AppInput :onSave="onSave"/>
    <AppShowItem :itemList="itemList" :onDelete="onDelete"/>
    
    <AppShowLength :itemList="itemList"/>
    
  </div>
</template>

<script>
import axios from "axios";
import AppTitle from "@/components/AppTitle";
import AppInput from "@/components/AppInput";
import AppShowLength from "@/components/AppShowLength";
import AppShowItem from "@/components/AppShowItem";

export default{
  components:{
    AppTitle:AppTitle,
    AppInput:AppInput,
    AppShowLength:AppShowLength,
    AppShowItem:AppShowItem
  },
  data(){
    return{
      itemList:[],
    }
  },
  mounted(){
    axios.get('http://localhost:3000/items').then(items_response=>{
      console.log(items_response);
      this.itemList = items_response.data || []
      console.log('this.itemList:>>',this.itemList)
    })
  },
  methods:{
    onSave(e){//eğer inputa girdiğimiz veriyi almak isteseydik onSave fonksiyonuna e parametresi verip e.target.value yapardık
     const saveObject={
      title:e.target.value,
      created_at:new Date(),
      completed:false
     }
      axios.post("http://localhost:3000/items",saveObject).then(save_response=>{
        console.log(save_response);
        this.itemList.push(save_response.data)
        e.target.value="";
        e.target.focus();
      })
    },
    onDelete(item){//item bir obje
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response=>{
        console.log(delete_response);
        this.itemList = this.itemList.filter(i=>i.id !== item.id)//itemList içindeki her objeyi i olarak gezip id'si silinecek olana eşit olmayanları tekrar bir diziye atıp döndürüyor
      })

    }
  }
}
</script>