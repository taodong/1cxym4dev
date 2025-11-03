<template>
    <!-- Site Section -->
    <section class="duotail-section"
             :id="id"
             :class="classList">

        <BackgroundPromo v-if="props.variant === 'promo'"
                         :faded="true"/>

        <!-- Container -->
        <div class="container-xxl">
            <slot/>
        </div>
    </section>
</template>

<script setup>
import {computed} from "vue"
import BackgroundPromo from "/src/vue/components/layout/BackgroundPromo.vue"

const props = defineProps({
    id: String,
    variant: String, // default, primary, dark or promo.
    name: String,
    faIcon: String
})

const classList = computed(() => {
    return props.variant ?
        `duotail-section-${props.variant}` :
        ``
})
</script>

<style lang="scss">
@import "/src/scss/_theming.scss";

section.duotail-section {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 4rem 0em 5rem),
        xxl:  (padding: 3rem 0rem 3.5rem),
        lg:   (padding: 2.5rem 0rem 3.5rem),
        md:   (padding: 2.25rem 0rem 3.25rem),
        sm:   (padding: 2rem 0rem 3rem),
    ));

    background-color: $background-color;
    position: relative;

    .duotail-promo-background {
        display: block;
        margin-top: -4rem;
    }
}

section.duotail-section-primary {
    background-color: lighten($primary, 38%);
}

section.duotail-section-dark {
    background-color: lighten($dark, 10%);
    color: $text-normal-contrast;

    h5.duotail-section-header-subtitle {
        color: $light-5;
    }
}

section.duotail-section-promo {
    background-color: transparent;
}
</style>