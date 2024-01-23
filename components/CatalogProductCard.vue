<script setup lang="ts">
import type { Product } from '../types/product';

const props = defineProps<{
    product: Product;
}>();
</script>

<template>
<span class="test">
    {{ product.product }}<br>
</span>
</template>

<style lang="scss">
.test {
    color: var(--accent);
}
</style>
