<template>
    <!-- Navigation -->
    <Navigation logo="images/logo/logo-small.png"
                label="*Duo*Tail"/>

    <!-- Content Display -->
    <router-view/>

    <!-- Footer -->
    <Footer>
        <FooterBlock :darken="false"
                     :row="true">
            <FooterColumn title="Credits"
                          faIcon="fa-solid fa-award me-1 d-none d-md-inline"
                          :description="[
                              `The look and feel of this website is developed above Ryan Balieiro's <a href='https://github.com/ryanbalieiro/vue-agency-landing-page-template/' target='_blank'>Foxy - Vue Agency Landing Page</a> framework.`
                          ]"
                          :links="[]"
                          :displayLinksAsButtons="false"/>

            <FooterColumn title="Contact Info"
                          faIcon="fa fa-fax me-2"
                          :description="[
                              `For any support or feedback, reach out to us at:`,
                              `<i class='fa-regular fa-envelope'></i> Support:&nbsp;<a href='mailto:support@duotail.com'>support@duotail.com</a>`,
                              `<i class='fa-regular fa-envelope'></i> Feedback:&nbsp;<a href='mailto:feedback@duotail.com'>feedback@duotail.com</a>`
                          ]"
                          :links="[]"
                          :displayLinksAsButtons="false"/>
        </FooterBlock>

        <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright holder="www.duotail.com"
                             url="https://www.duotail.com"
                             />
        </FooterBlock>
    </Footer>
</template>

<script setup>
import Navigation from "/src/vue/components/nav/Navigation.vue"
import Footer from "/src/vue/components/footer/Footer.vue"
import FooterBlock from "/src/vue/components/footer/FooterBlock.vue"
import FooterCopyright from "/src/vue/components/footer/FooterCopyright.vue"
import FooterColumn from "/src/vue/components/footer/FooterColumn.vue"
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>