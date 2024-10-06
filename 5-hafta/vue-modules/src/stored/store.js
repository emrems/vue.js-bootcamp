import  { createStore }  from "vuex"
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store = createStore({
    namespaced:true,
    state: {
        mainName : "kablosuzKedi"
    },
    modules :{
        contact:contact,
        taskmanager:taskmanager
    }
})

export default store;