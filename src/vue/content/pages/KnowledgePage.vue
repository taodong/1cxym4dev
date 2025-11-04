<template>
    <PageWrapper id="duotail-policy-page"
                 :no-padding="false"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import KnowledgeSection from "/src/vue/content/sections/KnowledgeSection.vue"

const sections = [
    new SectionInfo('knowledge', KnowledgeSection)
]
</script>

<style lang="scss" scoped>
</style>