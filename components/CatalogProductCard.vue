<script setup lang="ts">
const props = defineProps<{
    product: {
        product: string;
        serial:string;
        id: number;
        quantity: string;
        total: number;
    };
}>();
</script>

<template>
{{ product.product }}<br>
</template>

<style lang="scss">
</style>
