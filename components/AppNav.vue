<script setup lang="ts">
import debounce from 'debounce';

const emit = defineEmits(['search']);
const MOBILE_BREAKPOINT = 1024;
const USERNAME = 'Adriana Arias';

// data
const searchModel = ref('');
const showMobileMenu = ref(false);
const isMobile = ref(true);

// methods
const resizeHandler = debounce(() => {
    isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT;

    showMobileMenu.value = false;
}, 100);

function handleSearch() {
    emit('search', searchModel.value);
}

onMounted(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
});

</script>

<template>
<header
    :class="{
        'flex gap-6 sticky top-0': true,
        'px-6 py-8 flex-col': isMobile,
        'justify-between p-14': !isMobile
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
            <span class="text-5xl">STORM</span>
        </div>

        <NuxtImg
            v-if="isMobile"
            src="/icon--hamburger.svg"
            alt="Menu icon"
            height="14"
            width="18"
            @click="showMobileMenu = !showMobileMenu"
        />
    </div>

    <div :class="isMobile ? '' : 'flex gap-10 xl:w-[65%] justify-end'">
        <div class="flex justify-between gap-5 flex-grow xl:max-w-[600px]">
            <div class="relative flex-grow">
                <input
                    v-model="searchModel"
                    type="text"
                    class="border-slate-300 border-[1px] rounded-r-md h-12 w-full pl-12"
                    placeholder="Search"
                />
                <NuxtImg
                    src="/icon--search.svg"
                    alt="Search icon"
                    aria-hidden="true"
                    height="18"
                    width="18"
                    class="absolute top-0 left-4 bottom-0 m-auto"
                />
            </div>

            <button
                class="bg-indigo-500 rounded-md text-md text-white px-8"
                @click="handleSearch"
            >
                Search
            </button>
        </div>

        <div
            :class="{
                'flex items-center': true,
                'hidden': !showMobileMenu && isMobile,
                'fixed top-24 left-0 right-0 p-8 bg-white z-50 shadow-md': isMobile,
            }"
        >
            <ul
                :class="{
                    'flex text-indigo-500': true,
                    'flex-col gap-4': isMobile,
                    'gap-10': !isMobile
                }"
            >
                <li class="flex gap-2 items-center">
                    <NuxtImg
                        src="/icon--gear.svg"
                        height="24"
                        width="24"
                    />
                    <span v-if="isMobile">Settings</span>
                </li>
                <li class="flex gap-2 items-center">
                    <div class="relative">
                        <NuxtImg
                            src="/icon--notification-bell.svg"
                            height="24"
                            width="24"
                        />
                        <div class="absolute top-0.5 right-0.5 bg-red-600 h-2 w-2 rounded"></div>
                    </div>
                    <span v-if="isMobile">Notifications</span>
                </li>
                <li class="flex gap-2 items-center">
                    <NuxtImg
                        src="/icon--account.svg"
                        height="24"
                        width="24"
                    />
                    {{ USERNAME}}
                </li>
            </ul>

        </div>
    </div>


</header>
</template>

<style lang="scss">
</style>
