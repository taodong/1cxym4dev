<template>
    <div class="duotail-page-wrapper"
         :class="noPadding ? `duotail-page-wrapper-no-padding` : ``"
         :id="props.id">
        <component
            v-for="sectionInfo in sections"
            :is="sectionInfo.component"
            :id="sectionInfo.id"
            :key="sectionInfo.id"
            :extra ="sectionInfo.extra"
        />
    </div>
</template>

<script setup>
import SectionInfo from "/src/models/SectionInfo.js"
import NavLink from "/src/models/NavLink.js"
import {inject, onBeforeMount} from "vue"

const currentPageSections = inject("currentPageSections")
const currentPageNavLinks = inject("currentPageNavLinks")

const props = defineProps({
    id: String,
    noPadding: Boolean,
    sections: {
        type: Array,
        validator(value) { return value.every(item => item instanceof SectionInfo) },
        required: true
    },
    navLinks: {
        type: Array,
        validator(value) { return value.every(item => item instanceof NavLink) },
        required: false,
        default: () => []
    }
})

onBeforeMount(() => {
    currentPageSections.value = props.sections
    currentPageNavLinks.value = props.navLinks || []
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-page-wrapper {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding-top:2rem),
        xxl: (padding-top:2.75rem),
        lg: (padding-top:3.5rem),
    ));
}

div.duotail-page-wrapper-no-padding {
    padding-top: 0!important;
}
</style>