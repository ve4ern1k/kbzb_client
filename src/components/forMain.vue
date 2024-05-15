<<template>
    <div>
        <iframe
            src="https://www.youtube.com/embed/kafUKAFlDLk?rel=0&controls=0"
            width="100%"
            height="500px"
            frameborder="0"
            style="margin: 32px 0px 120px; border-radius: 4px;"
        ></iframe>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <p style="margin-bottom: 16px !important; font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">Наши преимущества</p>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                <div v-for="(advantage, index) in advantages" :key="index" style="display: flex; flex-direction: column; width: 279px; margin: 16px 0px;">
                    <v-icon size="100" color="#263575" style="margin-bottom: 32px;">{{ advantage.icon }}</v-icon>
                    <span style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-align: center">{{ advantage.text }}</span>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 104px;">
            <p style="margin-bottom: 16px !important; font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">Продукция</p>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                <div v-for="product in productsFirst" :key="product.name" style="display: flex; flex-direction: column; width: 383px; margin: 16px 0px;">
                    <v-img :src="product.picture" style="border-radius: 4px;"></v-img>
                    <span style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-align: center; margin: 20px 24px 30px;">{{ product.name }}</span>
                    <div style="display: flex; justify-content: space-evenly;">
                        <v-btn color="#263575" style="color: white;" :to="product.path">Подробнее</v-btn>
                    </div>
                </div>
                <div v-for="product in productsSecond" :key="product.name" style="display: flex; flex-direction: column; width: 279px; margin: 16px 0px;">
                    <v-img :src="product.picture" style="border-radius: 4px;"></v-img>
                    <span style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-align: center; margin: 20px 24px 30px;">{{ product.name }}</span>
                    <div style="display: flex; justify-content: space-evenly;">
                        <v-btn color="#263575" style="color: white;" :to="product.path">Подробнее</v-btn>
                    </div>
                </div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 104px;">
            <p style="margin-bottom: 16px !important; font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">Новости</p>
            <v-slide-group
                v-model="activeNew"
                show-arrows
            >
                <v-slide-item
                    v-for="(new_, index) in news"
                    :key="index"
                >
                    <v-card
                        class="ma-4"
                        height="375"
                        width="383"
                    >
                        <div style="display: flex; flex-direction: column; height: 100%;">
                            <v-img
                                :src="new_.picture"
                                style="flex-grow: 1; border-radius: 4px 4px 0 0 ;"
                            ></v-img>
                            <div style="display: flex; justify-content: space-between; flex-grow: 1;">
                                <div style="display: flex; flex-direction: column; justify-content: center; margin: 0px 8px; overflow: hidden; white-space: nowrap;">
                                    <p style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 14px; margin-bottom: 0px !important; color: #7E7E7E;">{{ new_.date }}</p>
                                    <v-tooltip bottom color="#263575">
                                        <template v-slot:activator="{ on, attrs }">
                                            <p
                                                style="
                                                overflow: hidden;
                                                white-space: nowrap;
                                                text-overflow: ellipsis !important;
                                                font-family: 'Source Sans Pro';
                                                font-weight: 400;
                                                font-size: 24px;
                                                margin-bottom: 0px !important;
                                                cursor: default;"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                {{ new_.name }}
                                            </p>
                                        </template>
                                        <span>{{ new_.name }}</span>
                                    </v-tooltip>
                                </div>
                                <div style="display: flex; align-items: center; justify-content: center;">
                                    <v-btn
                                        class="mx-2"
                                        fab
                                        dark
                                        small
                                        color="#263575"
                                        @click="openNew(new_.id)"
                                    >
                                        <v-icon dark>
                                            mdi-arrow-right
                                        </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </div>

        <div style="display: flex; justify-content: space-evenly; margin: 104px 0px 120px;">
            <div style="display: flex; align-items: center;">
                <v-icon size="64px" color="#263575">mdi-file-document-outline</v-icon>
                <router-link to="/Documents" style="margin-left: 32px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; color: black;">Проекты договоров</router-link>
            </div>
            <div style="display: flex; align-items: center;">
                <v-icon size="64px" color="#263575">mdi-text-box-outline</v-icon>
                <router-link to="/Documents" style="margin-left: 32px; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; color: black;">Основные регистрационные документы</router-link>
            </div>
        </div>

        <v-dialog v-model="newDialog" max-width="1000px">
            <v-container style="background-color: white; padding: 25px 100px; max-width: 100%">
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                    <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; margin-bottom: 0px;">{{ newDialogInfo.date }}</p>
                    <p style="font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600; text-wrap: wrap;">{{ newDialogInfo.title }}</p>
                </div>

                <div style="display: flex; flex-direction: column;">
                    <div v-for="(newDialogInfoBlock, index) in newDialogInfo.structure" :key="index" style="display: flex; flex-direction: column; align-items: center; width: 100%; margin: 10px 0px;">
                        <p v-if="newDialogInfoBlock.title" style="font-size: 24px; font-family: 'Source Sans Pro'; font-weight: 400;">{{ newDialogInfoBlock.title }}</p>
                        <div v-if="newDialogInfoBlock.body" style="display: block; width: 100%;">
                            <p style="font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300; text-indent: 1.5em; text-wrap: wrap">{{ newDialogInfoBlock.body }}</p>
                        </div>
                        <v-img v-if="newDialogInfoBlock.image" :src="newDialogInfoBlock.image" width="100%" contain></v-img>
                    </div>
                </div>
            </v-container>
        </v-dialog>
        
        <router-view></router-view>
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
            advantages: [
                { icon: 'mdi-file-document-outline', text: 'Широкая номеклатура' },
                { icon: 'mdi-lightning-bolt-outline', text: 'Мощность производства ЖБИ 120000 куб.м. в год' },
                { icon: 'mdi-factory', text: 'Мощность БСУ 100000 куб.м.в год' },
                { icon: 'mdi-flag-triangle', text: 'Собственные инертные материалы' },
                { icon: 'mdi-hospital-box-outline', text: 'Изготовление нетиповой продукции' },
                { icon: 'mdi-train-car', text: 'Отгрузка авто и ж/д транспортом' },
                { icon: 'mdi-tag-outline', text: 'Скидки' },
                { icon: 'mdi-currency-rub', text: 'Различные способы оплаты' },
            ],
            productsFirst: [
                { name: 'Железобетонные изделия', picture: '/product1.jpg', path: '/products/reinforcedConcreteProducts' },
                { name: 'Универсальная домостроительная система', picture: '/product2.jpg', path: '/products/universalHouseBuildingSystem' },
                { name: 'Декоративные изделия', picture: '/product3.jpg', path: '/products/decorativeItems' },
            ],
            productsSecond: [
                { name: 'Инертные материалы', picture: '/product4.jpg', path: '/products/inertMaterials' },
                { name: 'Бетон, растворы', picture: '/product5.jpg', path: '/products/concreteAndMortars' },
                { name: 'Пескобетон', picture: '/product6.jpg', path: '/products/sandConcrete' },
                { name: 'Полистиролбетон', picture: '/product7.jpg', path: '/products/polystyreneConcrete' },
            ],
            activeNew: '',
            news: [],
            newDialog: false,
            newDialogInfo: {
                date: '',
                title: '',
                structure: []
            }
        }
    },

    async created() {
        const url = `/internal/publication/all`;
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
                    this.news = jsonBody.data;
                    this.news.map(el => {
                        el['name'] = el.title;
                        el['picture'] = '/' + el.image;
                    })
                    console.log(this.news)
                }
            });
    },

    methods: {
        async openNew(id) {
            const url = `/internal/publication/${id}`;
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
                        this.newDialogInfo = jsonBody.data;
                        this.newDialog = true

                        console.log(this.newDialogInfo)
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