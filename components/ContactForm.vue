<template>
    <div>

        <form>
            <div class="md:gap-6">
                <div class="grid grid-cols-2 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="peer" placeholder=" "
                            required />
                        <label for="floating_first_name" class="">Имя</label>
                    </div>

                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name="floating_email" id="floating_email" class="peer" placeholder=" "
                            required />
                        <label for="floating_email" class="">Email</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_type" id="floating_type" class="peer" placeholder=" " required />
                    <label for="floating_type" class="">Тип
                        консультации</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_message" id="floating_message" class="peer" placeholder=" "
                        required />
                    <label for="floating_message" class="">Доп
                        информация</label>
                </div>
            </div>
            <button type="submit" name="submit" class="text-white bg-[#EA0E15] py-2 px-4 rounded-3xl">Отправить
                заявку</button>
        </form>

    </div>
</template>

<style scoped>
input {
    @apply block py-2.5 px-0 w-full text-sm focus:border-red-600 text-gray-900 bg-transparent border-0 border-b-[1px] appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0;
}

label {
    @apply peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
}
</style>