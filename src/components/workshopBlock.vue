<template>
    <div style="display: flex; margin-bottom: 120px;">
        <div v-if="imgLeft" style="display: flex; align-items: center;">
            <v-img :src="img" style="width: 590px; margin-right: 32px; border-radius: 4px;"></v-img>

            <div style="display: flex; flex-direction: column;">
                <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 24px;">{{ title }}</p>
                <p v-for="(textBlock, index) in text" :key="index" style="margin: 8px 0px !important; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-wrap: wrap; text-indent: 1.5em;">{{ textBlock }}</p>
                <ul v-if="list">
                    <li v-for="(listString, index) in list" :key="index" style="margin: 8px 0px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px;">{{ listString }}</li>
                </ul>
                <div v-if="button" style="display: block; margin-top: 24px;">
                    <v-btn :to="button.link" color="#263575" style="color: white;">
                        {{ button.name }}
                    </v-btn>
                </div>
            </div>
        </div>

        <div v-else style="display: flex; align-items: center;">
            <div style="display: flex; flex-direction: column;">
                <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 24px;">{{ title }}</p>
                <p v-for="(textBlock, index) in text" :key="index" style="margin: 8px 0px !important; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-wrap: wrap; text-indent: 1.5em;">{{ textBlock }}</p>
                <ul v-if="list">
                    <li v-for="(listString, index) in list" :key="index" style="margin: 8px 0px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px;">{{ listString }}</li>
                </ul>
                <div v-if="button" style="display: block; margin-top: 24px;">
                    <v-btn :to="button.link" color="#263575" style="color: white;">
                        {{ button.name }}
                    </v-btn>
                </div>
            </div>

            <v-img :src="img" style="width: 590px; margin-left: 32px; border-radius: 4px;"></v-img>
        </div>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';

export default {
    name: 'workshopBlock',

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
        text: {
            type: Array,
            required: true
        },
        list: {
            type: Array,
            required: false
        },
        button: {
            type: Object,
            required: false
        }
    }
}
</script>

<style scoped>

</style>