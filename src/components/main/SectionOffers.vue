<script>
import OfferCard from './OfferCard.vue';

export default {
    components: { OfferCard }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-1"></div>
                <div class="left-offer col-5">
                    <OfferCard :text="'Fresh gurden tomato combo offer... $37'" />
                </div>
                <div class="right-offer col-5">
                    <OfferCard :text="'Some organic healty fruits combo offer... $49'" />
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-bottom: 5rem;
}

.left-offer {
    margin-right: 1rem;
    background-image: url(../../assets/img/offer-img01.jpg);
}

.right-offer {
    margin-left: 1rem;
    background-image: url(../../assets/img/offer-img02.jpg);
}

.left-offer,
.right-offer {
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>