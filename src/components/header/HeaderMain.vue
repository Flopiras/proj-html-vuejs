<script>
import BaseDropdown from '../BaseDropdown.vue';
import BaseButton from '../BaseButton.vue';

export default {
    components: { BaseDropdown, BaseButton },
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
                <div class="search round">
                    <FontAwesomeIcon icon="fa-magnifying-glass" class="me-1" />
                </div>
                <!-- cart -->
                <div id="cart">
                    <FontAwesomeIcon icon="fa-cart-shopping" class="me-1 fs-3" />
                    <div class="items-number round">0</div>
                </div>

                <!-- button -->
                <BaseButton>
                    ORDER NOW
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.search {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
}

.round {
    color: white;
    border-radius: 50%;
    background-color: $second-main-color;
    display: flex;
    justify-content: center;
    align-items: center;
}

#cart {
    position: relative;
    cursor: pointer;
}

.fa-cart-shopping {
    font-size: 1.2rem;
    margin: 0 1rem;
    color: $main-color;
}

.items-number {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
    position: absolute;
    right: -5px;
    top: -5px;
}
</style>