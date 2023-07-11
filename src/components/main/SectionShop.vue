<script>
import BaseCard from '../BaseCard.vue';

export default {
    components: { BaseCard },
    props: {
        foods: Array
    }
}
</script>

<template>
    <section id="shop">
        <div class="container text-center text-white">
            <h5 class="second-color">Trending Online Store</h5>
            <h1 class="text-uppercase">gogrin all <span class="second-color">organic</span> food</h1>

            <!-- buttons -->
            <ul class="d-flex justify-content-center">
                <li><button class="btn btn-link">All Product</button></li>
                <li><button class="btn btn-link">Apple</button></li>
                <li><button class="btn btn-link">Food</button></li>
                <li><button class="btn btn-link">Orange</button></li>
                <li><button class="btn btn-link">Vegetable</button></li>
            </ul>

            <!-- foods grid -->
            <div class="row row-cols-4">
                <div class="col">
                    <BaseCard />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.container {
    background-image: url(../../assets/img/shop-bg-img.jpg);
    min-height: 100px;
    padding: 6rem 0;
}

h1,
h5 {
    font-weight: 600;
}

.btn-link {
    text-decoration: none;
    color: currentColor;
}
</style>