<template>
    <div>
        <ListSection />
        
       <AddSection/>
    </div>
</template>

<script>

import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection";
export default {
    components:{
        ListSection:ListSection,
        AddSection:AddSection
    },
    //props:["userList"],
}
</script>