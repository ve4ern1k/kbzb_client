<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Декоративные изделия</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product3.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center;">
                <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em;">Тротуарная плитка, повсеместно используемая для мощения и в городах, и в частном секторе, привлекает многими характеристиками. Но как человека «встречают по одежке», так и дорожка, прежде всего, привлекает внимание своим видом, а тротуарная плитка ей эту привлекательность обеспечивает.</p>
            </div>

            <v-card style="margin-top: 250px;">
                <v-tabs
                    v-model="section"
                    color="#263575"
                >
                    <v-tab>
                        Без красителя
                    </v-tab>
    
                    <v-tab>
                        С красителем
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="section">
                    <v-tab-item>
                        <v-data-table
                            :headers="headers"
                            :items="slabsWhiteTypes"
                            :items-per-page="100"
                            hide-default-footer
                        >
                            <template v-slot:item.actions="{ item }">
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <v-btn
                                        icon
                                        color="primary"
                                        @click="decrementCounter(item)"
                                        :disabled="item.buttonsDisabled"
                                    >
                                        <v-icon>
                                            mdi-minus
                                        </v-icon>
                                    </v-btn>
                                    <span style="font-size: 1.3em; margin: 0px 4px">{{ item.counter }}</span>
                                    <v-btn
                                        icon
                                        color="primary"
                                        @click="incrementCounter(item)"
                                        :disabled="item.buttonsDisabled"
                                    >
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </div>
                            </template>

                            <template v-slot:item.img="{ item }">
                                <div style="display: flex; justify-content: center;">
                                    <v-img :src="item.img" width="300px" style="margin: 20px;"></v-img>
                                </div>
                            </template>
                        </v-data-table>
                    </v-tab-item>

                    <v-tab-item>
                        <v-data-table
                            :headers="headers"
                            :items="slabsRedTypes"
                            :items-per-page="100"
                            hide-default-footer
                        >
                            <template v-slot:item.actions="{ item }">
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <v-btn
                                        icon
                                        color="primary"
                                        @click="decrementCounter(item)"
                                        :disabled="item.buttonsDisabled"
                                    >
                                        <v-icon>
                                            mdi-minus
                                        </v-icon>
                                    </v-btn>
                                    <span style="font-size: 1.3em; margin: 0px 4px">{{ item.counter }}</span>
                                    <v-btn
                                        icon
                                        color="primary"
                                        @click="incrementCounter(item)"
                                        :disabled="item.buttonsDisabled"
                                    >
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </div>
                            </template>

                            <template v-slot:item.img="{ item }">
                                <div style="display: flex; justify-content: center;">
                                    <v-img :src="item.img" width="300px" style="margin: 20px;"></v-img>
                                </div>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </div>

        <ordersCasesDialog ref="dialog"></ordersCasesDialog>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';
import ordersCasesDialog from '../components/ordersCasesDialog.vue'

export default {
    name: 'decorativeItems',

    components: {
        ordersCasesDialog
    },
    
    data() {
        return {
            section: 0,
            headers: [
                {
                    text: 'Наименование',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Размеры (ед. товара)',
                    align: 'start',
                    sortable: false,
                    value: 'size',
                },
                {
                    text: 'Изображение',
                    align: 'center',
                    sortable: false,
                    value: 'img'
                },
                {
                    text: 'Цена за кв. м',
                    align: 'start',
                    sortable: false,
                    value: 'cost'
                },
                {
                    text: 'Корзина',
                    align: 'center',
                    sortable: false,
                    value: 'actions'
                },
            ],
            slabsWhiteTypes: [],
            slabsRedTypes: [],
        }
    },

    async created() {
        let categories = [];
        let categoryId = null;
        const url = `/internal/product/categories`;
        const query = {
            method: 'GET',
        };

        await fetch(url, query)
            .then(async (response) => {
                if (response.status !== 200) {
                    throw response.error;
                }
                else {
                    const jsonBody = await response.json();
                    categories = jsonBody.data

                    categories.map(el => {
                        if (el.name === 'Декоративные изделия') {
                            categoryId = el.id
                        }
                    })
                }
            });

        const url1 = `/internal/product/category/${categoryId}`;
        const query1 = {
            method: 'GET',
        };

        await fetch(url1, query1)
            .then(async (response) => {
                if (response.status !== 200) {
                    throw response.error;
                }
                else {
                    const jsonBody = await response.json();
                    this.slabsWhiteTypes = jsonBody.data.categories[0].products;
                    this.slabsWhiteTypes.map(el => {
                        el['counter'] = 0;
                        el['img'] = '/' + el.image;
                        el['size'] = el.data.size;
                        el['buttonsDisabled'] = false;
                    })
                    this.slabsRedTypes = jsonBody.data.categories[1].products;
                    this.slabsRedTypes.map(el => {
                        el['counter'] = 0;
                        el['img'] = '/' + el.image;
                        el['size'] = el.data.size;
                        el['buttonsDisabled'] = false;
                    })
                }
            });

        this.$store.state.basket.map(elStore => {
            this.slabsWhiteTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Декоративные изделия')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.$store.state.basket.map(elStore => {
            this.slabsRedTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Декоративные изделия')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.slabsWhiteTypes = [...this.slabsWhiteTypes];
        this.slabsRedTypes = [...this.slabsRedTypes];
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                this.$set(item, 'counter', item.counter - 1);
                this.$store.commit('deleteBasket', item);
                this.slabsWhiteTypes = [...this.slabsWhiteTypes];
                this.slabsRedTypes = [...this.slabsRedTypes];
            }
        },

        incrementCounter(item) {
            this.$set(item, 'counter', (item.counter || 0) + 1);
            item['category'] = 'Декоративные изделия';
            this.$store.commit('addBasket', item);
            this.slabsWhiteTypes = [...this.slabsWhiteTypes];
            this.slabsRedTypes = [...this.slabsRedTypes];
        },

        openOrdersCasesDialog() {
            this.$refs.dialog.visible = true;
        }
    }
}
</script>

<style scoped>

</style>