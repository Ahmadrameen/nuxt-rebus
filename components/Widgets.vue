<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10">
            <div v-for="item in widgets" :key="item.id" class="border border-gray-200 rounded-lg text-center p-5 transform hover:scale-150 transition duration-200 hover:bg-[#EA0E15] hover:text-white hover:z-10">
                <p class="text-5xl font-normal">
                    {{ item.amount }}
                </p>
                <p>
                    {{ item.title }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const { widgets } = defineProps(['widgets'])
</script>
<style></style>