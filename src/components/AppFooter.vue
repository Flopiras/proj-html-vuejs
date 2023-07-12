<script>

import FooterTop from './footer/FooterTop.vue';
export default {
    components: { FooterTop },
    props: { emergencyLinks: Array, news: Array }
}
</script>

<template>
    <footer>
        <FooterTop :news="news" :emergencyLinks="emergencyLinks" />
    </footer>
</template>