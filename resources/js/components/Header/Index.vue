<template>
    <div class="flex items-center justify-center container mx-auto py-3">
    <logo-component></logo-component>
    <search-component></search-component>
   

    </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
import SearchComponent from './SearchComponent.vue'


    export default {
        components:{
            LogoComponent,
            SearchComponent,
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>