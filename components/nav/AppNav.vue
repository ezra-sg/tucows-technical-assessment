<script setup lang="ts">
const emit = defineEmits(['search']);

useScrollListener(() => {
    showNavShadow.value = Math.floor(window.scrollY) > 20;
}, 20);

const USERNAME = 'Adriana Arias';

// data
const showNavShadow = ref(false);
const showMobileMenu = ref(false);

// methods
function toggleMenu() {
    showMobileMenu.value = !showMobileMenu.value;
}

function handleSearch(searchTerm: string) {
    emit('search', searchTerm);
}
</script>

<template>
    <header
        :class="{
            'sticky top-0 flex flex-col gap-6 bg-white px-6 pb-2 pt-8 md:gap-10 lg:mb-7 lg:flex-row lg:justify-between lg:px-14 lg:pb-7 lg:pt-14': true,
            'shadow-md': showNavShadow,
        }"
    >
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <NuxtImg
                    src="/logo.svg"
                    alt="STORM logo"
                    height="48"
                    width="48"
                />
                <span class="text-4xl">STORM</span>
            </div>

            <NuxtImg
                src="/icon--hamburger.svg"
                alt="Menu icon"
                height="14"
                width="18"
                class="lg:hidden"
                @click="toggleMenu"
            />
        </div>

        <div class="flex justify-end gap-10 lg:flex-grow lg:flex-row">
            <AppNavSearch @search="handleSearch" />

            <div
                class="flex items-center"
                :class="{
                    'fixed left-0 right-0 top-24 z-50 flex items-center bg-white p-8 shadow-md backdrop:right-0 lg:static lg:p-2 lg:pl-0 lg:shadow-none': true,
                    'hidden lg:flex': !showMobileMenu,
                }"
            >
                <ul
                    class="flex flex-col gap-4 text-stormPurple lg:flex-row lg:gap-10"
                >
                    <li class="flex cursor-pointer items-center gap-2">
                        <NuxtImg src="/icon--gear.svg" height="24" width="24" />
                        <span class="lg:hidden">Settings</span>
                    </li>

                    <li class="flex cursor-pointer items-center gap-2">
                        <div class="relative">
                            <NuxtImg
                                src="/icon--notification-bell.svg"
                                height="24"
                                width="24"
                            />
                            <div
                                class="bg-red-600 absolute right-0.5 top-0.5 h-2 w-2 rounded"
                            ></div>
                        </div>
                        <span class="lg:hidden">Notifications</span>
                    </li>

                    <li
                        class="flex flex-shrink-0 cursor-pointer items-center gap-2"
                    >
                        <NuxtImg
                            src="/icon--account.svg"
                            height="24"
                            width="24"
                        />
                        {{ USERNAME }}
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
