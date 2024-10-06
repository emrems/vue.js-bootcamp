<template>
  
 <div class="container">
  <div class="mb-2">
    <router-link class="nav-link" active-class="active" to="/">
    Ana Sayfa
  </router-link>

  <router-link class="nav-link" active-class="active" to="/hakkimda">
    Hakkımda
  </router-link>

  <router-link class="nav-link" active-class="active" to="/detay/43">
    Detay
  </router-link>
  </div>
  <router-view></router-view>
 </div>
</template>

<style>
.nav-link{
  padding: 5px,10px;
  text-decoration: none;
  color: #fa6558;
  margin-right: 5px;
  border: 2px solid #fa6558;

}

.active{
  background-color:#fa6558 ;
  color:#fff
}
</style>