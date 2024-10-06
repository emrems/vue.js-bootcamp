<template>  
<app-header></app-header><!-- bu benim -->
<div class="container">
  <h3> bu benim ilk vue cli uygulamam</h3>
<p>bu benim ilk vue uygulamamnın paragrafı </p>
</div>
<!--<CounterItem></CounterItem>-->
<benim-sayacım></benim-sayacım>
</template>

<script>
import CounterItem from "@/components/CounterItem";
export default {
  components:{
   // CounterItem:CounterItem,//sol taraftaki CounterItem'ı template içinde kullanıyoruz
   "benim-sayacım":CounterItem
  }
};
</script>
