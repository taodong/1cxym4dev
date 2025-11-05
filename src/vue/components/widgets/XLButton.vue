<template>
    <button class="btn btn-xl"
            :type="props.type || 'button'"
            :class="[defaultVariantClass, props.class]">
        <i class="me-2" :class="props.icon"/>
        <span v-html="props.label"/>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    class: String,
    label: String,
    type: String,
    icon: String,
})

// Bootstrap variant classes to check
const variantClasses = [
  'btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning',
  'btn-info', 'btn-light', 'btn-dark', 'btn-link'
]

// Normalize props.class to a list of class tokens
const classTokens = computed(() => {
  const cls = props.class
  if (!cls) return []
  if (Array.isArray(cls)) return cls.flatMap(s => String(s).split(/\s+/)).filter(Boolean)
  if (typeof cls === 'object') return Object.keys(cls).filter(k => cls[k])
  return String(cls).split(/\s+/).filter(Boolean)
})

const hasVariant = computed(() => classTokens.value.some(c => variantClasses.includes(c)))
const defaultVariantClass = computed(() => (hasVariant.value ? null : 'btn-primary'))
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

button.btn-xl {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 1.125rem 2.3rem, font-size: 1.125rem),
        xxl:  (padding: 1rem 2rem, font-size: 1rem),
        lg:   (padding: 1rem 1.5rem, font-size: 0.9rem)
    ));

    border-radius: 4rem;
    font-weight: 400;
    font-family: $headings-font-family;
    text-transform: uppercase;
}
</style>