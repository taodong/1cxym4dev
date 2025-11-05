<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="*Price* Plans"
                           subtitle="Tailored for your needs"/>

        <!-- Content -->
        <PageSectionContent>
            <article class="duotail-testimonials">
                <!-- Swiper -->
                <swiper
                    class="duotail-testimonials-swiper px-1"
                    :slidesPerView="3"
                    :spaceBetween="20"
                    :pagination="{clickable: true}"
                    :modules="[Pagination]"
                    :grab-cursor="true"
                    :prevent-clicks-propagation="true"
                    :breakpoints = "{
                        0:    {slidesPerView: 1},
                        768:  {slidesPerView: 2},
                        1200: {slidesPerView: 3}
                    }">

                    <swiper-slide v-for="(price, index) in prices"
                                  :key="index">
                        <PriceItem
                            :title="price.title"
                            :description="price.description"
                            :image="price.image"
                            :features="price.features"
                            :price="price.price"
                            :buttonUrl="price.button.link"
                            :buttonText="price.button.text"
                            :buttonType="price.button.type"
                            :buttonNotice="price.button.notice"
                            @notify="onNotify"/>
                    </swiper-slide>

                </swiper>
            </article>
        </PageSectionContent>

        <!-- Notification Modal (single instance) -->
        <NotificationPopup :notification="notification" @close="notification = null" />
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import PriceItem from "/src/vue/components/articles/items/PriceItem.vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import pricesData from "/src/data/price.json"
import { ref } from 'vue'
import NotificationPopup from "/src/vue/components/widgets/NotificationPopup.vue"

const props = defineProps({
    id: String
})

const prices = pricesData.prices

// Notification state managed at section level
const notification = ref(null)

const onNotify = (payload) => {
    // Expecting payload: { message: string, level: 'info' | 'warning' | 'error' }
    notification.value = payload
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.swiper {
    height: 100%;

    .swiper-slide {
        margin-bottom: 40px;
        height: auto!important;
    }
}
</style>