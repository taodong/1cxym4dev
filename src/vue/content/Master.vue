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
            <FooterColumn title="About"
                          faIcon="fa-solid fa-pen-to-square me-1 d-none d-md-inline"
                          :description="[
                              `This template is maintained by Ryan Balieiro and is based on the <a href='https://getbootstrap.com/'>Bootstrap</a> framework and the <a href='https://vuejs.org/'>Vue</a> framework.`
                          ]"
                          :links="[
                              {label: `Privacy Policy`, href: `/privacy-policy`, faIcon: null},
                              {label: `License`, href: `/license`, faIcon: null},
                              {label: `Github Repo`, href: `https://github.com/ryanbalieiro/vue-agency-landing-page-template`, faIcon: null},
                          ]"
                          :displayLinksAsButtons="false"/>

            <FooterColumn title="Connect With Us"
                          faIcon=""
                          :description="[
                          ]"
                          :links="[
                              {label: `Twitter`, href: `https://twitter.com`, faIcon:`fa-brands fa-twitter`},
                              {label: `TikTok`, href: `https://tiktok.com`, faIcon:`fa-brands fa-tiktok`},
                              {label: `Linkedin`, href: `https://linkedin.com`, faIcon:`fa-brands fa-linkedin`},
                              {label: `Spotify`, href: `https://spotify.com`, faIcon:`fa-brands fa-spotify`},
                          ]"
                          :displayLinksAsButtons="true"/>

            <FooterColumn title="Contact Info"
                          faIcon="fa fa-fax me-2"
                          :description="[
                              `999 Vue Developer's Avenue, 4A Suite 32`,
                              `Cupertino – CA 01235`
                          ]"
                          :links="[
                              {label: `(555) 555-1234`, href: `tel:123456789`, faIcon: 'fa-regular fa-bell'},
                              {label: `contact@foxyagency.com`, href: `mailto:foxy@agency.com`, faIcon: 'fa-regular fa-envelope'},
                          ]"
                          :displayLinksAsButtons="false"/>
        </FooterBlock>

        <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright holder="Ryan Balieiro"
                             url="https://github.com/ryanbalieiro"
                             license="Distributed Under the MIT License"/>
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