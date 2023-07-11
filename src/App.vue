<script>
import { navbarOptions, products, foods } from './data';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'GogrinApp',
    components: { AppHeader, AppMain, AppFooter },
    data() {
        return {
            navbarOptions,
            products,
            foods
        }
    }
}

</script>

<template>
    <AppHeader :options="navbarOptions" />
    <AppMain :shopProducts="foods" :sectionProducts="products" />
    <AppFooter />
</template>

<style lang="scss">
@use '../src/assets/sass/index.scss' as *;
</style>