<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forContacts"></component>
        </headerAndMenu>
    </div>
</template>

<script>
    import headerAndMenu from '@/components/headerAndMenu.vue';
    import forContacts from '../components/forContacts.vue'

    export default {
        name: 'contacts',
        
        components: {
            headerAndMenu,
            forContacts
        },

        data() {
            return {
                forContacts: 'forContacts',
            }
        }
    }
</script>

<style scoped>

</style>