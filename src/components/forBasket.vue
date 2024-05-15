<<template>
    <div>
        <div style="margin: 32px 0px 64px; display: flex; justify-content: space-between;">
            <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px; margin-bottom: 0px;">Корзина</p>
            <div style="display: flex; align-items: center;">
                <v-btn
                    color="red"
                    style="color: white; margin-left: 16px;"
                    @click="clearBasket"
                >Очистить корзину</v-btn>
                <v-btn
                    color="success"
                    style="color: white; margin-left: 16px;"
                    @click="orderDialogOpen"
                >Оформить заказ</v-btn>
            </div>
        </div>

        <div style="display: flex; align-items: center; width: 100%; justify-content: center; margin-bottom: 120px;">
            <v-data-table
                :headers="headers"
                :items="$store.getters.basket"
                hide-default-footer
                :items-per-page="1000"
                no-data-text="Сейчас корзина пуста"
            >
                <template v-slot:item.actions="{ item }">
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <v-btn
                            icon
                            color="primary"
                            @click="decrementCounter(item)"
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
                        >
                            <v-icon>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </div>
                </template>

                <template v-slot:item.img="{ item }">
                    <div style="display: flex; justify-content: center;">
                        <v-img :src="item.img" width="200px" style="margin: 20px;"></v-img>
                    </div>
                </template>
            </v-data-table>
        </div>

        <v-dialog v-model="orderDialog" max-width="800px" persistent>
            <v-container style="background-color: white; padding: 25px 100px; max-width: 100%">
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                    <p style="font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600; text-wrap: wrap; margin-bottom: 32px;">Введите контактные данные</p>
                </div>

                <div style="display: flex; flex-direction: column;">
                    <v-text-field
                        v-model="orderInfo.customer"
                        label="Заказчик (ИП / наименование организации)"
                        clearable
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="orderInfo.phone"
                        label="Телефон"
                        clearable
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="orderInfo.email"
                        label="E-mail"
                        clearable
                        outlined
                    ></v-text-field>
                </div>

                <div style="display: flex; justify-content: space-evenly; width: 100%;">
                    <v-btn color="red" style="color: white;" @click="orderDialogClose">Закрыть</v-btn>
                    <v-btn color="#263575" style="color: white;" @click="createOrder">Отправить</v-btn>
                </div>
            </v-container>
        </v-dialog>

        <v-snackbar timeout="-1" color="success" v-model="snackbarSuccess">
            <span style="margin-right: 30px;">Заказ успешно создан. Скоро с вами свяжется менеджер. Код заказа: {{ orderCode }}.</span>

            <v-icon @click="snackbarSuccess = false" color="white" style="height: 50px; width: 50px; position: absolute; right: 0; top: 50%; transform: translateY(-50%);">
                mdi-close
            </v-icon>
        </v-snackbar>
        <v-snackbar timeout="2500" color="red" v-model="snackbarError">Заполните корзину для оформления заказа</v-snackbar>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';

export default {
    name: 'forMain',

    data() {
        return {
            headers: [
                {
                    text: 'Наименование',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Категория',
                    align: 'start',
                    sortable: false,
                    value: 'category'
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
                    text: 'Описание',
                    align: 'start',
                    sortable: false,
                    value: 'description'
                },
                {
                    text: 'Изображение',
                    align: 'center',
                    sortable: false,
                    value: 'img'
                },
                {
                    text: 'Цена за ед.',
                    align: 'start',
                    sortable: false,
                    value: 'cost'
                },
                {
                    text: 'Количество',
                    align: 'center',
                    sortable: false,
                    value: 'actions'
                }
            ],
            orderDialog: false,
            orderInfo: {
                customer: '',
                phone: '',
                email: '',
                structure: []
            },
            orderCode: '',
            snackbarSuccess: false,
            snackbarError: false,
        }
    },

    methods: {
        decrementCounter(item) {
            if (item.counter > 0) {
                item.counter--;
                this.$store.commit('deleteBasket', item);
                this.$store.commit('updateBasket', this.$store.getters.basket)
            }
        },
    
        incrementCounter(item) {
            item.counter++;
            this.$store.commit('addBasket', item);
            this.$store.commit('updateBasket', this.$store.getters.basket)
        },
    
        clearBasket() {
            this.$store.commit('clearBasket');
        },

        orderDialogOpen() {
            if (this.$store.getters.basket.length) {
                this.orderDialog = true;
            }
            else {
                this.snackbarError = true;
            }
        },

        orderDialogClose() {
            this.orderDialog = false;
            this.orderInfo = {};
        },

        async createOrder() {
            this.$store.getters.basket.map(el => {
                const obj = {};
                obj.id = el.id;
                obj.count = el.counter;
                this.orderInfo.structure.push(obj);
            })

            const url = `/internal/order/create`;
            const query = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.orderInfo)
            };

            await fetch(url, query)
                .then(async (response) => {
                    if (response.status !== 200) {
                        throw response.error;
                    }
                    else {
                        const jsonBody = await response.json();
                        
                        if (!jsonBody.error) {
                            this.orderDialog = false;
                            this.$store.commit('clearBasket');
                            this.orderInfo = {
                                customer: '',
                                phone: '',
                                email: '',
                                structure: []
                            }
                            this.orderCode = jsonBody.data.code;
                            this.snackbarSuccess = true;
                        }
                    }
                });
        }
    }
}
</script>

<style scoped>

* {
    text-decoration: none;
}

</style>