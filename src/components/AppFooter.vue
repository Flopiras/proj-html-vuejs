<script>

import FooterTop from './footer/FooterTop.vue';
export default {
    components: { FooterTop },
    props: { emergencyLinks: Array }
}
</script>

<template>
    <footer>
        <FooterTop :emergencyLinks="emergencyLinks" />
    </footer>
</template>