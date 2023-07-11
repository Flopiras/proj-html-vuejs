<script>
import SectionMission from './main/SectionMission.vue';
import SectionShop from './main/SectionShop.vue';
import SectionQuote from './main/SectionQuote.vue';

import SectionOffers from './main/SectionOffers.vue';
export default {
    components: { SectionMission, SectionShop, SectionQuote, SectionOffers },
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
    </main>
</template>