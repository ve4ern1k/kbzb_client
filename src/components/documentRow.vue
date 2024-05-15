<template>
    <div style="width: 100%; margin-bottom: 32px; border-bottom: 2px solid #263575; border-radius: 0 0 6px 0; display: flex; justify-content: space-between; align-items: flex-end;">
        <p style="margin-bottom: 0px !important; padding-left: 10px; text-wrap: wrap; font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300;">{{ row.title }}</p>
        <v-btn color="#263575" @click="handleClick(row.link)" style="color: white;">Скачать</v-btn>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/300.css';

export default {
    name: 'documentRow',

    props: {
        row: {
            type: Object,
            required: true
        }
    },

    methods: {
        handleClick(link) {
            if (link.startsWith('http')) {
                window.open(link, '_blank');
            } else {
                this.$router.push(link);
            }
        }
    }
}
</script>

<style scoped>

</style>