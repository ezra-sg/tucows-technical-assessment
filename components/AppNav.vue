<script setup lang="ts">
import debounce from 'debounce';

const emit = defineEmits(['search']);
const MOBILE_BREAKPOINT = 1024;
const USERNAME = 'Adriana Arias';

// data
const searchModel = ref('');
const showMobileMenu = ref(false);
const isMobile = ref(true);

// computed
const inputHasIllegalChars = computed(() => /[^a-zA-Z0-9]/.test(searchModel.value));
const inputClasses = computed(() => {
    const baseClasses = 'border-slate-300 border-[1px] rounded-r-md h-12 w-full pl-12 focus:outline-indigo-500';

    return inputHasIllegalChars.value ? `${baseClasses} outline outline-2 outline-red-700 focus:outline-red-500` : baseClasses;
});

// watchers
watch(searchModel, () => {
    if (searchModel.value === '') {
        emit('search', '');
    }
});

// methods
const resizeHandler = debounce(() => {
    isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT;

    showMobileMenu.value = false;
}, 100);

function handleSearch() {
    if (inputHasIllegalChars.value || searchModel.value === '') {
        return;
    }

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
        'flex gap-6 sticky top-0 bg-white': true,
        'px-6 pt-8 pb-2 flex-col': isMobile,
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
        <div class="relative flex justify-between gap-5 flex-grow xl:max-w-[600px]">
            <div class="relative flex-grow">
                <input
                    v-model="searchModel"
                    type="text"
                    :class="inputClasses"
                    placeholder="Search"
                    @keydown.enter="handleSearch"
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
                class="bg-indigo-500 disabled:opacity-75 disabled:cursor-not-allowed rounded-md text-md text-white px-8"
                :disabled="inputHasIllegalChars || searchModel === ''"
                @click="handleSearch"
            >
                Search
            </button>

            <div v-if="inputHasIllegalChars" class="c-app-nav__input-error">
                Only letters and numbers are allowed
            </div>
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
.c-app-nav {
    &__input-error {
        @apply text-indigo-700 absolute -bottom-14 bg-indigo-50 shadow-md p-2;

        &::before {
            @apply shadow-md absolute bg-indigo-50;

            content: '';
            top: -6px;
            left: 48px;
            height: 16px;
            width: 16px;
            transform: rotate(45deg);
            z-index: -1;
        }
    }
}
</style>
