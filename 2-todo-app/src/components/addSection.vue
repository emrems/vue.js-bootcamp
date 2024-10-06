<template>
   <div>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="handleNewTodo" placeholder="bir şeyler yaz" type="text"  id="todoText">
    </div>

    
</template>

<script>
   export default{
      props:{
         addNewTodo:{type:Function,required:true }
      },
      data(){
         return{
            todoText:""
         }
      },
      methods:{
         // addNewTodo(){
         //    this.$emit("add-todo",this.todoText)//add-todo(bizim kafaya göre verdiğimiz isim) bizim app.vueye gönderdiğimiz eventimiz. $emit bu componentin import edildiği yere(app.vue de import ettim başka yerlerde de import edebiliriz tabi)bilgi aktarımı yapmak için kullanılır this.TodoText ise gönderdiğimiz bilgi
         //    this.todoText = null//tekrar inputu boş bırakıyoruz
         // },
         handleNewTodo(){
            this.addNewTodo(this.todoText)//addNewTodo fonksiyonu ile todoTexti gönder
            this.todoText = null//tekrar inputu boş bırakıyoruz
         }
      },
   };
</script>