<template>
    <div id="map" style="width: 693px; height: 358px;"></div>
</template>

<script>
    export default {
        name: 'yandexMaps',

        mounted() {
            ymaps.ready(() => {
               const myMap = new ymaps.Map('map', {
                   center: [56.31900887161381, 101.7787851828178],
                   zoom: 15
               });

               const myPlacemark = new ymaps.Placemark([56.31900887161381, 101.7787851828178], {
                   hintContent: 'ул. Промышленная, 22',
                   balloonContentHeader: 'ООО "Комбинат Братскжелезобетон"',
                   balloonContentBody: 'ул. Промышленная, д. 22',
                   balloonContentFooter: '1 этаж'
                },
                {
                    iconColor: '#263575'
                });

               myMap.geoObjects.add(myPlacemark);
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>