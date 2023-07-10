<script>
import HeaderTop from './header/HeaderTop.vue';
import HeaderMain from './header/HeaderMain.vue';

export default {
    components: { HeaderTop, HeaderMain }
}
</script>

<template>
    <header>
        <HeaderTop />

        <HeaderMain />
    </header>
</template>