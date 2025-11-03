<template>
    <PageWrapper id="duotail-policy-page"
                 :no-padding="false"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import EmailInfoSection from "/src/vue/content/sections/EmailInfoSection.vue"

const sections = [
    new SectionInfo('email-info', EmailInfoSection)
]
</script>

<style lang="scss" scoped>
</style>