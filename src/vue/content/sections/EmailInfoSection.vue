<template>
    <!-- About Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <Breadcrumbs/>

        <!-- Title -->
        <PageSectionHeader title="*Email* Information"
                           subtitle="Understand Our Email Information"/>

        <!-- Content -->
        <PageSectionContent>
            <SectionTitle text="*Email Summary Table*" />
            <ArticleFaq>
                <ItemFaqQuestion
                    question="What is an email address cluster?" 
                    answer='An email address cluster is a set of email adresses indentified by a shared prefix. For example, if <b>harry.pottery@duotail.com</b> is the root address of an account, any emails addresses starting with it, such as <b>harry.pottery_hogwarts@duotail.com</b>, <b>harry.potter_dailyprophet@duotail.com</b>, belong to the same account.'/>

                <ItemFaqQuestion anchor="question-1"
                    question="What is an email address cluster?" 
                    answer='An email address cluster is a set of email adresses indentified by a shared prefix. For example, if <b>harry.pottery@duotail.com</b> is the root address of an account, any emails addresses starting with it, such as <b>harry.pottery_hogwarts@duotail.com</b>, <b>harry.potter_dailyprophet@duotail.com</b>, belong to the same account.'/>

                <ItemFaqQuestion anchor="question-2"
                    question="What type of email clusters are offered and what are the difference?"
                    answer="<p>We believe Ivery internet user should be allowed to voice their opinions using two identities depending on situation, their real identity and an alias. So we designed our service to offer two types of email address clusters: <b>alias</b> and </b>personal</b>.</p><p>Functional wise, the only difference between these two clusters are <b>alias</b> cluster has an extra prefix header <b>a_</b>. For exmaple <b>harry.potter@duotail.com</b> is a personal email while <b>a_harry.potter@duotail.com</b> is an alias email. For personal email clusters, we will verify that the customer is a real person.</p>"/>

            </ArticleFaq>
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

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>