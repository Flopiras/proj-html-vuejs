<script>
import BaseFormSubscribe from '../BaseFormSubscribe.vue';
import BaseCard from '../BaseCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components: { BaseFormSubscribe, BaseCard, FontAwesomeIcon }
}
</script>

<template>
    <section>
        <div class="container text-white">
            <!-- form -->
            <BaseFormSubscribe />
            <!-- links -->
            <div class="row links">
                <div class="col-2"></div>
                <!-- logo and socials -->
                <div class="col">
                    <!-- logo -->
                    <BaseCard :pic="'footer-logo.png'" :name="'logo'" />

                    <p>War should never be entered upon until every agency of piece has failed not be good</p>

                    <!-- links -->
                    <ul class="d-flex">
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-pinterest-p" />
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- emergency links -->
                <div class="col"></div>
                <!-- blog -->
                <div class="col"></div>
                <!-- gallery -->
                <div class="col"></div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

section {
    background-image: url(../../assets/img/footer-bg.jpg);
    padding-bottom: 6rem;
    padding-top: 10rem;
    position: relative;

    ul {
        padding-left: 0;
    }

    #base-form {
        width: calc(100% / 12 * 8);
        position: absolute;
        top: -20%;
        right: 17%;
    }

}

.links {
    font-size: 0.8rem;
}

.icon {
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $main-color;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
}
</style>