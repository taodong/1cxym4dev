<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="Duotail *Email Address Service*"
                subtitle="We offer non-intrusive email addresses to secure your personal mailboxes."
                logo-url="images/logo/logo-128x128.png"
                :show-button="true"
                button-icon="fa-solid fa-search"
                button-label="Find Out More"
                button-url="#faq"/>
</template>

<script setup>
import PageHeader from "/src/vue/components/layout/PageHeader.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>