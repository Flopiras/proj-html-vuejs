<script>
import SectionMission from './main/SectionMission.vue';
import SectionShop from './main/SectionShop.vue';

export default {
    components: { SectionMission, SectionShop },
    props: { sectionProducts: Array }
}
</script>

<template>
    <main>
        <!-- mission -->
        <SectionMission :products="sectionProducts" />
        <!-- shop -->
        <SectionShop />
    </main>
</template>