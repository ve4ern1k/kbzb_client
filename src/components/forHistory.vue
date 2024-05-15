<template>
    <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 32px 0px 120px;">
            <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px; margin-bottom: 0px;">История компании</p>
            <v-btn to="/aboutCompany" color="#263575" style="color: white; height: 100%; padding: 12px 48px;">
                <v-icon style="color: white; padding-right: 4px;">
                    mdi-arrow-left
                </v-icon>
                Назад
            </v-btn>
        </div>

        <div>
            <historyBlock
                v-for="(historySection, index) in history"
                :key="index"
                :imgLeft="historySection.imgLeft"
                :img="historySection.img"
                :title="historySection.title"
                :structure="historySection.structure"
            ></historyBlock>
        </div>

        <div style="display: flex; flex-wrap: wrap; justify-content: center; margin-bottom: 104px;">
            <div v-for="i in 7" :key="i" style="width: 260px; height: 100px; display: flex; align-items: center; justify-content: center; margin: 16px;">
                <img :src="'/client' + i++ + '.png'" />
            </div>
        </div>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import historyBlock from './historyBlock.vue';

export default {
    name: 'forHistory',

    components: {
        historyBlock
    },
    
    data() {
        return {
            history: [
                {
                    imgLeft: false,
                    img: '/history1.jpg',
                    title: 'Формирование в период до-перестроечных времен:',
                    structure: [
                        'Комбинат "Братскжелезобетон" был частью системы ПО "Братскгэсстрой", организации, выполняющей полный цикл строительства.',
                        'Система активно участвовала в строительстве ключевых объектов, таких как гидроэлектростанции, города Братск, Усть-Илимск и другие.'
                    ]
                },
                {
                    imgLeft: true,
                    img: '/history2.jpg',
                    title: 'Развитие индустрии сборного железобетона:',
                    structure: [
                        'Начало связано с строительством Братской гидроэлектростанции, фундаментом для электрификации Восточной Сибири.',
                        'Первые производственные участки были организованы в 1955 году, затем создалось Комбинат "Братскжелезобетон", обеспечивающий стройку жилья, дорог, и других объектов.'
                    ]
                },
                {
                    imgLeft: false,
                    img: '/history3.jpg',
                    title: 'Участие в крупных проектах:',
                    structure: [
                        'В период с 2004 по 2016 годы компания участвовала в реализации масштабных проектов, таких как строительство нефтепровода "Восточная Сибирь-Тихий Океан" и алюминиевых заводов.',
                        'Активно вовлечена в программы переселения из аварийного жилья.'
                    ]
                },
                {
                    imgLeft: true,
                    img: '/history4.jpg',
                    title: 'Сегодняшнее положение на рынке:',
                    structure: [
                        '"Комбинат Братскжелезобетон" остается одним из ключевых поставщиков сборного железобетона в Иркутской области и на Дальнем Востоке.',
                        'Клиентами являются крупные компании, такие как ООО "Транснефть", ОАО "Верхнечонскнефтегаз", ОАО "Иркутская нефтяная компания" и другие.',
                        'География поставок охватывает множество городов в области и за её пределами, включая Биробиджан, Хабаровск и Комсомольск-на-Амуре.'
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>