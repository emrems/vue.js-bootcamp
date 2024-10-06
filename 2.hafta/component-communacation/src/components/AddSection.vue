<template>
    <button @click="newItem(new Date().getTime())">set data</button>
</template>

<script>
    export default{
        inject:["newItem"]
    }
</script>