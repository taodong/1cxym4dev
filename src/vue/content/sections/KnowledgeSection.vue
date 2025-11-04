<template>
    <!-- About Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <Breadcrumbs/>

        <!-- Title -->
        <PageSectionHeader title="*Knowledge* Base"
                           subtitle="Understand Our Email System"/>

        <!-- Content -->
        <PageSectionContent>
            <template v-for="(section, index) in knowledgeData" :key="index">
                <SectionTitle :text="section.title" />
                <ArticleFaq>
                    <template v-for="(item, itemIndex) in section.content" :key="itemIndex">
                        <ItemFaqQuestion
                            :icon="item.icon"
                            :anchor="item.anchor"
                            :question="item.question"
                            :answer="item.answer"/>
                    </template>
                </ArticleFaq>
            </template>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import Breadcrumbs from "/src/vue/components/widgets/Breadcrumbs.vue"
import ArticleFaq from "/src/vue/components/articles/ArticleFaq.vue"
import ItemFaqQuestion from "/src/vue/components/articles/items/ItemFaqQuestion.vue"
import SectionTitle from "/src/vue/components/widgets/SectionTitle.vue"
import knowledge from "/src/data/knowledge.json";

const props = defineProps({
    id: String
});

const knowledgeData = knowledge;
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>