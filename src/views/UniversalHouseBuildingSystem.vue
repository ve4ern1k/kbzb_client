<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Универсальная домостроительная система</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product2.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center;">
                <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap;">Основная технологическая идея системы УДС – массовое индустриальное строительство зданий любого назначения с применением сборно-монолитного каркаса, производимого в заводских условиях.</p>
            </div>


            <v-card style="margin-top: 280px; width: 100%;">
                <v-tabs
                    v-model="section"
                    centered
                    color="#263575"
                >
                    <v-tab v-for="(productsGroup, index) in mainProducts" :key="index">
                        {{ productsGroup.category }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="section">
                    <v-tab-item v-for="(productsGroup, index) in mainProducts" :key="index">
                        <v-data-table
                            :headers="headers"
                            :items="productsGroup.products"
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
    name: 'UniversalHouseBuildingSystem',

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
                    text: 'Размеры',
                    align: 'start',
                    sortable: false,
                    value: 'size',
                },
                {
                    text: 'Объём',
                    align: 'start',
                    sortable: false,
                    value: 'volume'
                },
                {
                    text: 'Вес',
                    align: 'start',
                    sortable: false,
                    value: 'weight'
                },
                {
                    text: 'Цена за шт.',
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
            mainProducts: []
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
                        if (el.name === 'Универсальная домостроительная система') {
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
                    
                    this.mainProducts = jsonBody.data.categories;
                    this.mainProducts.map(el1 => {
                        el1['category'] = el1.name;
                        el1.products.map(el => {
                            el['counter'] = 0;
                            el['volume'] = el.data.volume;
                            el['weight'] = el.data.weight;
                            el['size'] = el.data.size;
                            el['buttonsDisabled'] = false;
                        })
                    })
                }
            });

        this.$store.state.basket.map(elStore => {
            this.mainProducts.map(elHere => {
                elHere.products.map(elEnd => {
                    if ((elStore.id === elEnd.id) && (elStore.category === 'Универсальная домостроительная система')) {
                        elEnd.counter = elStore.counter;
                        elEnd.buttonsDisabled = true;
                    }
                })
            })
        })

        this.mainProducts = [...this.mainProducts];
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                this.$set(item, 'counter', item.counter - 1);
                this.$store.commit('deleteBasket', item);
                this.mainProducts = [...this.mainProducts];
            }
        },

        incrementCounter(item) {
            this.$set(item, 'counter', (item.counter || 0) + 1);
            item['category'] = 'Универсальная домостроительная система';
            this.$store.commit('addBasket', item);
            this.mainProducts = [...this.mainProducts];
        },

        openOrdersCasesDialog() {
            this.$refs.dialog.visible = true;
        }
    }
}
</script>

<style scoped>

</style>