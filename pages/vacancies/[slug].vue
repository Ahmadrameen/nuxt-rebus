<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">

        <h1 class="heading1">{{ item.details.name }}</h1>

        <div class="md:flex gap-10 space-y-10 md:space-y-0">
            <div class="space-y-5 basis-3/4">
                <div class="border border-[#D9D9D9] w-full rounded-3xl p-5">
                    <p v-html="item.details.description"></p>

                    <h2 class="heading2 mt-20">Навыки</h2>
                    <div class="grid grid-cols-2 w-1/1 md:flex gap-3">
                        <span v-for="skill in item.skills" :key="skill.id"
                            class="bg-[#EBEBEB] rounded-xl px-5 text-center">{{
                                skill.name.en }}</span>
                    </div>
                </div>
            </div>
            <div class="bg-[#F5F5F5] p-5 basis-1/4 rounded-3xl">
                <div class="mb-10">
                    <h2 class="heading2">График работы:</h2>
                    <p>5/7 <br> 8 часовой рабочий день</p>
                </div>
                <div>
                    <h2 class="heading2">Условия:</h2>
                    <p>все хорошо, просто приди
                        и работай</p>
                </div>

                <nuxt-link to="/vacancies/list" type="button"
                    class="rounded-full w-full text-center px-5 py-2 text-white bg-[#EA0E15] mt-10 text-sm font-semibold sm:inline shadow-sm">Отправить
                    заявку</nuxt-link>
            </div>
        </div>

        <Splide :options="options" class="transition-all vacancies_slide" aria-label="My Favorite Images">
            <SplideSlide v-for="(item, index) in vacancies" :key="item.id"
                class="rounded-2xl h-60 mr-80 p-6 border border-gray-300 hover:bg-[#D9D9D9]">
                <NuxtLink :to="`/vacancies/${item.slug}`">

                    <div class="justify-between">
                        <h2 class="heading2 mb-0">{{ item.name }}</h2>
                        <span class="text-gray-500">
                            <span>{{ $dayjs(item.created_at).format('DD-MM-YYYY') }}</span><br>
                            <span>{{ item.city.name.en }}</span>
                        </span>
                    </div>
                    <div class="text-[#EA0E15]">{{ item.level.name.en }}, {{ item.schedule.name.en }}</div>

                    <p v-html="item.short_description" class="mt-5"></p>

                </NuxtLink>
            </SplideSlide>
        </Splide>
    </div>
</template>
<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

// Splide options
const options = {
    type: "slide",
    focus: 0,
    perPage: 3,
    gap: '1rem',
    updateOnMove: true,
    pagination: false,

    breakpoints: {
        640: {
            perPage: 1,
        },
    }
};

// Getting the slug from the route
const { slug } = useRoute().params


// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const api_base_url = useRuntimeConfig().public.api_base_url
const { data: item } = await useFetch(api_base_url + 'vacancies/' + slug, { headers });
const { data: vacancies } = await useFetch(api_base_url + 'vacancies', { headers });
</script>

<style>
.vacancies_slide .splide__track {
    border-radius: 1rem;
    margin-top: 100px;
}

.vacancies_slide .splide__arrow--prev,
.splide__arrow--next {
    top: -30px;
}

.vacancies_slide .splide__arrow--prev {
    right: 2.5em !important;
    left: auto;
}

.vacancies_slide .splide__arrow--next {
    right: 0em;
}

.vacancies_slide .splide__arrow {
    border-radius: 5px;
}
</style>