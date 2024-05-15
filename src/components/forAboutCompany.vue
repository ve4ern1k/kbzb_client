<<template>
    <div>
        <div style="display: flex; align-items: center; margin: 32px 0px 120px;">
            <div style="display: flex; flex-direction: column;">
                <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px;">О компании</p>
                <div style="margin: 32px 0px; text-indent: 1.5em;">
                    <p style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-wrap: wrap;">
                        В 2016 году ООО Комбинат «Братскжелезобетон» отметил свой 60-летний юбилей. Это солидный возраст, накопленный опыт и традиции. И нам есть чем гордится – наша продукция не раз была удостоена высоких экспертных оценок строителей не только на территории Восточной Сибири, Красноярского края, но также на Дальнем Востоке и Якутии. Мы гордимся своей историей, смело смотрим в будущее, ведь главный наш потенциал – это имеющиеся высококвалифицированные кадры: квалифицированные руководители, яркие и амбициозные менеджеры, грамотные инженеры и опытные производственники.
                    </p>
                    <p style="margin-bottom: 0px !important; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-wrap: wrap;">
                        Для тех кто хочет подробнее узнать нас, ниже мы подготовили для Вас небольшой экскурс в прошлое и презентацию современного предприятия.
                    </p>
                </div>
                <div style="display: block;">
                    <v-btn color="#263575" style="color: white;" to="/">Презентация</v-btn>
                </div>
            </div>

            <v-img src="/aboutCompany.jpg" style="width: 590px; margin-left: 32px; border-radius: 4px;"></v-img>
        </div>

        <div style="display: flex; align-items: center;">
            <v-img src="/mission.jpg" style="width: 590px; margin-right: 32px; border-radius: 4px;"></v-img>

            <div style="display: flex; flex-direction: column;">
                <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px;">Наша миссия</p>
                <p style="margin: 32px 0px !important; font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-wrap: wrap; text-indent: 1.5em;">
                    Делаем доступным использование сборного железобетона, бетона, раствора, инертных материалов в строительстве. Профессионально, качественно и быстро решаем проблемы строителей от принятия решения о выборе необходимого материала до разгрузки на строительной площадке.
                </p>
            </div>
        </div>

        <div style="margin-top: 120px;">
            <div style="margin-bottom: 32px;">
                <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px; width: 100%; margin-bottom: 32px;">Производство</p>
                <p style="font-family: 'Source Sans Pro'; font-weight: 400; font-size: 24px; width: 100%; margin-bottom: 0px;">Производственный комплекс ООО «КБЖБ» представляет собой сочетание самостоятельных производственных модулей, объединенных в единый производственный цикл:</p>
            </div>

            <div style="display: flex; flex-direction: column;">
                <workshopBlock
                    v-for="(oneWorkshop, index) in workshops"
                    :key="index"
                    :imgLeft="oneWorkshop.imgLeft"
                    :img="oneWorkshop.img"
                    :title="oneWorkshop.title"
                    :text="oneWorkshop.text"
                    :list="oneWorkshop.list"
                    :button="oneWorkshop.button"
                ></workshopBlock>
            </div>
        </div>

        <div>
            <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 40px; width: 100%; margin-bottom: 40px;">Руководящий состав</p>

            <div style="display: flex; align-items: center; width: 100%; margin-bottom: 32px;">
                <v-avatar size="150" style="margin-right: 32px;">
                    <v-img src="/mashkin.jpg" alt="Машкин Виктор Павлович"></v-img>
                </v-avatar>

                <div style="display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 12px; color: #263575;">Генеральный директор:</p>
                    <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 16px; color: #263575;">Машкин Виктор Павлович</p>
                    <p style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-indent: 1.5em;">На сегодняшний день, Комбинат «Братскжелезобетон» является одним из основных поставщиков сборного железобетона на территории Иркутской области, в особенности ее Северных территорий. За свою полувековую историю нами пройдены все основные вехи развития данных территорий. Все эти годы предприятие являлось символом качественно и вовремя выполненной работы, наличия высококвалифицированных специалистов и руководителей.</p>
                </div>
            </div>

            <div style="display: flex; align-items: center; width: 100%;">
                <v-avatar size="150" style="margin-right: 32px;">
                    <v-img src="/prishenko.jpg" alt="Прищенко Денис Анатольевич"></v-img>
                </v-avatar>

                <div style="display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 12px; color: #263575;">Первый заместитель генерального директора:</p>
                    <p style="font-family: 'Source Sans Pro'; font-weight: 600; font-size: 32px; margin-bottom: 16px; color: #263575;">Прищенко Денис Анатольевич</p>
                    <p style="font-family: 'Source Sans Pro'; font-weight: 300; font-size: 18px; text-indent: 1.5em;">Главной целью моей работы, а также ценностью, которую доношу до менеджеров по продажам, является решение проблем строителей. Чутко реагируя на требования времени, решение данных проблем происходит через построение системы продаж, позволяющей внедрять в работу менеджеров по продажам все самое лучшее и современное.</p>
                </div>
            </div>
        </div>

        <div style="display: flex; justify-content: space-evenly; margin: 120px 0px;">
            <div style="display: flex; flex-direction: column;">
                <v-icon size="100px" color="#263575" style="padding: 0px 90px 32px;">
                    mdi-timer-sand-complete
                </v-icon>
                <v-btn to="/history" color="#263575" style="color: white;">Наша история</v-btn>
            </div>

            <div style="display: flex; flex-direction: column;">
                <v-icon size="100px" color="#263575" style="padding: 0px 90px 32px;">
                    mdi-play-circle-outline
                </v-icon>
                <v-btn to="/" color="#263575" style="color: white;">Видеопрезентация</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import workshopBlock from './workshopBlock.vue';

export default {
    name: 'forAboutCompany',

    components: {
        workshopBlock
    },

    data() {
        return {
            workshops: [
                {
                    imgLeft: true,
                    img: '/gravelSortingShop.png',
                    title: 'Гравие-сортировочный цех',
                    text: [
                        'Представляет собой комплекс объектов, основными задачами которых являются: добыча песчано-гравийной смеси, ее сортировка на фракции, дробление гравийного щебня.',
                        'На сегодняшний день выпускаются следующие инертные материалы:'
                    ],
                    list: [
                        'гравий фракций 5/20 и 5/10',
                        'щебень гравийный фракции 5/20',
                        'песок сортированный',
                        'песок строительный',
                        'песчано-гравийная смесь'
                    ]
                },
                {
                    imgLeft: false,
                    img: '/concreteMixingPlant.png',
                    title: 'Бетоносмесительный цех',
                    text: [
                        'Представляет собой бетонно-смесительный узел, выпускающий бетонные и растворные смеси различных марок.',
                        'Номенклатура производимых материалов включает в себя:'
                    ],
                    list: [
                        'бетонные смеси',
                        'растворные смеси',
                        'пескобетон',
                        'полистеролбетон'
                    ]
                },
                {
                    imgLeft: true,
                    img: '/productionWorkshop.png',
                    title: 'Производственных цех',
                    text: [
                        'Включает в себя самостоятельные производственные модули, предназначенные для выпуска комплектов железобетонных изделий высокой заводской готовности. Корпус размещен в двенадцати пролетах размерами 18х144 м, из них десять пролетов – формовочные, два пролета – арматурные цеха со складом металла.',
                        'Каждый из формовочных пролетов занимается выпуском определенной номенклатуры:'
                    ],
                    button: {
                        name: 'Железобетонных изделий',
                        link: '/products/reinforcedConcreteProducts'
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>