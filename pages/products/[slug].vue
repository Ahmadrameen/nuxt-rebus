<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <!-- Slider -->
        <div class="md:flex md:h-full md:flex-row-reverse flex flex-col-reverse rounded-3xl overflow-hidden"
            :style="'background:' + product.background_color">
            <!-- Image -->
            <div class="md:shrink-0 md:w-1/2 text-center">
                <nuxt-img preload class="h-full md:float-right m-auto" :src="storage_base_url + product.image"
                    alt="{{product.title}}" loading="lazy" />
            </div>
            <!-- Text -->
            <div class="p-8 pb-2 w-full flex flex-col justify-center">
                <div>
                    <h1 class="slider_title" :class="'text-[' + product.text_color + ']'">{{ product.title }}</h1>
                    <p class="mt-2" :class="'text-[' + product.text_color + ']'">{{
                        $dayjs(product.created_at).format('DD-MM-YYYY') }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Details -->
        <div class="mt-10">
            <div v-html="product.long_description"></div>
        </div>

        <!-- Recommendations -->
        <div class="my-20">
            <Recommendations :data="recommendations" title="Рекомендательное письмо:" />
        </div>

        <div class="my-20">
            <div class="bg-[#EA0E15] md:flex md:justify-between p-10 rounded-3xl">
                <h2 class="heading2 m-0 text-white md:mb-0 mb-20">Разработка мобильных <br> приложений Подробней об услуге</h2>
                <nuxt-link to="/services" class="bg-white px-4 py-2 rounded-3xl h-fit font-semibold">Подробней об услуге</nuxt-link>
            </div>
        </div>

        <div class="my-20">
            <NewsSlider :slides="products" title="Вас также может интересовать" source="/products/"/>
        </div>
    </div>
</template>
<script setup>
const { slug } = useRoute().params

const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};
const storage_base_url = useRuntimeConfig().public.storage_base_url
const api_base_url = useRuntimeConfig().public.api_base_url
const { data: product } = await useFetch(api_base_url + 'products/' + slug, { headers });
const { data: recommendations } = await useFetch(api_base_url + 'recommendations', { headers });
const { data: products } = await useFetch(api_base_url + 'products', { headers });
</script>
<style></style>