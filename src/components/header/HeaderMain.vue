<script>
import { navbarOptions } from '../../data';
import BaseDropdown from '../BaseDropdown.vue';

export default {
    components: { BaseDropdown }
}
</script>

<template>
    <div id="header-main">
        <div class="container">
            <img src="../../assets/img/logo.png" alt="logo">

            <BaseDropdown v-for="option in navbarOptions" :key="option" />
        </div>
    </div>
</template>