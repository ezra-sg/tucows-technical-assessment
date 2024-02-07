<script setup lang="ts">
import { computed, ref } from 'vue';

import { SortOrder } from '~/types/sort';

import type { Product } from '~/types/product';

const props = defineProps<{
    filter: string;
}>();

const { data } = await useFetch<{ products: Product[] }>('/api/products');

// data
const products = ref<Product[]>(data.value?.products ?? []);
const sortOrder = ref<SortOrder>(SortOrder.DESC);
const modalProduct = ref<Product | null>(null);

// computed
const filteredProducts = computed(() =>
    products.value.filter(({ product }) =>
        product.toLowerCase().includes(props.filter.toLowerCase()),
    ),
);

const sortedProducts = computed(() =>
    [...filteredProducts.value].sort((a, b) =>
        sortOrder.value === SortOrder.ASC
            ? a.total - b.total
            : b.total - a.total,
    ),
);

// methods
function updateSort(newSort: SortOrder) {
    sortOrder.value = newSort;
}

function openModal(product: Product) {
    modalProduct.value = product;
}

function handleModalClosed() {
    modalProduct.value = null;
}
</script>

<template>
    <div class="m-auto w-full max-w-[1000px] px-6 pb-8 pt-2">
        <div class="mb-4 flex items-center gap-2">
            <h3 class="text-lg font-bold">Products</h3>
            <span class="text-sm text-stormTextGray">
                {{ filteredProducts.length }} of {{ products.length }} results
            </span>
        </div>

        <table
            class="w-full border-separate border-spacing-0 rounded-md border-[1px] border-stormTableGray"
        >
            <ProductTableHeader
                :sort-order="sortOrder"
                @update:sort-order="updateSort"
            />

            <ProductTableBody
                :products="sortedProducts"
                @open-modal="openModal"
            />
        </table>

        <ProductTableModal
            :product="modalProduct"
            @close-modal="handleModalClosed"
        />
    </div>
</template>
