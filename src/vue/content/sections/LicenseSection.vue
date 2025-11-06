<template>
    <!-- License Section -->
    <PageSection variant="default"
                 :id="props.id">
        <Breadcrumbs/>

        <PageSectionHeader title="*Terms* of Service"
                           subtitle="Terms and Conditions"/>

        <PageSectionContent>
            <!-- Dynamic content from terms.json -->
            <ArticleParagraph v-for="(term, index) in terms"
                              :key="index"
                              :title="term.title"
                              :fa-icon="term.icon"
                              :description="term.description"/>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue";
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue";
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue";
import ArticleParagraph from "/src/vue/components/articles/ArticleParagraph.vue";
import Breadcrumbs from "/src/vue/components/widgets/Breadcrumbs.vue";
import termsData from "/src/data/terms.json";

const props = defineProps({
    id: String
});

const terms = termsData.terms;
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>