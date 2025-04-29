<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="*Price* Plans"
                           subtitle="Plans for every needs"/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleTestimonials>
                <PriceItem title="Alias"
                            image="images/prices/alias.svg"
                            :features="['<b>Alias Cluster:</b>*1*', '<b>Received Emails:</b>*Unlimited*', '<b>Replied Emails:</b>*Unlimited*']"
                            price="<span class='fs-1'>Free<span>" 
                            buttonUrl="https://www.duotail.com"
                            buttonText="Signup"
                            />

                <PriceItem title="Individual"
                            image="images/prices/individual.svg"
                            :features="['<b>Personal Cluster:</b>*1*', '<b>Alias Cluster:</b>*3*', '<b>Sent Emails:</b>*150*', '<b>Received Emails:</b>*Unlimited*', '<b>Replied Emails:</b>*Unlimited*']"
                            price="<span class='fs-1'>$10<span><span class='fs-3'>/mon</spa>" 
                            buttonUrl="https://www.duotail.com"
                            buttonText="Join Waiting List"
                            />

                <PriceItem title="Family"
                            image="images/prices/family.svg"
                            :features="['<b>Personal Cluster:</b>*4*', '<b>Alias Cluster:</b>*12*', '<b>Sent Emails:</b>*600*', '<b>Received Emails:</b>*Unlimited*', '<b>Replied Emails:</b>*Unlimited*']"
                            price="<span class='fs-1'>$20<span><span class='fs-3'>/mon</spa>" 
                            buttonUrl="https://www.duotail.com"
                            buttonText="Join Waiting List"
                            />

            </ArticleTestimonials>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleTestimonials from "/src/vue/components/articles/ArticleTestimonials.vue"
import PriceItem from "/src/vue/components/articles/items/PriceItem.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>