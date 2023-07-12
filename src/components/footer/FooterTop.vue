<script>
import BaseFormSubscribe from '../BaseFormSubscribe.vue';
export default {
    components: { BaseFormSubscribe }
}
</script>

<template>
    <section>
        <div class="container">
            <!-- form -->
            <BaseFormSubscribe />
            <!-- links -->
            <div class="row">
                <div class="col-2"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url(../../assets/img/footer-bg.jpg);
    padding-bottom: 6rem;
    padding-top: 10rem;
    position: relative;

    #base-form {
        width: calc(100% / 12 * 8);
        position: absolute;
        top: -45%;
        right: 17%;
    }
}
</style>