<script>
export default {
    props: {
        placeholder: String
    },
}
</script>

<template>
    <div class="dropdown">
        <button class="btn btn-link dropdown-toggle">{{ placeholder }}</button>

        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">HOME-1</a></li>
            <li><a class="dropdown-item" href="#">HOME-2</a></li>
            <li><a class="dropdown-item" href="#">HOME-3</a></li>
            <li><a class="dropdown-item" href="#">HOME-LANDING</a></li>
            <li><a class="dropdown-item" href="#">HOME-VIDEO</a></li>
        </ul>
    </div>
</template>