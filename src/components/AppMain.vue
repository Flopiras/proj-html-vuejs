<script>
import SectionMission from './main/SectionMission.vue';
import SectionShop from './main/SectionShop.vue';
import SectionQuote from './main/SectionQuote.vue';
import SectionNumbers from './main/SectionNumbers.vue';
import SectionOffers from './main/SectionOffers.vue';
import SectionTrending from './main/SectionTrending.vue';
export default {
    components: { SectionMission, SectionShop, SectionQuote, SectionOffers, SectionNumbers, SectionTrending },
    props: { sectionProducts: Array, shopProducts: Array }
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
        <SectionTrending />
    </main>
</template>