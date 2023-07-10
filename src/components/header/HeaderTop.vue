<template>
    <div class="top-header">
        <div class="containier d-flex justify-content-between">
            <!-- indirizzi -->
            <div class="address">
                <ul>
                    <li>
                        <h6>North baukhlula,tala, USA</h6>
                    </li>
                    <li>
                        <h6>demo@example.com</h6>
                    </li>

                </ul>
            </div>
            <div>
                <div class="hours">
                    <p>8.30AM-8.30PM</p>
                </div>
                <div class="social">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.top-header {
    background-color: $main-color;
    min-height: 50px;
    color: white;
}

.top-header,
h6 {

    font-size: 0.9rem;
}

ul {
    display: flex;

    li {
        margin-right: 1rem;
    }
}
</style>