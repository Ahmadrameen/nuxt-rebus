<template>
    <div class="mx-auto max-w-7xl my-10">
        <h1 class="heading1">{{ title }}</h1>
        <div class="bg-gray-100 mx-[-20px] md:mx-0 md:rounded-2xl">
            <Splide :options="options" class="transition-all multiple_slide_news p-5 md:p10">
                <SplideSlide v-for="(item, index) in slides" :key="item.id" class="rounded-2xl p-6">
                    <nuxt-link :to="`${source}${item.slug}`">
                        <div class="h-54 rounded-2xl overflow-hidden">
                            <img class="object-cover" :src="storage_base_url + item.image" alt="{{item.title}}">
                        </div>
                        <h1 class="text-2xl mt-4">{{ item.title }}</h1>
                        <div class="flex justify-between">
                            <p>{{ item.short_description }}</p>
                        </div>
                    </nuxt-link>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';

// Props
const { slides, title, source } = defineProps(['slides', 'title', 'source'])

// Configs
const storage_base_url = useRuntimeConfig().public.storage_base_url

// Slider config
const options = {
    type: "loop",
    perPage: 3,
    breakpoints: {
        820: {
            perPage: 2,
        },
        390: {
            perPage: 1,
        },
    },
    perMove: 1,
    autoWidth: false,
    gap: '1rem',
    pagination: false,
};
</script>


<style>
.multiple_slide_news .splide__slide {
    background-color: white;
    color: black;
}

.multiple_slide_news .splide__track {
    border-radius: 1rem;
}

.multiple_slide_news .splide__arrow--prev,
.multiple_slide_news .splide__arrow--next {
    top: -30px;
}

.multiple_slide_news .splide__arrow--prev {
    right: 2.5em !important;
    left: auto;
}

.multiple_slide_news .splide__arrow--next {
    right: 0em;
}

.multiple_slide_news .splide__arrow {
    border-radius: 5px;
}

@media screen and (max-width: 600px) {
    .multiple_slide_news .splide__arrow--prev {
        right: 3.5em !important;
        left: auto;
    }

    .multiple_slide_news .splide__arrow--next {
        right: 1em;
    }
}
</style>