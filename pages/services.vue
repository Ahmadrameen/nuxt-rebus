<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">Услуги</h1>

        <div class="mt-20">
            <div id="accordion-collapse" data-accordion="collapse"
                data-active-classes="bg-[#575756] dark:bg-gray-800 text-white dark:text-white">
                <div v-for="(item, index) in services" :key="item.index"
                    class="rounded-2xl my-5 overflow-hidden bg-[#F1F1F1]">
                    <h2 :id="'accordion-collapse-heading-' + item.id">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 text-left dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
                            :data-accordion-target="'#accordion-collapse-body-' + item.id" aria-expanded="true"
                            :aria-controls="'#accordion-collapse-body-' + item.id">
                            <span>
                                <p class="font-medium text-2xl mb-2">{{ item.title }}</p>
                                <p>{{ item.short_description }}</p>
                            </span>
                            <svg data-accordion-icon class="w-6 h-6 p-2 rounded-md rotate-180 shrink-0 bg-white text-black "
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div :id="'accordion-collapse-body-' + item.id" class="hidden"
                        :aria-labelledby="'accordion-collapse-heading-' + item.id">
                        <div class="p-5 text-white bg-[#575756]">
                            <div v-html="item.long_description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const api_base_url = useRuntimeConfig().public.api_base_url
const { data: services } = await useFetch(api_base_url + 'services', { headers });
</script>
<style scoped>
svg:is(.rotate-180) {
    background-color: #EA0E15;
}
</style>