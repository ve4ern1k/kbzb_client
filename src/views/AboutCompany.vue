<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forAboutCompany"></component>
        </headerAndMenu>
    </div>
</template>

<script>
    import headerAndMenu from '@/components/headerAndMenu.vue';
    import forAboutCompany from '../components/forAboutCompany.vue'

    export default {
        name: 'aboutCompany',
        
        components: {
            headerAndMenu,
            forAboutCompany
        },

        data() {
            return {
                forAboutCompany: 'forAboutCompany',
            }
        }
    }
</script>

<style scoped>

</style>