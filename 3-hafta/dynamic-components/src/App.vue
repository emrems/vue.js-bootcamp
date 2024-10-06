<template>
   
   <div class="container">
    <button @click="activeComponent='AppRed'">red</button>
    <button @click="activeComponent='AppGreen'">green</button>
    <button @click="activeComponent='AppBlue'">blue</button>

    <!-- <AppRed v-if="activeComponent=='red'" class="mb-2"/>
    <AppBlue v-if="activeComponent=='blue'" class="mb-2"/>
    <AppGreen v-if="activeComponent=='green'" class="mb-2"/> -->
  
    <component :is="activeComponent"/><!--aktif olan componenti ayarlıyor aşağıdaki component objesinden-->
   </div>
</template>
<script>
import AppRed from "@/components/AppRed"
import AppBlue from "@/components/AppBlue"
import AppGreen from "@/components/AppGreen"
    export default{
        components:{
            AppRed:AppRed,
            AppBlue:AppBlue,
            AppGreen:AppGreen
        },
        data(){
            return{
                activeComponent:"AppRed"
            }
        }
    }
</script>