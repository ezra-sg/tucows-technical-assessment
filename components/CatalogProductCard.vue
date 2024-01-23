<script setup lang="ts">
import type { Product } from '../types/product';

const props = defineProps<{
    product: Product;
}>();
</script>

<template>
{{ product.product }}<br>
</template>

<style lang="scss">
</style>
