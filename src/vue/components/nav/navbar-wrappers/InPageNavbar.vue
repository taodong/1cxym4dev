<template>
    <Navbar :brand-logo="logo"
            :brand-label="label"
            brand-url="#"
            :link-list="linkList"
            :expandable="true"/>
</template>

<script setup>
import Navbar from "/src/vue/components/nav/navbar/Navbar.vue"
import {computed, inject, onMounted, onUnmounted, ref, watch} from "vue"
import {useRoute} from "vue-router"
import {useLayout} from "/src/composables/layout.js"

const route = useRoute()
const layout = useLayout()

/**
 * @type {{value: SectionInfo[]}}
 */
const currentPageSections = inject("currentPageSections")
const currentPageNavLinks = inject("currentPageNavLinks")

const LoaderAnimationStatus = inject("LoaderAnimationStatus")
const loaderAnimationStatus = inject("loaderAnimationStatus")

const currentSection = ref(null)

defineProps({
    logo: String,
    label: String
})

const linkList = computed(() => {
    const sections = currentPageSections?.value
    if(!sections || !sections.length)
        return []

    var sectionLinkList = sections.map(section => {
        return {
            path: section.hash,
            label: section.name,
            faIcon: section.faIcon,
            isActive: currentSection.value?.id === section.id
        }
    }).filter(section => section.label && section.path)

    const navLinks = currentPageNavLinks?.value || []

    // Find a "login" link by id
    const loginLink = navLinks.find(link => link.id === "login")

    // Map non-login nav links
    const otherNavLinkList = navLinks
        .filter(link => link.id !== "login")
        .map(link => ({
            path: link.route,
            label: link.name,
            faIcon: link.faIcon,
            isActive: false
        }))

    // If a home link exists, put it first; then sections; then the rest
    if (loginLink) {
        const homeItem = {
            path: loginLink.route,
            label: loginLink.name,
            faIcon: loginLink.faIcon,
            isActive: false
        }
        return [homeItem, ...sectionLinkList, ...otherNavLinkList]
    }

    // Default order when no home link
    return [...sectionLinkList, ...otherNavLinkList]
})

onMounted(() => {
    window.addEventListener('scroll', _onWindowEvent)
    window.addEventListener('resize', _onWindowEvent)
    _initSpyScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', _onWindowEvent)
    window.removeEventListener('resize', _onWindowEvent)
})

watch(() => loaderAnimationStatus.value, () => {
    if(loaderAnimationStatus.value === LoaderAnimationStatus.LEAVING) {
        _onWindowEvent()
    }
})

const _initSpyScroll = () => {
    setTimeout(() => {
        _onWindowEvent()
        _scrollHashSectionIntoView()
    }, 400)
}

const _scrollHashSectionIntoView = () => {
    const hash = route.hash
    if(!hash)
        return

    const sectionDiv = document.querySelector(hash)
    if(sectionDiv) {
        layout.scrollIntoView(sectionDiv)
    }
}

const _onWindowEvent = () => {
    let lowestOffset = null

    if(window.scrollY < window.innerHeight/4) {
        currentSection.value = null
        return
    }

    const sections = currentPageSections?.value
    for (const section of sections) {
        const sectionDiv = document.querySelector(section.hash)
        if (!sectionDiv) continue

        const offset = Math.abs(sectionDiv.getBoundingClientRect().y)
        if (lowestOffset === null || offset < lowestOffset) {
            lowestOffset = offset
            currentSection.value = section
        }
    }
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>