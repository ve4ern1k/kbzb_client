<template>
    <div style="margin-bottom: 104px;">
        <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 32px;">{{ title }}</p>

        <div v-if="imgLeft" style="display: flex;">
            <v-img :src="img" style="width: 590px; margin-right: 32px; border-radius: 4px;"></v-img>

            <ul style="display: flex; flex-direction: column;">
                <li v-for="(listString, index) in structure" :key="index" style="margin-bottom: 32px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px;">{{ listString }}</li>
            </ul>
        </div>

        <div v-else style="display: flex;;">
            <ul style="display: flex; flex-direction: column;">
                <li v-for="(listString, index) in structure" :key="index" style="margin-bottom: 32px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px;">{{ listString }}</li>
            </ul>

            <v-img :src="img" style="width: 590px; margin-left: 32px; border-radius: 4px;"></v-img>
        </div>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';

export default {
    name: 'historyBlock',

    props: {
        imgLeft: {
            type: Boolean,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        structure: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>