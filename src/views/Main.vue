<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forMain"></component>
        </headerAndMenu>
    </div>
</template>

<script>
import headerAndMenu from '@/components/headerAndMenu.vue';
import forMain from '../components/forMain.vue'

export default {
    name: 'main',
    
    components: {
        headerAndMenu,
        forMain
    },

    data() {
        return {
            forMain: 'forMain',
        }
    }
}
</script>

<style scoped>

</style>