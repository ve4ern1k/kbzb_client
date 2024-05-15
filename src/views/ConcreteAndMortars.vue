<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Бетон, растворы</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product5.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center;">
                <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em;">«ООО Комбинат «Братскжелезобетон» предлагает к поставке товарный бетон и раствор. Поставка осуществляется собственными автобетоносмесителями объемом от 2,5 м&#179; до 8 м&#179; в пределах г. Братск и прилегающим территориям в радиусе 150 км. Для удобства клиентов отгрузка осуществляется с двух бетонно-смесительных узлов, общей мощностью 600 м&#179; за рабочую смену.</p>
                <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em;">Поставка товарного бетона и раствора производится круглогодично. Современное отделение добавок позволяет применять в производстве бетонных и растворных смесей инновационные модифицирующие добавки, позволяющих улучшить качество бетонной смеси, а в зимнее время использовать противоморозные добавки.</p>
            </div>

            <v-card style="margin-top: 100px; width: 100%;">
                <v-tabs
                    v-model="section"
                    centered
                    color="#263575"
                >
                    <v-tab>
                        Растворы
                    </v-tab>
    
                    <v-tab>
                        Бетон
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="section">
                    <v-tab-item>
                        <v-data-table
                            :headers="headers"
                            :items="mortarsTypes"
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

                    <v-tab-item>
                        <v-data-table
                            :headers="headers"
                            :items="concreteTypes"
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
    name: 'concreteAndMortars',

    components: {
        ordersCasesDialog
    },
    
    data() {
        return {
            section: 0,
            headers: [
                {
                    text: 'Марка',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Описание',
                    align: 'start',
                    sortable: false,
                    value: 'description',
                },
                {
                    text: 'Цена за куб. м;',
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
            mortarsTypes: [],
            concreteTypes: []
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
                        if (el.name === 'Бетон, растворы') {
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
                    this.mortarsTypes = jsonBody.data.categories[0].products;
                    this.mortarsTypes.map(el => {
                        el['counter'] = 0;
                        el['description'] = el.data.description;
                        el['size'] = el.data.size;
                        el['buttonsDisabled'] = false;
                    })
                    this.concreteTypes = jsonBody.data.categories[1].products;
                    this.concreteTypes.map(el => {
                        el['counter'] = 0;
                        el['description'] = el.data.description;
                        el['size'] = el.data.size;
                        el['buttonsDisabled'] = false;
                    })
                }
            });

        this.$store.state.basket.map(elStore => {
            this.mortarsTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Бетон, растворы')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.$store.state.basket.map(elStore => {
            this.concreteTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Бетон, растворы')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.mortarsTypes = [...this.mortarsTypes];
        this.concreteTypes = [...this.concreteTypes];
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                this.$set(item, 'counter', item.counter - 1);
                this.$store.commit('deleteBasket', item);
                this.mortarsTypes = [...this.mortarsTypes];
                this.concreteTypes = [...this.concreteTypes];
            }
        },

        incrementCounter(item) {
            this.$set(item, 'counter', (item.counter || 0) + 1);
            item['category'] = 'Бетон, растворы';
            this.$store.commit('addBasket', item);
            this.mortarsTypes = [...this.mortarsTypes];
            this.concreteTypes = [...this.concreteTypes];
        },

        openOrdersCasesDialog() {
            this.$refs.dialog.visible = true;
        }
    }
}
</script>

<style scoped>

</style>