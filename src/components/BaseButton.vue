<script>
export default {

    props: {
        placeholder: String,
        bgClass: String
    }
}
</script>

<template>
    <button :class="bgClass" class="btn" type="button">
        <span class="text-uppercase">{{ placeholder }}</span></button>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

button {
    margin: 0 1rem;
    border-radius: 0 20px 0 20px;
    color: white;
    padding: 1rem 3.5rem;
}

.btn-main {
    background-color: $main-color;
}

.btn-second {
    background-color: $second-main-color;
}
</style>