const app = Vue.createApp({
    data(){
        return{
            todoList:[
                {id:1, text:"todo1" ,completed:false},
                {id:2, text:"todo2" ,completed:false},
                {id:3, text:"todo3" ,completed:false},
                {id:4, text:"todo4" ,completed:false},
                {id:5, text:"todo5" ,completed:false}

            ],
        };
    },
    methods :{
        addTodo(event){
           this.todoList.push({
            id:new Date().getTime(),
            text:event.target.value,
            completed:false
           })
           event.target.value = ""
        },
        removeİtem(todoItem){//todoItem silinecek olan todo
            this.todoList = this.todoList.filter(todo => todo !== todoItem)//todolisti güncelliyor.TodoList içinde geziyor (her birini todo olarak alıyor).Eğer todo TodoItem eşit değilse yeni bir dizi oluşturup atıyor
        }
    },
    computed:{

        completedItemCount(){
            return this.todoList.filter(todo => todo.completed).length//completed true dönenlerin sayısını alır
        },
        unCompletedItemCount(){
            return this.todoList.filter(todo => !todo.completed).length
        }
    }
    
}).mount("#app") 