<script>
import SectionMission from './main/SectionMission.vue';

export default {
    components: { SectionMission },
    props: { sectionProducts: Array }
}
</script>

<template>
    <main>
        <SectionMission :products="sectionProducts" />
    </main>
</template>