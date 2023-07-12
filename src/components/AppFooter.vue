<script>

import FooterTop from './footer/FooterTop.vue';
export default {
    components: { FooterTop },
    props: { emergencyLinks: Array, news: Array, gallery: Array }
}
</script>

<template>
    <footer>
        <FooterTop :gallery="gallery" :news="news" :emergencyLinks="emergencyLinks" />
    </footer>
</template>