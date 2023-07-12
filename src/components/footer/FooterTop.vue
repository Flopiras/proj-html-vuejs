<script>
import BaseFormSubscribe from '../BaseFormSubscribe.vue';
import BaseCard from '../BaseCard.vue';
export default {
    components: { BaseFormSubscribe, BaseCard }
}
</script>

<template>
    <section>
        <div class="container text-white">
            <!-- form -->
            <BaseFormSubscribe />
            <!-- links -->
            <div class="row links">
                <div class="col-2"></div>
                <!-- logo and socials -->
                <div class="col">
                    <BaseCard :pic="'footer-logo.png'" :name="'logo'" />

                    <p>War should never be entered upon until every agency of piece has failed not be good</p>
                </div>
                <!-- emergency links -->
                <div class="col"></div>
                <!-- blog -->
                <div class="col"></div>
                <!-- gallery -->
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
        top: -20%;
        right: 17%;
    }
}

.links {
    font-size: 0.8rem;
}
</style>