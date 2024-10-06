import { createStore } from "vuex"
import createPersistedState from  "vuex-persistedstate"
import SecureLS from 'secure-ls';
var ls = new SecureLS({isCompression:false})


//bütün componentler kullanıcıya ulaşmalı bu yüzden vuex kullandık
//kullanıcı login olduğunda store'a vereceğiz ve her component bunu kullanabilcek 
export default createStore({
    state: {
        user : null,//db.jsondan obje olarak gelecek
        saltKey:"booklike123!456?"
    },
    mutations :{
        setUser(state, user){
            state.user = user; // Kullanıcıyı kaydet
            if (!state.user.likes) {
                state.user.likes = []; // likes dizisi yoksa başlat
            }
        },
        
        logoutUser(state){
            state.user = null//çıkış yapıldığında bilgiler sıfırlanır
        },
        setLikes(state, bookmarkIds){
            // user nesnesinin tanımlı olup olmadığını kontrol edin
            if (!state.user) {
                console.error("User is not defined");
                return; // Kullanıcı tanımlı değilse işlemi sonlandır
            }
        
            // likes dizisinin tanımlı olup olmadığını kontrol edin
            if (!state.user.likes) {
                state.user.likes = []; // Eğer yoksa boş bir dizi olarak başlatın
            }
        
            // Kitap ekle
            state.user.likes = bookmarkIds;
        }
        

    },
    getters :{
        _isAuthenticated : state => state.user !== null,//aouthounticate olduğunu söyleyecek bu kodun açık hali aşağıda

        // _isAuthenticated(state){
        //     const user = state.user
        //     if(user==null){
        //         return false
        //     }
        //     else{
        //         return true
        //     }
        // }


        //passwordü silip useri döndür
        _getCurrentUser(state){
            const user =state.user;
            delete user?.password;//user içinde password varsa sil
            return user;
        },
        _userLikes : state => state.user?.likes || [],
        _userBookmarks : state => state.user?.bookmarks || [],
        _currentUserId :state => state?.user?.id,//like işleminde kullanılacak userid kullanılarak kimin like ettiği belli olacak

        _saltKey:state => state.saltKey//state içinden saltkeye erişim sağladım
    },
    //kullaıcının bilgilerini localstorageye şifreli bir şekilde kaydetme
    plugins : [
        createPersistedState({
            storage:{
                getItem : (key) => ls.get(key),
                setItem : (key,value) => ls.set(key,value),
                removeItem : key => ls.remove(key)
            }
        })
    ]
})