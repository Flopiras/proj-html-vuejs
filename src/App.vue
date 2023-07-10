<script>
import { navbarOptions } from './data';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'GogrinApp',
    components: { AppHeader, AppMain, AppFooter },
    data() {
        return {
            navbarOptions
        }
    }
}

</script>

<template>
    <AppHeader :options="navbarOptions" />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use '../src/assets/sass/index.scss' as *;
</style>