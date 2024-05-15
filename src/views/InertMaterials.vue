<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Инертные материалы</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product4.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <div style="display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center;">
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; align-items: center; margin-bottom: 16px;">
                            <p style="margin-bottom: 0px; font-size: 24px; font-family: 'Source Sans Pro'; font-weight: 400;">Песок строительный</p>
                        </div>
                        
                        <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-wrap: wrap; text-indent: 1.5em;">
                            Сыпучий нерудный материал, который используется практически при любых строительных работах и является самым недорогим материалом, поскольку добывается открытым способом в карьерах. Карьерный песок – имеет широчайший диапазон применения, от кладочных и штукатурных работ до тяжёлого бетона, благоустройства территорий, ландшафтного дизайна, дорожных работ, обратной засыпки котлована и в качестве подушки под фундаментные плиты.
                        </p>
                    </div>
    
                    <v-avatar size="128" style="margin-left: 16px;">
                        <img src="/inertMaterials.jpg" />
                    </v-avatar>
                </div>
    
                <div style="display: flex; width: 100%;">
                    <v-data-table
                        :headers="headers"
                        :items="sandTypes"
                        hide-default-footer
                        style="width: 100%;"
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
                </div>
            </div>
        </div>

        <ordersCasesDialog ref="dialog"></ordersCasesDialog>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/300.css';
import ordersCasesDialog from '../components/ordersCasesDialog.vue'

export default {
    name: 'inertMaterials',

    components: {
        ordersCasesDialog
    },

    data() {
        return {
            headers: [
                {
                    text: 'Погрузка',
                    align: 'start',
                    sortable: false,
                    value: 'name',
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
            sandTypes: []
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
                        if (el.name === 'Инертные материалы') {
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
                    this.sandTypes = jsonBody.data.products;
                    this.sandTypes.map(el => {
                        el['counter'] = 0;
                        el['buttonsDisabled'] = false;
                    })
                }
            });

        this.$store.state.basket.map(elStore => {
            this.sandTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Инертные материалы')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.sandTypes = [...this.sandTypes];
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                this.$set(item, 'counter', item.counter - 1);
                this.$store.commit('deleteBasket', item);
                this.sandTypes = [...this.sandTypes];
            }
        },

        incrementCounter(item) {
            this.$set(item, 'counter', (item.counter || 0) + 1);
            item['category'] = 'Инертные материалы';
            this.$store.commit('addBasket', item);
            this.sandTypes = [...this.sandTypes];
        },

        openOrdersCasesDialog() {
            this.$refs.dialog.visible = true;
        }
    }
}
</script>

<style scoped>

</style>