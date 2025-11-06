<template>
    <div class="duotail-navbar-links-wrapper">
        <ul class="duotail-navbar-links" :class="`${collapsed ? 'collapsed' : ''}`">
            <li v-for="link in parsedLinks">
                <Link :url="link.path">
                    <button class="duotail-nav-link"
                            @click="_onLinkClicked"
                            :class="link.buttonClass">
                        <i v-if="link.faIcon"
                           :class="link.faIcon"
                           class="duotail-nav-link-icon"/>

                        <span>
                            {{link.label}}
                        </span>
                    </button>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue"
import Link from "/src/vue/components/generic/Link.vue"

const props = defineProps({
    items: Array,
    collapsed: Boolean
})
const emit = defineEmits(['linkClicked'])

const transitionLinks = ref([])

const parsedLinks = computed(() => {
    return props.items.map((item, index) => ({
        path: item.path,
        label: item.label,
        faIcon: item.faIcon,
        buttonClass: {
            active: item.isActive,
            hidden: transitionLinks.value.indexOf(index) === -1
        }
    }))
})

onMounted(() => {
    _executeTransition(props.collapsed)
})

watch(() => props.collapsed, (newVal) => {
    _executeTransition(newVal)
})

const _executeTransition = (collapsed) => {
    transitionLinks.value = []
    if (collapsed) return

    parsedLinks.value.forEach((_, i) => {
        setTimeout(() => {
            transitionLinks.value.push(i)
        }, 50 * i)
    })
}

const _onLinkClicked = () => {
    emit('linkClicked')
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

ul.duotail-navbar-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    @include media-breakpoint-down(lg) {
        flex-direction: column;
        margin: 2px 0 15px;
    }
}

ul.duotail-navbar-links.collapsed {
    @include media-breakpoint-down(lg) {
        display: none;
    }
}

button.duotail-nav-link {
    background-color: transparent;
    border: 0;
    padding: 0 0 0 1.2rem;

    font-family: $font-family-base;
    color: $light-3;
    text-transform: uppercase;

    @include media-breakpoint-down(xl) {
        padding: 0 0 0 0.9rem;
    }

    @include media-breakpoint-down(lg) {
        padding: 0!important;
        min-width: 160px;
        text-align: left;
        margin-left: 12px;
        margin-bottom: 8px;
        font-size: 0.85rem;

        transition: 0.2s ease-in margin-left, 0.2s ease-in opacity;
    }

    @media (max-height: 400px) {
        margin-bottom: 4px;
    }
}

i.duotail-nav-link-icon {
    display: none;

    min-width: 1.4rem;
    margin-right: 10px;
    color: $light-6;
    transition: color 0.4s;

    @include media-breakpoint-down(lg) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}

button.duotail-nav-link.hidden {
   @include media-breakpoint-down(lg) {
       opacity: 0;
       margin-left: 80px;
   }
}

button.duotail-nav-link:hover, button.duotail-nav-link.active {
    color: lighten($primary, 5%);
    i.duotail-nav-link-icon {
        color: lighten($primary, 25%);
    }
}
</style>