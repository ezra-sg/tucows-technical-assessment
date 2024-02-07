<script setup lang="ts">
import type { Product } from '~/types/product';

const props = defineProps<{
    product: Product | null;
}>();

const emit = defineEmits(['close-modal']);

// data
const dialogRef = ref<HTMLDialogElement | null>(null);
const loading = ref(true);

// computed
const product = computed(() => props.product);

// watchers
watch(product, () => {
    if (product.value) {
        loading.value = true;
        dialogRef.value?.showModal();
    } else {
        closeModal();
    }
});

// methods
function handleImageLoaded() {
    loading.value = false;
}

function closeModal() {
    dialogRef.value?.close();
    emit('close-modal');
}

function handleModalScrimClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}
</script>

<template>
    <dialog ref="dialogRef">
        <div
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            @click="handleModalScrimClick"
        >
            <div class="rounded-md bg-white pb-8 pt-4">
                <div class="mb-8 flex items-center justify-between gap-12">
                    <span class="pl-8 font-bold">
                        {{ product?.product ?? '' }}
                    </span>

                    <div
                        role="button"
                        tabindex="0"
                        aria-label="Close modal"
                        class="mr-4 flex h-12 w-12 items-center justify-center"
                        @click="closeModal"
                        @keydown.enter="closeModal"
                    >
                        <NuxtImg
                            src="/icon--x.svg"
                            alt="Close icon"
                            height="12"
                            width="12"
                        />
                    </div>
                </div>

                <LoadingSpinner v-if="loading" />

                <template v-if="product">
                    <NuxtImg
                        v-show="!loading"
                        :src="product?.imageUrl"
                        :alt="`${product?.product} image`"
                        class="mb-12 max-h-[50vh] w-full object-contain px-8"
                        @load="handleImageLoaded"
                    />
                </template>

                <div class="flex justify-end pr-8">
                    <button
                        class="bg-gray-100 rounded-md px-4 py-2 text-sm text-black hover:bg-stormPurple hover:text-white"
                        @click="closeModal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </dialog>
</template>
