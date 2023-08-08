<template lang="">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-5">
    <div class="mx-auto rounded-2xl">

      <div id="default-carousel" class="relative w-full" data-carousel="slide" data-interval="10000">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-2xl" :style="'height:' + slider_height">
            <div v-for="slide in slides" :key="slide.id" class="hidden duration-500" :style="'background:'+ slide.background_color" data-carousel-item>
              <div class="md:flex md:h-full md:flex-row-reverse flex flex-col-reverse">
                <!-- Image -->
                <div class="md:shrink-0 md:w-1/2 text-center">
                  <nuxt-img preload class="h-full md:float-right m-auto" :src="storage_base_url + slide.image" alt="{{slide.title}}" loading="lazy" />
                </div>
                <!-- Text -->
                <div class="p-8 pb-2 w-full">
                  <div>
                    <nuxt-link :to="goto_link" type="button" class="rounded-full px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-white hover:bg-white" :style="`color:${slide.text_color}`">{{goto_title}}</nuxt-link>
                    <a :href="slide.link" type="button" class="rounded-full px-3 py-2 text-sm font-semibold shadow-sm float-right sm:hidden" :style="'background:'+ slide.button_color + '; color:' + slide.button_text_color + ';'">{{slide.button_title}}</a>
                  </div>
                  <div class='mt-10'>
                    <h1 class="slider_title" :style="`color:${slide.text_color}`">{{slide.title}}</h1>
                    <p v-if="goto_link === '/projects'" class="my-10 text-lg sm:text-2xl">{{slide.short_description}}</p>
                    <a :href="slide.link" type="button" class="rounded-full px-5 py-2 mt-5 text-sm font-semibold hidden sm:inline shadow-sm button-animation-turn-black" :style="'background:'+ slide.button_color + '; color:' + slide.button_text_color + ';'">{{slide.button_title}}</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 mt-5 left-1/2">
            <button v-for="(slide, index) in slides" :key="slide.id" type="button" class="w-3 h-2 rounded-full" aria-current="false" :data-carousel-slide-to="index"></button>
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

// Props
const { slides, goto_title, goto_link, slider_height } = defineProps(['slides', 'goto_title', 'goto_link', 'slider_height'])

// configs
const storage_base_url = useRuntimeConfig().public.storage_base_url
</script>


<style scoped>
[aria-current="false"] {
  background-color: gray;
  opacity: 0.5;
}

[aria-current="true"] {
  background-color: gray;
  width: 20px;
  transition: width 0.3s ease-out;
}
</style>