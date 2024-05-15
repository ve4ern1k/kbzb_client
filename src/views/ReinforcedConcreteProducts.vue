<template>
    <div style="display: flex; flex-direction: column; margin: 120px 0px">
        <p style="margin-bottom: 32px; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">Железобетонные изделия</p>

        <div style="width: 100%;">
            <div style="float: left; margin: 0px 32px 0px 0px">
                <img src="/product1.jpg" height="300px" style="border-radius: 4px;" />
                <div style="text-align: center; margin: 16px 0px;">
                    <v-btn @click="openOrdersCasesDialog" color="#ED1C24" style="color: white;">Как купить</v-btn>
                </div>
            </div>

            <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap;">Железобетон – искусственный строительный материал, сочетание бетона и стальной арматуры, монолитно соединённых и совместно работающих в конструкции. Термин «железобетон» часто употребляют как собирательное название железобетонных изделий и конструкций. Широкое распространение железобетон в современном строительстве обусловлено его большими техническими и экономическими преимуществами по сравнению с другими материалами. Сооружения из железобетона огнестойки и долговечны, не требуют специальных защитных мер от разрушающих атмосферных воздействий.</p>
            <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap;">Железобетон обладает высокой несущей способностью, хорошо воспринимает статические и динамические (в т. ч. сейсмические) нагрузки. Бетон воспринимает в основном сжимающие усилия, а арматура – растягивающие, бетон также придает жесткость конструкции и защищает арматуру от коррозии.</p>
            <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap;">Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ, а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряженных ЖБК возможно, как правило, только в заводских условиях.</p>
            <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap;">Классификация производимых ООО Комбинат «Братскжелезобетон» железобетонных изделий условно можно разделить на группы, представленные ниже.</p>

            <v-card style="width: 100%;">
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
    name: 'ReinforcedConcreteProducts',

    components: {
        ordersCasesDialog,
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
                        if (el.name === 'Железобетонные иделия') {
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
                    if ((elStore.id === elEnd.id) && (elStore.category === 'Железобетонные изделия')) {
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
            item['category'] = 'Железобетонные изделия';
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