<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">{{ title }}</h1>
        <Splide :options="options" class="transition-all multiple_slide" aria-label="My Favorite Images">
            <SplideSlide v-for="(item, index) in services" :key="item.id" class="rounded-2xl h-60 mr-80 p-6">
                <h1 class="text-2xl">{{ item.title }}</h1>
                <div class="bottom-10 absolute pb-2 border-b-[1px] w-[87%] flex justify-between">
                    <p>{{ item.short_description }}</p>
                    <ArrowUpRightIcon class="block h-6 w-10" aria-hidden="true" />
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import '@splidejs/vue-splide/css';

const { services, title } = defineProps(['services', 'title'])

const options = {
    type: "slide",
    focus: 0,
    perPage: 3,
    autoWidth: true,
    gap: '1rem',
    updateOnMove: true,
    pagination: false,
};
</script>


<style>
.multiple_slide .splide__slide:not(.is-active, .is-next) {
    background-color: #555555;
    color: white;
    width: 300px !important;
}

.multiple_slide .splide__slide.is-active {
        background-color: #EA0E15;
        transition: all 0.3s ease;
        color: white;
    }

.multiple_slide .is-next {
    background-color: #2B2A2A;
    color: white;
    width: 400px !important;
}

.multiple_slide .splide__track {
    border-radius: 1rem;
}

.multiple_slide .splide__arrow--prev,
.splide__arrow--next {
    top: -30px;
}

.multiple_slide .splide__arrow--prev {
    right: 2.5em !important;
    left: auto;
}

.multiple_slide .splide__arrow--next {
    right: 0em;
}

.multiple_slide .splide__arrow {
    border-radius: 5px;
}

@media screen and (min-width: 340px) {
    .multiple_slide .splide__slide.is-active {
        width: 100% !important;
    }
}

@media screen and (min-width: 768px) {
    .multiple_slide .splide__slide.is-active {
        width: 500px !important;
    }

}
</style>