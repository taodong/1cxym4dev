<template>
    <div class="section-title-container">
        <h2 class="fs-4 fw-bold text-center" v-html="parsedTitle"></h2>
    </div>
</template>

<script>
import { useUtils } from '/src/composables/utils';

export default {
    name: 'SectionTitle',
    props: {
        text: {
            type: String,
            required: true
        },
        contrastTitle: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        parsedTitle() {
            const { parseCustomText } = useUtils();
            return parseCustomText(this.text, this.contrastTitle);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.section-title-container {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-bottom: 2rem),
        xxl:  (margin-bottom: 1.5rem),
        lg:   (margin-bottom: 1.5rem),
        md:   (margin-bottom: 1.25rem),
        sm:   (margin-bottom: 1.25rem),
    ));
}
</style>