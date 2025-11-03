<template>
    <div class="duotail-testimonial-item card h-100">
        <!-- Header -->
        <div class="card-header">
            <ImageView :src="props.image"
                       :alt="props.title"
                       class="duotail-testimonial-thumbnail"/>

            <h4 class="duotail-testimonial-title ms-3 mt-2"
                v-html="parsedTitle"/>
        </div>

        <div class="card-body text-4">
            <ul class="list-group">
                <li v-for="feature in props.features"
                    :key="feature"
                    class="list-group-item d-flex justify-content-between align-items-left border-0"
                    v-html="utils.parseCustomText(feature)"/>
            </ul>
        </div>

        <div class="card-footer">
            <p class="price-text" v-html="parsedPrice"/>
            
        
             <!-- Button -->
             <Link :url="props.buttonUrl">
                    <XLButton :label="props.buttonText"
                              :class="`mt-6`"/>
             </Link>
        </div>
    </div>
</template>

<script setup>
import ImageView from "/src/vue/components/generic/ImageView.vue"
import {computed} from "vue"
import {useUtils} from "/src/composables/utils.js"
import Link from "/src/vue/components/generic/Link.vue"
import XLButton from "/src/vue/components/widgets/XLButton.vue"

const utils = useUtils()

const props = defineProps({
    title: String,
    image: String,
    features: {
        type: Array,
        default: () => []
    },
    price: String,
    buttonUrl: String,
    buttonText: String   
})

const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title)
})

const parsedPrice = computed(() => {
    return utils.parseCustomText(props.price)
}) 
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-testimonial-item {
    @include generate-dynamic-styles-with-hash((
        xxxl: (min-height: calc(100% - 25px), padding: 15px),
        md:   (min-height: 30vh)
    ));

    border: 0;
    background-color: lighten($primary, 47%);
    border-radius: 20px;
    user-select: none;
}

div.card-header {
    border: none;
    padding: 1rem;
    background-color: transparent;
    display: flex;
    align-items: center;
}

div.duotail-testimonial-thumbnail {
    --icon-size:60px;
    @include media-breakpoint-down(sm) {--icon-size: 50px;}

    height: var(--icon-size);
    width: var(--icon-size);
    border:none;
}

div.card-footer {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding-top: 1rem),
        sm:   (padding-top: 0)
    ));

    border: none;
    background-color: transparent;
}

div.card-footer .price-text {
    padding-left: 1rem;
}
</style>