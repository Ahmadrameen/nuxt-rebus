<template>
    <div>
        <div class="grid md:grid-rows-1 grid-rows-2 grid-flow-col">
            <div class="row-span-1 md:row-span-2 w-1/3 ">
                <h1 class="heading1">{{ title }}</h1>
            </div>
            <div class="col-span-1 grid grid-cols-3 gap-4 w-3/3">
                <div v-for="item in data" :key="item.id" class="border border-black rounded-xl overflow-hidden">
                    <img preload class="object-cover" :src="storage_base_url + item.image" alt="{{item.title}}"
                        loading="lazy" @click="showFullScreen(storage_base_url + item.image)" />
                </div>
            </div>
        </div>
    </div>

    <Lightbox :currentImage="currentImage" v-if="showLightbox" />
    <p v-if="showLightbox" class="fixed top-0 right-0 z-[9999] text-white" @click="closeFullScreen">
        <XMarkIcon class="block h-12 w-12" aria-hidden="true" />
    </p>
</template>
<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

const currentImage = ref()
const showLightbox = ref(false)
// Props
const { data, title } = defineProps(['data', 'title'])

// Configs
const storage_base_url = useRuntimeConfig().public.storage_base_url

function showFullScreen(e) {
    currentImage.value = e
    showLightbox.value = true
}

function closeFullScreen() {
    showLightbox.value = false
}

</script>