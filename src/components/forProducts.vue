<template>
    <div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 32px 0px 120px;">
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

        <router-view></router-view>
    </div>
</template>

<script>
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/300.css';

export default {
    name: 'forProducts',

    data() {
        return {
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
        }
    }
}
</script>

<style scoped>

</style>