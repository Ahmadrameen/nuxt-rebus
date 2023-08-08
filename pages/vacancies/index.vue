<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
        <div class="md:flex md:h-full md:flex-row-reverse flex flex-col-reverse rounded-3xl"
            style="background-image: url(/assets/images/vacancy-banner.png); background-size: cover;">
            <!-- Image -->
            <div class="md:shrink-0 md:w-1/2 text-center">
            </div>
            <!-- Text -->
            <div class="p-5 w-full">
                <div class='m-5 bg-[#EA0E15] p-10 md:h-[321px] rounded-3xl text-white justify-between flex-col flex'>
                    <p class="text-xl sm:text-4xl font-semibold">Присоединяйтесь к нашей команде и развивайте свои навыки с
                        нами</p>
                    <nuxt-link to="/vacancies/list" type="button"
                        class="rounded-full w-fit px-5 py-2 bg-white text-[#EA0E15] mt-5 text-sm font-semibold sm:inline shadow-sm">Смотреть
                        вакансии</nuxt-link>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <h1 class="heading1">Почему Rebus?</h1>

            <div class="grid md:grid-cols-3 gap-10">
                <div class="simple-card">
                    <PresentationChartLineIcon class="w-6 h-6 mb-5 text-[#EA0E15]" />
                    <h2 class="heading2">Карьерный рост</h2>
                    <p>что-то про преимущество и работу, что привлечет работать тут</p>
                </div>
                <div class="simple-card">
                    <PresentationChartLineIcon class="w-6 h-6 mb-5 text-[#EA0E15]" />
                    <h2 class="heading2">Карьерный рост</h2>
                    <p>что-то про преимущество и работу, что привлечет работать тут</p>
                </div>
                <div class="simple-card">
                    <PresentationChartLineIcon class="w-6 h-6 mb-5 text-[#EA0E15]" />
                    <h2 class="heading2">Карьерный рост</h2>
                    <p>что-то про преимущество и работу, что привлечет работать тут</p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-10 my-12">
                <div class="simple-card-border">
                    <h2 class="heading1">Работа в компании</h2>
                    <p>У нас есть условия для стажерства во многих направлениях</p>
                    <nuxt-link to="/vacancies/list" type="button"
                        class="rounded-full w-fit px-5 py-2 text-white bg-[#EA0E15] mt-5 text-sm font-semibold sm:inline shadow-sm">Вакансии</nuxt-link>
                </div>
                <div class="simple-card-border">
                    <h2 class="heading1">Возможности стажерства</h2>
                    <p>У нас есть условия для стажерства во многих направлениях</p>
                    <a href="#contact-us-footer" type="button"
                        class="rounded-full w-fit px-5 py-2 text-white bg-[#EA0E15] mt-5 text-sm font-semibold sm:inline shadow-sm">Хочу
                        на стажировку</a>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <h1 class="heading1">Наш офис</h1>

            <img src="/assets/images/about-us.png" />
        </div>
    </div>
</template>
<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'

</script>
<style scoped>
.simple-card {
    @apply bg-[#F5F5F5] rounded-2xl p-5;
}

.simple-card-border {
    @apply border border-gray-400 rounded-2xl p-5;
}
</style>