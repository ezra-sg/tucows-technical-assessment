<script setup lang="ts">
import { ProductStatus } from '~/types/product';

const props = defineProps<{
    status: ProductStatus;
}>();

// computed
const classes = computed(() => {
    if (props.status === ProductStatus.green) {
        return 'bg-green-100 text-green-800';
    } else if (props.status === ProductStatus.orange) {
        return 'bg-orange-100 text-orange-800';
    } else if (props.status === ProductStatus.red) {
        return 'bg-rose-100 text-rose-800';
    } else if (props.status === ProductStatus.purple) {
        return 'bg-indigo-100 text-indigo-800';
    }

    return '';
});
</script>

<template>
    <div :class="`${classes} rounded-2xl p-2`">Status</div>
</template>

<style lang="scss"></style>
