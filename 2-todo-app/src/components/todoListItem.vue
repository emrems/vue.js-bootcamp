<template>
  
     <li class="d-flex justify-content-between align-items-center">
        <span>{{item.text}}</span>
        <button @click="$emit('delete-todo-item',item)" class="sm red">sil</button><!--$emit'e verdiğim item propstan gellen item-->
      </li>
</template>
<script>
export default{
  props:["item"],
}
</script>