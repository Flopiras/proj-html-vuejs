<script>
import BaseDropdown from '../BaseDropdown.vue';

export default {
    components: { BaseDropdown },
    props: { options: Array }
}
</script>

<template>
    <div id="header-main">
        <div class="container d-flex align-items-center">
            <!-- left part -->
            <div class="d-flex align-items-center">
                <img src="../../assets/img/logo.png" alt="logo">

                <BaseDropdown v-for="option in options" :key="option" :placeholder="option" />
            </div>

            <!-- right part -->
            <div class="d-flex align-items-center">
                <!-- search -->
                <div class="search round my-round">
                    <FontAwesomeIcon icon="fa-magnifying-glass" class="me-1" />
                </div>
                <!-- cart -->
                <FontAwesomeIcon icon="fa-cart-shopping" class="me-1" />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.search {
    width: 2.2rem;
    height: 2.2rem;
}

.round {
    color: white;
    border-radius: 50%;
    background-color: $second-main-color;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fa-cart-shopping {
    font-size: 1.2rem;
    margin: 0 1rem;
}
</style>