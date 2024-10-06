<template>
  <div class="container">
    <UserLİst />
    <NewUser />
    <!-- <ul>
  <li v-for="eleman in $store.state.itemList" :key="eleman">
      {{ eleman }}
  </li>
 </ul> -->
    <!-- <ul>
  <li v-for="item in $store.getters.woodItems" :key="item">
      {{ item.title }}
  </li>
 </ul> -->
  </div>
</template>

<script>
import UserLİst from "./components/UserLİst.vue";
import NewUser from "./components/NewUser.vue";
export default {
  name: "App",
  components: { UserLİst, NewUser },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
