<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forProducts"></component>
        </headerAndMenu>
    </div>
</template>

<script>
    import headerAndMenu from '@/components/headerAndMenu.vue';
    import forProducts from '../components/forProducts.vue'

    export default {
        name: 'products',
        
        components: {
            headerAndMenu,
            forProducts
        },

        data() {
            return {
                forProducts: 'forProducts',
            }
        }
    }
</script>

<style scoped>

</style>