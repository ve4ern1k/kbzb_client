<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Пескобетон</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product6.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: center;">
                <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em;">Смеси этого типа просты как в производстве, так и в использовании, причем в обоих случаях они являются выгодными в экономическом плане. Согласно классификации государственного стандарта ГОСТ 7473-94 «Смеси бетонные. Технические условия», пескобетон относится к мелкозернистым бетонным смесям (БСМ), а по назначению – к конструкционным бетонам и обладает характеристиками, указанными в табличных данных.</p>
            </div>

            <div style="display: flex; align-items: center; width: 100%;">
                <v-data-table
                    :headers="headers"
                    :items="sandConcreteTypes"
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
            </div>
        </div>

        <ordersCasesDialog ref="dialog"></ordersCasesDialog>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import ordersCasesDialog from '../components/ordersCasesDialog.vue'

export default {
    name: 'sandConcrete',

    components: {
        ordersCasesDialog
    },
    
    data() {
        return {
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
                    value: 'description'
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
            sandConcreteTypes: []
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
                        if (el.name === 'Пескобетон') {
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
                    this.sandConcreteTypes = jsonBody.data.products;
                    this.sandConcreteTypes.map(el => {
                        el['counter'] = 0;
                        el['description'] = el.data.description;
                        el['buttonsDisabled'] = false;
                    })
                }
            });

        this.$store.state.basket.map(elStore => {
            this.sandConcreteTypes.map(elHere => {
                if ((elStore.id === elHere.id) && (elStore.category === 'Пескобетон')) {
                    elHere.counter = elStore.counter;
                    elHere.buttonsDisabled = true;
                }
            })
        })

        this.sandConcreteTypes = [...this.sandConcreteTypes];
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                this.$set(item, 'counter', item.counter - 1);
                this.$store.commit('deleteBasket', item);
                this.sandConcreteTypes = [...this.sandConcreteTypes];
            }
        },

        incrementCounter(item) {
            this.$set(item, 'counter', (item.counter || 0) + 1);
            item['category'] = 'Пескобетон';
            this.$store.commit('addBasket', item);
            this.sandConcreteTypes = [...this.sandConcreteTypes];
        },

        openOrdersCasesDialog() {
            this.$refs.dialog.visible = true;
        }
    }
}
</script>

<style scoped>

</style>