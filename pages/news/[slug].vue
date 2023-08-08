<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <div class="news-details-container">
            <h1 class="heading1" :style="'color:' + item.text_color">{{ item.title }}</h1>
            <p class="text-gray-400">{{ $dayjs(item.created_at).format('DD MMMM, YYYY') }}</p>
            <nuxt-img preload class="h-auto w-full rounded-3xl my-5" :src="storage_base_url + item.image" :alt="item.title"
                loading="lazy" />
            <div as="p" v-html="item.long_description"></div>
        </div>
        <div class="mt-36">
            <NewsSlider :slides="news" title="Больше новостей" source="/news/"/>
        </div>
    </div>
</template>
<script setup>
// Getting the slug from the route
const { slug } = useRoute().params

// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const storage_base_url = useRuntimeConfig().public.storage_base_url
const api_base_url = useRuntimeConfig().public.api_base_url
const { data: item } = await useFetch(api_base_url + 'news/' + slug, { headers });
const { data: news } = await useFetch(api_base_url + 'news', { headers });
</script>