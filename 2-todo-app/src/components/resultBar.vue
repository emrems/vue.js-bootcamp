<template>
    <!-- <small class=" mt-2 d-flex justify-content-end green">{{ todoList.length }} adet todo var</small> -->
    <small class=" mt-2 d-flex justify-content-end green"> {{ itemCount}} adet todo var</small>
</template>
<script>
    export default{
        props:["itemCount"]
    }
</script>