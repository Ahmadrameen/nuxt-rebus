<template>
    <Disclosure as="nav" class="border-b border-lightGray" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start ml-12 lg:ml-0">
                    <div class="flex flex-shrink-0 items-center">
                        <NuxtLink to="/">
                            <img class="h-8 w-auto" src="/assets/images/logo.png" alt="Rebus LLC" />
                        </NuxtLink>
                    </div>
                    <div class="hidden sm:m-auto lg:block">
                        <div class="flex space-x-4">
                            <nuxt-link :to="item.to" v-for="item in navigation" :key="item.name" class="main_menu">{{
                                item.name }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute gap-7 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton class="flex rounded-full text-gray-500 text-sm gap-2 place-items-center ">
                                <span>RU</span>
                                <span><img src="/assets/images/icons/arrow-down.svg" alt=""></span>
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute text-gray-500 right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-[#EA0E15]">
                                <MenuItem>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700">TJ</a>
                                </MenuItem>
                                <MenuItem>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700">RU</a>
                                </MenuItem>
                                <MenuItem>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700">EN</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>

                    <button type="button" class="rebus_button button-animation-turn-black">
                        <span><a href="#contact-us-footer">Оставить заявку</a></span>
                    </button>

                </div>
            </div>
        </div>

        <DisclosurePanel class="lg:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" class="block">
                    <nuxt-link :to="item.to" class="main_menu block text-left my-5">{{
                        item.name }}</nuxt-link>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>

    <!-- Slot for the content -->
    <div class="sm:m-0 m-5">
        <slot />
    </div>
    <Footers id="contact-us-footer" />
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'О нас', to: '/about-us' },
    { name: 'Услуги', to: '/services' },
    { name: 'Проекты', to: '/projects' },
    { name: 'Продукты', to: '/products' },
    { name: 'Новости', to: '/news' },
    { name: 'Вакансии', to: '/vacancies' },
]
</script>

<style scoped>
.main_menu {
    @apply text-gray-500 hover:text-[#EA0E15] px-3 font-medium;
}

.router-link-active {
    @apply text-[#EA0E15] px-3 font-medium;
}
</style>