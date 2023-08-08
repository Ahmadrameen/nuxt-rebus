<template>
  <div>
    <Slider :slides="banners" goto_link="/products" goto_title="Наш продукт" slider_height="438px" />

    <Services :services="services" title="Услуги" />

    <Widgets :widgets="widgets" />

    <Slider :slides="projects" goto_link="/projects" goto_title="Все проекты" slider_height="600px" />

    <IconSlider :icons="clients" title="Клиенты" />

    <NewsSlider :slides="news" title="Новости" class="sm:px-6 lg:px-8"/>

    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
      <Recommendations :data="recommendations" title="Наc рекомендуют"/>
    </div>

    <IconSlider :icons="partners" title="Партнеры" />

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
const { data: banners }         = await useFetch(api_base_url + 'banners', { headers });
const { data: services }        = await useFetch(api_base_url + 'services', { headers });
const { data: widgets }         = await useFetch(api_base_url + 'widgets', { headers });
const { data: projects }        = await useFetch(api_base_url + 'projects', { headers });
const { data: clients }         = await useFetch(api_base_url + 'clients', { headers });
const { data: news }            = await useFetch(api_base_url + 'news', { headers });
const { data: recommendations } = await useFetch(api_base_url + 'recommendations', { headers });
const { data: partners }        = await useFetch(api_base_url + 'partners', { headers });

</script>