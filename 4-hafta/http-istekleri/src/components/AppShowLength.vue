<template>
    <small class=" mt-2 text-blue d-flex justify-content-end align-items-center"> {{ itemList.length }} adet ürün vardır</small>
</template>

<script>
    export default{
        props:["itemList"]
    }
</script>