<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="Questions and *Answers*"
                           subtitle="How our product is tailered for your needs"/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleFaq>
                <ItemFaqQuestion v-for="(faq, index) in faqs" 
                                 :key="index" 
                                 :question="faq.question" 
                                 :answer="faq.answer" />
            </ArticleFaq>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleFaq from "/src/vue/components/articles/ArticleFaq.vue"
import ItemFaqQuestion from "/src/vue/components/articles/items/ItemFaqQuestion.vue"
import faqData from "/src/data/faq.json";

const props = defineProps({
    id: String
});

const faqs = faqData.faqs;
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>