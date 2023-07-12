<script>
import BaseFormSubscribe from '../BaseFormSubscribe.vue';
export default {
    components: { BaseFormSubscribe }
}
</script>

<template>
    <section>
        <div class="container">
            <BaseFormSubscribe />
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url(../../assets/img/footer-bg.jpg);
    padding-bottom: 6rem;
    position: relative;

    #base-form {
        width: calc(100% / 12 * 8);
        position: absolute;
        top: -70%;
        right: 17%;
    }
}
</style>