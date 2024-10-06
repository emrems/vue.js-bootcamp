<template>
    <div class="container">
        <div class="header">
            <h3> <slot name="title"/> </h3>
        </div>
        
        <hr>
        <div class="content">
            <slot name="content"/>
        </div><hr>
        <slot/>
        <div class="footer text-right">
            <button class="mr-2" >kapat</button>
            <button @click="onSave" class="green">kaydet</button>
        </div>
    </div>
</template>
<script>
    export default{
        props:["onSave"]
    }
</script>