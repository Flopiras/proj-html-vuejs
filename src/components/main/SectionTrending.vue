<script>
import ShopCard from './ShopCard.vue';
import SectionTitle from './SectionTitle.vue';
export default {
    props: {
        trends: Array
    },
    components: { ShopCard, SectionTitle }
}
</script>

<template>
    <section>

        <div class="container">
            <!-- section title -->
            <SectionTitle />
            <!-- section main -->
            <div class="section-main">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="container-fluid">
                            <!-- cards -->
                            <div class="row row-cols-4">
                                <div v-for="trend in trends" :key="trend.id" class="col">
                                    <div class="trend">

                                        <ShopCard :item="trend" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 3rem 0;
}
</style>