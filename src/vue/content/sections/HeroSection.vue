<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="Duotail *Email Address Service*  <br> <span class='text-danger'>!!!THIS IS A DEV FRONT END TEST SITE!!!</span>"
                subtitle="We offer non-intrusive email addresses to secure your personal mailboxes."
                logo-url="images/logo/logo-128x128.png"
                :show-button="true"
                :buttons="[
                    { label: 'Get started — No Cost, No Catch', icon: 'fa-solid fa-arrow-right', url: 'get-started' },
                    { label: 'Find Out More', icon: 'fa-solid fa-search', url: '#faq' }
                ]"
                @click="_onHeaderClick"/>

    <NotificationPopup :notification="notification"
                       @close="_onPopupClose"/>
</template>

<script setup>
import { ref } from "vue"
import PageHeader from "/src/vue/components/layout/PageHeader.vue"
import NotificationPopup from "/src/vue/components/widgets/NotificationPopup.vue"

const props = defineProps({
    id: String
})

const notification = ref(null)

const _onHeaderClick = (url) => {
    if (url === 'get-started') {
        notification.value = {
            message: 'Thank you for your interest! The Get Started page is coming soon.',
            level: 'info'
        }
    }
}

const _onPopupClose = () => {
    notification.value = null
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>