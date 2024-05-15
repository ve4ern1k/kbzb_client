<template style="display: flex; height: 100%; width: 100%; margin: 0; padding: 0">
    <div style="width: 100%; min-height: 100%;">
        <headerAndMenu>
            <component :is="forHistory"></component>
        </headerAndMenu>
    </div>
</template>

<script>
import headerAndMenu from '@/components/headerAndMenu.vue';
import forHistory from '../components/forHistory.vue'

export default {
    name: 'history',
    
    components: {
        headerAndMenu,
        forHistory
    },

    data() {
        return {
            forHistory: 'forHistory',
        }
    }
}
</script>

<style scoped>

</style>