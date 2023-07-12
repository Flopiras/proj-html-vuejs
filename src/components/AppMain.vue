<script>
import SectionMission from './main/SectionMission.vue';
import SectionShop from './main/SectionShop.vue';
import SectionQuote from './main/SectionQuote.vue';
import SectionNumbers from './main/SectionNumbers.vue';
import SectionOffers from './main/SectionOffers.vue';
import SectionTrending from './main/SectionTrending.vue';
import SectionApoinment from './main/SectionApoinment.vue';
import SectionNews from './main/SectionNews.vue';
export default {
    components: { SectionMission, SectionShop, SectionQuote, SectionOffers, SectionNumbers, SectionTrending, SectionApoinment, SectionNews },
    props: { sectionProducts: Array, shopProducts: Array, trendItems: Array }
}
</script>

<template>
    <main>
        <!-- mission -->
        <SectionMission :products="sectionProducts" />
        <!-- shop -->
        <SectionShop :foods="shopProducts" />
        <!-- quote -->
        <SectionQuote />
        <!-- offers -->
        <SectionOffers />
        <!-- numbers -->
        <SectionNumbers />
        <!-- trending -->
        <SectionTrending :trends="trendItems" />
        <!-- apoinment -->
        <SectionApoinment />
        <!-- news -->
        <SectionNews />
    </main>
</template>