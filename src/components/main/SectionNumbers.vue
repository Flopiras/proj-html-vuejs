<script>
import NumberCard from './NumberCard.vue';

export default {
    components: { NumberCard }
}
</script>

<template>
    <section>
        <div class="numbers container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="d-flex">
                        <NumberCard />
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.numbers {
    background-image: url(../../assets/img/counter-bg.jpg);
    padding: 100px 0;
}
</style>