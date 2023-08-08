<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">Реализованные проекты</h1>

        <div class="grid grid-cols-1 mt-20">
            <div v-for="item in news" :key="item.id"
                class="grid grid-cols-2 gap-20 rounded-3xl border-2 border-gray-400 mb-10">
                <div>
                    <nuxt-img preload class="h-auto max-w-full rounded-lg m-5" :src="storage_base_url + item.image"
                        :alt="item.title" loading="lazy" />
                </div>
                <div class="relative">
                    <p class="my-5">{{ $dayjs(item.created_at).format('DD MMMM, YYYY') }}</p>
                    <h1 class="heading1" :style="'color:' + item.text_color">{{ item.title }}</h1>
                    <p>{{ item.short_description }}</p>
                    <NuxtLink :to="`/news/${item.slug}`"
                        class="absolute mt-auto bottom-5 text-[#EA0E15] font-semibold text-3xl border-b-2 border-red-600">
                        Подробнее</NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const storage_base_url = useRuntimeConfig().public.storage_base_url
const api_base_url = useRuntimeConfig().public.api_base_url
const { data: news } = await useFetch(api_base_url + 'news', { headers });
</script>