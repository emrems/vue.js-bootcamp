<template>
    <ul v-if="itemList.length>0" >
      <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between aliign-item-center">
        <span>{{item.title}}</span>
        <button @click="onDelete(item)" class="sm red">sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue  text-white">
      herhangibir ürün yok
    </div>
</template>

<script>
    export default{
        props:{
        itemList:{
            type:Array,
            required:true
        },
        onDelete:{
            type:Function,
            required:true
        }
    }
    }
</script>