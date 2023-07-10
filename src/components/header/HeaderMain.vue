<script>
import BaseDropdown from '../BaseDropdown.vue';

export default {
    components: { BaseDropdown },
    props: { options: Array }
}
</script>

<template>
    <div id="header-main">
        <div class="container">
            <img src="../../assets/img/logo.png" alt="logo">

            <BaseDropdown v-for="option in options" :key="option" :placeholder="option" />
        </div>
    </div>
</template>