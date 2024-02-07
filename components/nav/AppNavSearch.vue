<script setup lang="ts">
const emit = defineEmits(['search']);

// data
const modelValue = ref('');

// computed
const inputHasIllegalChars = computed(() =>
    /[^a-zA-Z0-9]/.test(modelValue.value),
);
const inputClasses = computed(() => {
    const baseClasses =
        'border-stormInputGray border-[1px] rounded-r-md h-12 w-full pl-12 focus:outline-stormPurple';
    const errorClasses =
        'outline outline-2 outline-stormRed focus:outline-stormRed';

    return inputHasIllegalChars.value
        ? `${baseClasses} ${errorClasses}`
        : baseClasses;
});
const disableSearchButton = computed(
    () => inputHasIllegalChars.value || modelValue.value === '',
);

// watchers
watch(modelValue, () => {
    if (modelValue.value === '') {
        emit('search', '');
    }
});

// methods
function handleSearch() {
    if (disableSearchButton.value) {
        return;
    }

    emit('search', modelValue.value);
}
</script>

<template>
    <div class="relative flex flex-grow justify-between gap-5 xl:max-w-[600px]">
        <div class="relative flex-grow">
            <BaseTextInput
                v-model="modelValue"
                :class="inputClasses"
                type="text"
                placeholder="Search"
                @keydown.enter="handleSearch"
            />
            <NuxtImg
                src="/icon--search.svg"
                alt="Search icon"
                aria-hidden="true"
                height="18"
                width="18"
                class="absolute bottom-0 left-4 top-0 m-auto"
            />

            <div v-if="inputHasIllegalChars" class="c-nav-search__input-error">
                Only letters and numbers are allowed
            </div>
        </div>

        <button
            class="text-md rounded-md bg-stormPurple px-8 text-white disabled:cursor-not-allowed"
            :disabled="disableSearchButton"
            @click="handleSearch"
        >
            Search
        </button>
    </div>
</template>

<style lang="scss">
.c-nav-search {
    &__input-error {
        @apply absolute -bottom-14 w-[90vw] bg-stormLightPurple p-2 text-stormPurple shadow-md sm:w-auto lg:w-[300px] xl:w-auto;

        &::before {
            @apply absolute bg-stormLightPurple shadow-md;

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
