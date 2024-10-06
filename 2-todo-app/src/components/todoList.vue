<template>
    <ul>
      <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">sil</button>
      </li> -->
      
      <todoListItem @delete-todo-item="$emit('delete-todo-item',$event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>
     
      <!-- <li class="d-flex justify-content-between align-items-center">
        <span>todoİtem</span>
        <button class="sm red">sil</button>
      </li> büyük projelerde bu kısım da sabit olabilir bu yüzden burayı da componenet yapıyoruz. aslında component içinde component yapııyoruz -->
     </ul>
</template>
 
<script> 
import todoListItem from "@/components/todoListItem";
export default {
    props:["myData"],
    // props:{ propsun iki şekilde kullanım syntaxı var
    //   myData:{
    //     type:String,
    //     required:false,
    //     default:""

    //   }
    // },
    components:{
        todoListItem:todoListItem
    }
}
</script>