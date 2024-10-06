<template>
  
  <!-- <AppModel :onSave="onSave" :title="'modal title'" :content="'modal ipsum falan filan'"/> -->
  <AppModel :onSave="onSave">
    <template #title>
      <h3>slot ile gelen slot bilgisi bu title</h3>
    </template>
    <template #content>
      <p>slot ile gelen slot bilgisi bu content</p>
    </template>
    <template #default>
      <p>bu kısım default olarak gösterilecek</p>
    </template>
      
  
  </AppModel>
</template>

<script>
import AppModel from "@/components/AppModel"
  export default{
    components: {
      AppModel:AppModel
    },
    methods:{
      onSave(){
        alert("kayıt oldu")
      }
    }

  }
</script>