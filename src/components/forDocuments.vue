<template>
    <div>
        <p style="margin: 32px 0px 120px; width: 100%; text-align: center; font-size: 40px; font-family: 'Source Sans Pro'; font-weight: 600;">Документы</p>

        <div style="margin-bottom: 146px; display: flex;">
            <div style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 16px; width: 50%;">
                <div style="display: flex; flex-direction: column;">
                    <p style="width: 100%; text-align: center; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600; text-wrap: nowrap; margin-bottom: 32px !important;">Регистрационные документы</p>
    
                    <div style="display: flex; flex-direction: column;">
                        <documentRow v-for="(oneRow, index) in registrationDocuments" :key="index" :row="oneRow"></documentRow>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column;">
                    <p style="width: 100%; text-align: center; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600; margin-bottom: 32px !important;">Проекты договоров</p>
    
                    <div style="display: flex; flex-direction: column;">
                        <documentRow v-for="(oneRow, index) in contractProjects" :key="index" :row="oneRow"></documentRow>
                    </div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; margin-left: 16px; width: 50%;">
                <p style="width: 100%; text-align: center; font-size: 32px; font-family: 'Source Sans Pro'; font-weight: 600; text-wrap: wrap; margin-bottom: 32px !important;">ИНФОРМАЦИЯ ДЛЯ АКЦИОНЕРОВ, ОБЩЕСТВ И ЗАИНТЕРЕСОВАННЫХ ЛИЦ </p>

                <div style="display: flex; flex-direction: column;">
                    <documentRow v-for="(oneRow, index) in infoForAll" :key="index" :row="oneRow"></documentRow>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import documentRow from './documentRow.vue'
import '@fontsource/source-sans-pro/600.css';

export default {
    name: 'forDocuments',

    components: {
        documentRow
    },

    data() {
        return {
            registrationDocuments: [
                { title: 'Устав ООО «КБЖБ»', link: 'https://kbzb.ru/public/uploads/docs/ustav.pdf' },
                { title: 'Свидетельство ИНН', link: 'https://kbzb.ru/public/uploads/docs/inn.pdf' },
                { title: 'Свидетельство ОГРН', link: 'https://kbzb.ru/public/uploads/docs/ogrn.pdf' },
                { title: 'Решение о назначении генерального директора', link: 'https://kbzb.ru/public/uploads/docs/director.pdf' },
            ],
            contractProjects: [
                { title: 'Договор поставки (при доставке ж/д и автотранспортом)', link: 'https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruJWWKj1wfdBmHcFYBZ0vpE5mifFLrh78mEv9T9yhUFIQnF7ImDmiz1UkKm_AlkEG9KpUskGsNZOTeZ6eRaeDkT3c8q1ngvhYKPTsaf_51nnLZD-rZ2i4aa-wK_tcL02MXw%3D%3D%3Fsign%3DxS99osy-KNWTuWXj4DbdGg2idAyaz3BbcGQn0fc9kTg%3D&name=jd_contract.doc' },
                { title: 'Договор поставки (при автотранспортом)', link: 'https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruNhbBriw7Qd_9DOMZJnb-kiBxZIchkX17E2Y6GtLOSKNHXCe5YSj4izg9mQKbWuipDt9xB5mw3g_6pCpZUy2sP-JCa5m2XGKgijZLHTK-z1S5qSaSSjSKrAo_oSOublWnQ%3D%3D%3Fsign%3DJjVEjF7E2SRxfW9Q2KUeqgrao1DLhReylWswNj61QTo%3D&name=at_contract.doc' },
            ],
            infoForAll: [
                { title: 'Карточка ОАО «БКСИ»', link: '/' },
                { title: 'Устав ОАО «БКСИ»', link: '/' },
                { title: '2009', link: '/' },
                { title: '2010', link: '/' },
                { title: '2011', link: '/' },
                { title: '2012', link: '/' },
                { title: '2013', link: '/' },
                { title: '2019', link: 'https://kbzb.ru/public/uploads/docs/notice_2019.zip' },
                { title: 'Уведомление о созыве повторного общего собрания акционеров 11.11.2019 г. в 16-00', link: 'https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruE4ocA9FvS8-9siok3XT3ZDBhil9X9HybFCbepuVKEjn1x7qaukpQ_-2cysKmyKkb5VZVSSn3hI7FoM0HGPGUnrXe5bdrJV_tM8HeOFMrWy3QCzamDab-c0xMK4PeQU12A%3D%3D%3Fsign%3D2yBiZnO_s2W9o1-8sUkfWPqRpklbIwMp6Pl5Qj1FEPk%3D&name=notice_of_convocation.doc' },
            ]
        }
    }
}
</script>

<style scoped>

</style>