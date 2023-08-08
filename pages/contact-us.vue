<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
        <h1 class="heading1 text-7xl font-normal text-[#EA0E15]">Связаться с нами</h1>
        <p>напишите что-то что хотите заказать от нас и мы непременно <br> ответим на интересующие вас вопросы</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-40 mt-20">
            <div>
                <ContactForm />
            </div>
            <div class="space-y-10">
                <div class="flex gap-5">
                    <div>
                        <MapPinIcon class="block h-6 w-6 text-[#EA0E15]" aria-hidden="true" />
                    </div>
                    <div>
                        <h1 class="font-bold">Наш адресс</h1>
                        <p>Таджикистан, Душанбе, <br> ул. Ш. Хусейнзода 18</p>
                    </div>
                </div>

                <div class="flex gap-5">
                    <div>
                        <DevicePhoneMobileIcon class="block h-6 w-6 text-[#EA0E15]" aria-hidden="true" />
                    </div>
                    <div>
                        <h1 class="font-bold">Контакты</h1>
                        <p>+(991) 999 99 99 99 <br> +(991) 999 99 99 99</p>
                    </div>
                </div>

                <div class="flex gap-5">
                    <div>
                        <EnvelopeIcon class="block h-6 w-6 text-[#EA0E15]" aria-hidden="true" />
                    </div>
                    <div>
                        <h1 class="font-bold">Наша почта</h1>
                        <p>info@rebus.tj</p>
                    </div>
                </div>

                <div class="flex gap-5">
                    <div class="flex gap-4">
                        <img src="/assets/images/icons/linkedin.svg" alt="">
                        <img src="/assets/images/icons/instagram.svg" alt="">
                        <img src="/assets/images/icons/facebook.svg" alt="">
                        <img src="/assets/images/icons/behance.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div>
            <iframe class="w-full h-[700px] rounded-2xl border-2 border-red-500 mt-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.4285757989003!2d68.78890375994104!3d38.56866719650583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d142eb066df7%3A0xba63c147ed4659f5!2sHusseinzoda%20Street%2020%2C%20Dushanbe%20734025%2C%20Tajikistan!5e0!3m2!1sen!2s!4v1690970251392!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<script setup>
import { MapPinIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const api_base_url = useRuntimeConfig().public.api_base_url

// Define the headers you want to send
const headers = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
};

// Fetch the data using API
const { data: aboutus } = await useFetch(api_base_url + 'about-us', { headers });

</script>