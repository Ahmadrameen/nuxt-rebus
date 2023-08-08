<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">About Us</h1>
        <div class="flex gap-5 py-5">
            <nuxt-link to="/about-us" class="rebus_button">История</nuxt-link>
            <nuxt-link to="/contact-us" class="rebus_button_secondary">Контакты</nuxt-link>
        </div>
        <div v-html="aboutus[0].about_us"></div>

        <img src="/assets/images/about-us.png" alt="About us" class="my-20">

        <h1 class="heading1">Why Rebus</h1>
        <div v-html="aboutus[0].why_rebus"></div>
    </div>
</template>
<script setup>
const api_base_url = useRuntimeConfig().public.api_base_url

// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const { data: aboutus } = await useFetch(api_base_url + 'about-us', { headers });

</script>