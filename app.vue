<script setup lang="ts">
import { computed, ref } from 'vue';

import type { Product } from './types/product';


const { data } = await useFetch<{ products: Product[] }>('/api/products');

// data
const searchModel = ref('');

// computed
const filteredProducts = computed(() => {
    return (data?.value?.products ?? []).filter(({ product }) => {
        return product.toLowerCase().includes(searchModel.value.toLowerCase());
    });
});
</script>

<template>
<div>
    <input type="text" v-model="searchModel" />
    <br>

    <CatalogProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
    />
</div>
</template>
