<template>
  <button @click="add">ekle</button>
</template>

<script>
export default {
  methods: {
    add() {
      const newData ={ id: 7,title: "item7", type: "mobilya"}
      //newItem adında bir mutations var onaa NewData objesini ekle
      //this.$store.commit('newItem',newData)
      this.$store.dispatch("newItem",newData)
    },
  },
};
</script>
