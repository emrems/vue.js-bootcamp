<template>
  <div class="container">
    <h3 class="text-center">TodoList</h3>
    <hr class="my-2">
    <addSection  :addNewTodo="addNewTodo"   /><!--burda addNewTodo isimlerinin aynı olmasını ben istedim istesem soldakini değiştirebilirim-->
    <!--<input @keydown.enter="addNewTodo" placeholder="bir şeyler yaz" type="text"  id="todoText">
        <label for="todoText"></label> bu eklme kısmmı hep sabit bunu bir component yapabilirz. addSection isimlil bir vue dosyasına yapıştırcaz-->
    <todoList @delete-todo-item="deleteItem" :myData="todoList"/><!-- myData burda href gibi ibr şey yani bir attribute-->
    <!-- <ul>
      
      <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">sil</button>
      </li>
     </ul> aynı şekilde burası da sabit burayı da bir component yapıcam -->
     <resultBar :itemCount="todoList.length"/>
    <!-- <small class=" mt-2 d-flex justify-content-end green">{{ todoList.length }} adet todo var</small> burayı da component yapıyoruz -->

  </div>
</template>

<script>
import addSection from"@/components/addSection";
import todoList from "@/components/todoList";
import resultBar from "@/components/resultBar";
export default{
  components:{
    addSection:addSection,
    todoList:todoList,
    resultBar:resultBar
  },
  data(){
    return{
      todoList:[
        {id:1, text:"bootcamp1"},
        {id:1, text:"bootcamp2"},
        {id:1, text:"bootcamp3"},
        {id:1, text:"bootcamp4"},
        {id:1, text:"bootcamp5"},
        {id:1, text:"bootcamp6"},
      ],
    };
  },
  methods:{
    deleteItem(todoItem){
      this.todoList = this.todoList.filter(t => t !== todoItem)//silinecek olan todoları yeniden array olarak dondruru
    },
    addNewTodo(todo){//yukarıdaki inputta keydown.enter dediğim zaman bana bir tane event fırlatıcak onu burda yakalayıp kullanıcının girdiği değeri yakalıyroum
      this.todoList.push({
        id: this.todoList.length + 1,
        text:todo,//todonun textine kullanıcadan aldığımız değeri veriyoruz 
        });
      },
    testEvent(data){
      alert(data);
    },

  }
};
</script>