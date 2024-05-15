<template>
    <v-dialog v-model="visible" max-width="750px">
        <v-container style="background-color: white; padding: 25px 100px; max-width: 100%">
            <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
                <p style="font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">СПОСОБЫ ЗАКАЗА ТОВАРОВ</p>
            </div>

            <div style="display: flex; flex-direction: column;">
                <div v-for="(block, index) in blocks" style="display: flex; align-items: center; width: 100%; margin: 20px 0px;">
                    <v-icon size="70px" style="color: #263575; margin-right: 60px;">
                        {{ block.icon }}
                    </v-icon>

                    <div style="display: flex; flex-direction: column;">
                        <p style="font-size: 24px; font-family: 'Source Sans Pro'; font-weight: 400;">{{ block.title }}</p>
                        <p v-for="(text, index) in block.text" :key="index" style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; margin-bottom: 8px !important;">{{ text }}</p>
                    </div>
                </div>
            </div>
        </v-container>
    </v-dialog>
</template>
  
<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/400.css';

export default {
    name: 'ordersCasesDialog',

    data() {
        return {
            visible: false,
            blocks: [
                {
                    icon: 'mdi-phone-outgoing',
                    title: 'ПОЗВОНИТЬ МЕНЕДЖЕРУ',
                    text: [
                        '8 (3953) 409-636 ЖБИ, ДЕКОРАТИВНЫЕ ИЗДЕЛИЯ',
                        '8 (3953) 409-900 БЕТОНЫ, РАСТВОРЫ, ИНЕРТНЫЕ МАТЕРИАЛЫ'
                    ]
                },
                {
                    icon: 'mdi-earth',
                    title: 'НАПИСАТЬ НА ПОЧТУ',
                    text: [
                        'PTO@KBZB.RU ЖБИ, ДЕКОРАТИВНЫЕ ИЗДЕЛИЯ',
                        'OR@KBZB.RU БЕТОН, РАСТВОРЫ, ИНЕРТНЫЕ МАТЕРИАЛЫ'
                    ]
                },
                {
                    icon: 'mdi-map-marker',
                    title: 'ПРИЙТИ К НАС В ОФИС',
                    text: [
                        'Иркутская область, г.Братск, Единая база КБЖБ, Промышленная, 22'
                    ]
                },
                {
                    icon: 'mdi-basket-plus-outline',
                    title: 'ОФОРМИТЬ ЗАКАЗ НА САЙТЕ',
                    text: [
                        'После заполнения корзины в разделе "Продукция" в корзине вам будет предложено оформить заказ. После этого с вами свяжется наш менеджер по указанным вами данным.'
                    ]
                }
            ]
        };
    }
};
</script>