<template>
  <!-- bu kısım itemlerin sıralandığı sayfa gibi düşünülebilir-->
     <div>
        <div class="p-2 grid grid-cols-8 gap-4">
          <BookmarkListİtem v-for="item in items" :key="item.id" :item="item"/>
        </div>
      </div>
</template>
<script>
import BookmarkListİtem from "./BookmarkListİtem"
export default{
    components:{
        BookmarkListİtem
    },
    props :{
      items : {
        type : Array,
        required : true,
        default : () => [],

      }

    }
}
</script>

