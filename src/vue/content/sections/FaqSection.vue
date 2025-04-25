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
                <ItemFaqQuestion question="What is an email address cluster?"
                                 answer='An email address cluster is a set of email adresses indentified by a shared prefix. For example, if <b>harry.pottery@duotail.com</b> is the root address of an account, any emails addresses starting with it, such as <b>harry.pottery_hogwarts@duotail.com</b>, <b>harry.potter_dailyprophet@duotail.com</b>, belong to the same account.'/>

                <ItemFaqQuestion question="What type of email clusters are offered and what are the difference?"
                                answer="<p>We believe Ivery internet user should be allowed to voice their opinions using two identities depending on situation, their real identity and an alias. So we designed our service to offer two types of email address clusters: <b>alias</b> and </b>personal</b>.</p><p>Functional wise, the only difference between these two clusters are <b>alias</b> cluster has an extra prefix header <b>a_</b>. For exmaple <b>harry.potter@duotail.com</b> is a personal email while <b>a_harry.potter@duotail.com</b> is an alias email. For personal email clusters, we will verify that the customer is a real person.</p>"/>


                <ItemFaqQuestion question="What steps should I follow to add a new object to the theme?"
                                 answer="To add a new section to the theme, start by creating a <b>Vue component</b> in the <i>sections</i> folder. Use the existing components as a guide to keep the design and functionality consistent. Inside the new component, define the necessary data like <b>texts, links, and other content</b>. Once you've set everything up, your new section should seamlessly integrate into the theme."/>
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

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>