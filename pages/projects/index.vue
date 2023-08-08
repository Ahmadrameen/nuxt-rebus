<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">Реализованные проекты</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
            <div v-for="item in projects" :key="item.id">
                <NuxtLink :to="`/projects/${item.slug}`">
                    <div class="rounded-3xl text-center flex flex-col items-center h-[400px]"
                        :style="'background:' + item.background_color">
                        <h1 class="heading1 mx-5 mt-10" :style="'color:' + item.text_color">{{ item.title }}</h1>
                        <div class="mt-auto">
                            <nuxt-img preload class="h-auto max-w-full w-2/3 rounded-l m-auto"
                                :src="storage_base_url + item.image" alt="{{item.title}}" loading="lazy" />
                        </div>
                    </div>
                </NuxtLink>
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
const { data: projects } = await useFetch(api_base_url + 'projects', { headers });
</script>