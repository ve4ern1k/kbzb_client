<template>
    <div style="width: 100%; height: 100%; display: flex; align-items: center; flex-direction: column; justify-content: space-between;">
        <div style="width: 1212px;">
            <div style="height: 125px; top: 0; display: flex; justify-content: space-between; align-items: center;">
                <img src="/logoHeader.png" style="height: 77px;" />
    
                <div style="display: flex; flex-direction: row !important;">
                    <v-list dense nav>
                        <v-row no-gutters>
                            <v-col v-for="(item, index) in menuItems" :key="index">
                                <v-list-item link :to="item.path" style="padding: 0px 12px !important; margin: 0px 4px;">
                                    <v-list-item-title style="color: #263575; font-size: 20px; padding: 30px 0px;">{{ item.name }}</v-list-item-title>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-list>
                </div>
    
                <div style="display: flex; align-items: center">
                    <v-icon color="#263575">mdi-phone-in-talk</v-icon>
                    <span style="color: #263575; margin-left: 12px; font-size: 20px;">8 (3953) 409-630</span>
                        <v-btn
                            class="mx-2 ml-8"
                            icon
                            color="#263575"
                            to="/basket"
                        >
                        <v-icon dark>
                            mdi-basket-outline
                        </v-icon>
                    </v-btn>
                </div>
            </div>
            
            <slot></slot>
        </div>

        <v-footer style="width: 100%; background-color: #263575; padding: 20px 0px; display: flex; justify-content: center;">
            <div style="width: 1212px; display: flex; align-items: center; justify-content: space-between;">
                <img src="/logoFooter.png" />
                <div style="display: flex; flex-direction: column;">
                    <div v-for="(footerItem, index) in footerItems" :key="index">
                        <div style="display: flex; color: white;">
                            <v-icon size="24px" color="white" style="margin-right: 24px;">{{ footerItem.icon }}</v-icon>
                            <div v-if="footerItem.text.length > 1" style="display: flex; flex-direction: column; justify-content: center; font-size: 18px;">
                                <span>{{ footerItem.text[0] }}</span>
                                <span style="margin-top: 8px;">{{ footerItem.text[1] }}</span>
                            </div>
                            <div v-else style="display: flex; flex-direction: column; justify-content: center; font-size: 18px; margin: 32.5px 0px;">
                                <span>{{ footerItem.text[0] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-footer>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/300.css';

export default {
    name: 'headerAndMenu',

    data() {
        return {
            menuItems: [
                { name: 'Главная', path: '/main' },
                { name: 'О компании', path: '/aboutCompany' },
                { name: 'Продукция', path: '/products' },
                { name: 'Документы', path: '/documents' },
                { name: 'Контакты', path: '/contacts' },
            ],
            footerItems: [
                { icon: 'mdi-earth', text: ['priem@kbzb.ru', 'www.kbzb.ru'] },
                { icon: 'mdi-map-marker', text: ['Иркутская область, г.Братск Единая База КБЖБ'] },
                { icon: 'mdi-phone', text: ['8 (3953) 409-630', 'Разница во времени Братск-Москва (-5) MSK'] },
            ]
        }
    }
}
</script>

<style scoped>

* {
    text-decoration: none;
}

.v-footer {
    font-family: 'Source Sans Pro';
    font-weight: 300;
}

</style>