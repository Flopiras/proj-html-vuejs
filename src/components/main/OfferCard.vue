<script>
export default {
    props: { text: String }
}
</script>

<template>
    <div class="offer-card">
        <div class="container">
            <div class="row">
                <div class="col-8">{{ text }}</div>
                <div class="col-4"></div>
            </div>
            <div class="row">
                <div class="col-8 text-uppercase">shop now</div>
                <div class="col-4"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.offer-card {
    font-weight: 600;
    color: white;
}
</style>