<template>
    <PageWrapper id="duotail-home-page"
                 :no-padding="true"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import FaqSection from "/src/vue/content/sections/FaqSection.vue"
import HeroSection from "/src/vue/content/sections/HeroSection.vue"
import PriceSection from "/src/vue/content/sections/PriceSection.vue"

const sections = [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('price',     PriceSection,        'Pricing',     'fa-solid fa-wrench'),
    new SectionInfo('faq',          FaqSection,             'Q&A',          'fa-solid fa-question-circle'),
]
</script>

<style lang="scss" scoped>
</style>