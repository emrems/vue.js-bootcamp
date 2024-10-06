<template>
  <div>
    <ul>
      <li v-for="item in woodItems" :key="item">
        {{ item.title }}
      </li>
    </ul>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["woodItems"]),
  },
};
</script>
