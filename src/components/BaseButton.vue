<script>
export default {

    props: {
        placeholder: String,
        bgClass: String,
        borderClass: String
    }
}
</script>

<template>
    <button :class="[borderClass, bgClass]" class="btn rounded" type="button">
        <span class="text-uppercase">{{ placeholder }}</span></button>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

button {
    margin: 0 1rem;
    color: white;
    padding: 1rem 3.5rem;

}

.border-leaf {
    border-radius: 0 20px 0 20px;

}

.btn-main {
    background-color: $main-color;
}

.btn-second {
    background-color: $second-main-color;
}
</style>