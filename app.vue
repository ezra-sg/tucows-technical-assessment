<script setup lang="ts">
import { computed, ref } from 'vue';

import type { Product } from './types/product';

// note: this fetches the data using a serverless function, see /server/api/products.ts
const { data } = await useFetch<{ products: Product[] }>('/api/products');

// data
const searchModel = ref('');

// computed
// note: this is a computed property that filters the products based on the user's search input
const filteredProducts = computed(() =>
    (data?.value?.products ?? []).filter(({ product }) =>
        product.toLowerCase().includes(searchModel.value.toLowerCase())
    )
);
</script>

<template>
<AppNav @search="$event => searchModel = $event" />

<div class="mx-6 mt-2 mb-8">
    <ProductTable
        :products="filteredProducts"
        :total-products="(data?.products ?? []).length"
    />
</div>
</template>
