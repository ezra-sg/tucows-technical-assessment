<script setup lang="ts">
import { computed, ref } from 'vue';

import type { Product } from './types/product';


const { data } = await useFetch<{ products: Product[] }>('/api/products');

// data
const searchModel = ref('');

// computed
const filteredProducts = computed(() =>
    (data?.value?.products ?? []).filter(({ product }) =>
        product.toLowerCase().includes(searchModel.value.toLowerCase())
    )
);
</script>

<template>
<AppNav @search="$event => searchModel = $event" />

<div class="mx-6 mt-2 mb-8">
    <ProductTable :products="filteredProducts" :total-products="(data?.products ?? []).length" />
</div>

</template>
