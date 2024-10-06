<template>
    <div class="my-2">
      <input v-model="todoText" type="text" placeholder="ne alacan" @keydown.enter="onSave">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      onSave: {
        type: Function, // `Function` türü burada doğru bir kullanımdır
        required: true
      }
    },
    data() {
      return {
        todoText: '' // `null` yerine başlangıç değeri olarak boş string kullanabilirsiniz
      };
    },
    
  }
  </script>
  