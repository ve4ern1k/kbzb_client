<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forBasket"></component>
        </headerAndMenu>
    </div>
</template>

<script>
    import headerAndMenu from '@/components/headerAndMenu.vue';
    import forBasket from '../components/forBasket.vue'

    export default {
        name: 'basket',
        
        components: {
            headerAndMenu,
            forBasket
        },

        data() {
            return {
                forBasket: 'forBasket',
            }
        }
    }
</script>

<style scoped>

</style>