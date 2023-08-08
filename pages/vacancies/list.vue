<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1">Актуальные вакансии</h1>

        <div class="md:flex gap-10">
            <div class="bg-[#F5F5F5] p-5 mb-10 basis-1/4 rounded-3xl">
                <div>
                    <h2 class="heading2">Категории</h2>
                    <div id="departments">
                        <div v-for="department in departments">
                            <input type="checkbox" class="checked:bg-[#EA0E15] rounded mr-2" />
                            <label>{{ department.name.en }}</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="heading2 mt-10">График</h2>
                    <div id="schedules">
                        <div v-for="schedule in schedules">
                            <input type="checkbox" class="checked:bg-[#EA0E15] rounded mr-2" />
                            <label>{{ schedule.name.en }}</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="heading2 mt-10">Уровень</h2>
                    <div id="levels">
                        <div v-for="level in levels">
                            <input type="checkbox" class="checked:bg-[#EA0E15] rounded mr-2" />
                            <label>{{ level.name.en }}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-5 basis-3/4">
                <div v-for="item in vacancies" :key="item.id"
                    class="hover:bg-[#D9D9D9] border border-[#D9D9D9] w-full rounded-3xl p-5">

                    <NuxtLink :to="`/vacancies/${item.slug}`">

                        <div class="flex justify-between">
                            <h2 class="heading2 mb-0">{{ item.name }}</h2>
                            <span class="text-gray-500">
                                <span>{{ $dayjs(item.created_at).format('DD-MM-YYYY') }},</span>
                                <span>{{ item.city.name.en }}</span>
                            </span>
                        </div>
                        <div class="text-[#EA0E15]">{{ item.level.name.en }}, {{ item.schedule.name.en }}</div>

                        <p v-html="item.short_description" class="mt-5"></p>

                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const headers = {
    'Accept-Language': 'en-US',
    'Accept': 'application/json',
}

const api_base_url = useRuntimeConfig().public.api_base_url
const { data: vacancies } = await useFetch(api_base_url + 'vacancies', { headers });
const { data: departments } = await useFetch(api_base_url + 'vacanciesDepartments', { headers });
const { data: schedules } = await useFetch(api_base_url + 'vacanciesSchedules', { headers });
const { data: levels } = await useFetch(api_base_url + 'vacanciesLevels', { headers });

</script>