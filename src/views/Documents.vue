<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forDocuments"></component>
        </headerAndMenu>
    </div>
</template>

<script>
    import headerAndMenu from '@/components/headerAndMenu.vue';
    import forDocuments from '../components/forDocuments.vue'

    export default {
        name: 'documents',
        
        components: {
            headerAndMenu,
            forDocuments
        },

        data() {
            return {
                forDocuments: 'forDocuments',
            }
        }
    }
</script>

<style scoped>

</style>