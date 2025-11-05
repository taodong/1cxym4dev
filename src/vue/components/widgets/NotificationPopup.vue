<template>
    <div class="modal modal-xl fade duotail-notification-modal"
         :id="instanceId"
         tabindex="-1"
         :aria-labelledby="labelId">
        <div class="modal-dialog modal-dialog-centered">
            <!-- Modal Content -->
            <div class="modal-content">
                <!-- Close Button -->
                <button class="close-button"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                    <i class="fa fa-close"/>
                </button>

                <!-- Banner -->
                <div class="modal-body py-5 py-lg-4">
                    <div v-if="notification" class="d-flex align-items-start gap-3 text-left text-6 text-light-7">
                        <i :class="['fa', iconName, iconColorClass]" aria-hidden="true" />
                        <p class="mb-0" v-html="notification.message"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import {onMounted, ref, watch, computed} from "vue"
import Modal from 'bootstrap/js/src/modal'

const props = defineProps({
    notification: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close'])

const bsModal = ref(null)

// Generate unique ids per component instance
const instanceId = `duotail-notification-modal-${Math.random().toString(36).slice(2, 9)}`
const labelId = `${instanceId}-label`

onMounted(() => {
    const elModal = document.getElementById(instanceId)
    if (!elModal) return
    bsModal.value = new Modal(elModal, {})
    elModal.addEventListener('hide.bs.modal', _onWillHide)
    elModal.addEventListener('hidden.bs.modal', _onHidden)
})

watch(() => props.notification, (val) => {
    if (!bsModal.value) return
    if (val) bsModal.value.show()
    else bsModal.value.hide()
}, { immediate: true })

const level = computed(() => props.notification?.level ?? 'info')
const iconName = computed(() => {
    switch (level.value) {
        case 'warning': return 'fa-circle-exclamation'
        case 'error': return 'fa-triangle-exclamation'
        default: return 'fa-circle-info'
    }
})
const iconColorClass = computed(() => level.value === 'error' ? 'text-danger' : 'text-primary')

const _onWillHide = () => {
    if (document.activeElement) {
        document.activeElement.blur()
    }
}

const _onHidden = () => {
    emit("close")
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.modal-content {
    background-color: $light-1;
}

.modal-xl {
    @include media-breakpoint-down(xl) {
        .modal-dialog {
            min-width: 90vw !important;
        }
    }
}

button.close-button {
    position: absolute;
    z-index: 99;
    right: 20px;
    top: 10px;

    padding: 0;
    margin: 0;
    font-size: 1.7rem;

    background-color: transparent;
    border-color: transparent;
    color:$light-4;

    &:hover {
        color: $primary;
    }
}
</style>
