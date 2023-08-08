<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 grayscale">
        <h1 class="heading1">{{ title }}</h1>
        <Splide :options="options" :extensions="{ AutoScroll }">
            <SplideSlide v-for="(item, index) in icons" :key="item.id" class="rounded-2xl p-6">
                <div class="item">
                    <img :src="storage_base_url + item.image">
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>
<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/vue-splide/css';
// Props
const { data: icons, title } = defineProps(['icons', 'title'])

// Configs
const storage_base_url = useRuntimeConfig().public.storage_base_url

// Splide configs
const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    autoWidth: true,
    pagination: false,
    arrows: false,
    gap: 50,
    autoScroll: {
        speed: 1,
    },
};
</script>
<style scoped>

.item {
  width: 100px;
  transition: width 1s ease;
}
</style>