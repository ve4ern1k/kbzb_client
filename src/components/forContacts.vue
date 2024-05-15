<template>
    <div>
        <p style="margin: 32px 0px 38px; width: 100%; text-align: center; font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">Контакты</p>

        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; flex-direction: column; width: 486px;">
                <div v-for="(contact, index) in contacts" :key="index" style="display: flex; flex-direction: column; margin: 16px 0px;">
                    <span style="text-align: center; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600;">{{ contact.title }}</span>
                    <span style="text-align: center; font-size: 24px; font-family: 'Source Sans Pro'; font-weight: 400; text-wrap: wrap;">{{ contact.text }}</span>
                </div>
            </div>

            <yandexMaps></yandexMaps>
        </div>

        <div style="margin: 120px 0px; display: flex; flex-direction: column; width: 100%;">
            <div v-for="(department, index) in departments" :key="index" style="display: flex; justify-content: space-between; margin-bottom: 32px; width: 100%; border-bottom: 2px solid #263575;">
                <p style="width: 100%; text-align: left; margin-bottom: 0px !important; padding-bottom: 2px; font-size: 24px; font-family: 'Source Sans Pro'; font-weight: 400;">{{ department.name }}</p>
                <p style="width: 100%; text-align: center; margin-bottom: 0px !important; padding-bottom: 2px; font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300;">{{ department.phone }}</p>
                <p style="width: 100%; text-align: right; margin-bottom: 0px !important; padding-bottom: 2px; font-size: 18px; font-family: 'Source Sans Pro'; font-weight: 300;">{{ department.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/400.css';
import yandexMaps from './yandexMaps.vue';

export default {
    name: 'forContacts',

    components: {
        yandexMaps
    },

    data() {
        return {
            contacts: [
                { title: 'Время работы', text: 'ПН-ПТ 08.00-17.00' },
                { title: 'Адрес', text: 'Иркутская область, г.Братск, Единая база, Промышленная улица, 22' },
                { title: 'Телефон', text: '+7 (3953) 409‒630' },
            ],
            departments: [
                { name: 'Приемная:', phone: '8 (3953) 409-630', email: 'priem@kbzb.ru' },
                { name: 'Бухгалтерия:', phone: '8 (3953) 36-42-31', email: 'bh@kbzb.ru' },
                { name: 'Продажи жби изделий:', phone: '8 (3953) 409-636', email: 'pto@kbzb.ru' },
                { name: 'Продажа бетона и раствора:', phone: '8 (3953) 409-900', email: 'or@kbzb.ru' },
            ]
        }
    }
}
</script>

<style scoped>

</style>