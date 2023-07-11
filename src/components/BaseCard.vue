<script>
export default {
    props: {
        urlImage: String,
        altImage: String,
        mainCaption: String,
        secondCaption: String,
        saleTag: Boolean
    }
}
</script>

<template>
    <div class="base-card">
        <figure>
            <img :src="urlImage" :alt="mainCaption">
            <figcaption v-if="mainCaption">
                <h3>{{ mainCaption }}</h3>
                <h6>{{ secondCaption }}</h6>
            </figcaption>
            <div v-if="saleTag" class="sale-tag">
                <p>SALE!</p>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

.base-card {
    h3 {
        color: currentColor;
    }
}

figure {
    position: relative;

    img {
        display: block;
        width: 100%;
    }

    .sale-tag {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 0.6rem;
        border-radius: 10%;
        background-color: $second-main-color;
        color: white;
        font-size: 0.8rem;

        p {
            margin: 0;
        }
    }
}
</style>