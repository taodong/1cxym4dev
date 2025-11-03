<template>
    <footer class="duotail-footer">
        <slot/>
    </footer>
</template>

<script setup>
</script>

<style lang="scss">
@import "/src/scss/_theming.scss";

.duotail-footer {
    background-color: $footer-bg-color;
}
</style>