export default{
    state :{
        contactName : "puresol",
        contactAdress :  "kanada"
    },
    mutations:{
        setItem(state,name){
            state.contactName=name
        }
    },
    getters:{
        _contactName(state){
            return state.contactName
        }
    }
}