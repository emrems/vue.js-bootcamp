import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "emre",
      lname: "almamış",
      age: 25,
      adress: {},
      password: 3232,
      tc: 11111,
    },
    theme: "dark",
    fullName: "suna almamıs",
    permissions: [1, 3, 4, 5, 6],
    userList: ["emre", "ali", "ahmet"],
    itemList: [
      { id: 1, title: "item1", type: "mobilya" },
      { id: 2, title: "item2", type: "elektronik" },
      { id: 5, title: "item5", type: "mobilya" },
      { id: 3, title: "item3", type: "masa" },
      { id: 4, title: "item4", type: "sandalye" },
    ],
  },
  getters: {
    //getter içine fonksiyonlar alır ama template üzerinde erişmeye çalışıldığında değişken gibi davranır.
    // getterın amacı state içindeki bilgileri direkt state üzerinden değilde bilgileri buraya alıp işleyip template üzerinde kullanmak için
    woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
  // mutations anlık olarak state'i günceller
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    //2sn sonra ekleme yapacaktır
    newItem(context, item) {
      setTimeout(() => {
        context.commit("newItem", item);
      }, 2000);
    },
  },
});
//uygulama boyunca person theme permissions özelliklerine ulaşabileceğim

export default store;
