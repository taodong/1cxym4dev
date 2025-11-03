<template>
    <div class="duotail-item-faq-question">
        <!-- Question Icon -->
        <div class="flex-shrink-0">
            
            <i class="fa fa-question-circle text-primary question-icon eq-h4"/>
        </div>

        <!-- Question Content -->
        <div class="duotail-item-faq-question-content">
            <div class="duotail-item-faq-question-header">
                <h5 class="duotail-item-faq-question-title lead-2"
                    v-html="parsedQuestion"/>
                <HtmlAnchor v-if="props.anchor" :anchor="props.anchor" customStyle="color: red"/>          
            </div>

            <p class="duotail-item-faq-question-answer text-4 text-light-7"
               v-html="parsedAnswer"/>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue"
import {useUtils} from "/src/composables/utils.js"
import HtmlAnchor from "/src/vue/components/widgets/HtmlAnchor.vue"

const utils = useUtils()

const props = defineProps({
    question: String,
    answer: String,
    anchor: {
        type: String,
        default: null
    }
})

const parsedQuestion = computed(() => {
    return utils.parseCustomText(props.question)
})

const parsedAnswer = computed(() => {
    return utils.parseCustomText(props.answer)
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.duotail-item-faq-question {
    display: flex;
}

div.duotail-item-faq-question-header {
    display: flex;
    align-items: center;
    gap: 1px; /* Adjust spacing between h5 and HtmlAnchor */
}

p.duotail-item-faq-question-answer {
    text-align: justify;
}

div.duotail-item-faq-question-content {
    margin-top: -2px;
    margin-left: 10px;
    @include media-breakpoint-down(sm) {
        margin-top: -1px;
    }
}
</style>