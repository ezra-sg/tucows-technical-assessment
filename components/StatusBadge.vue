<script setup lang="ts">
import { ProductStatus } from '~/types/product';

const props = defineProps<{
    status: ProductStatus;
}>();

// computed
const colorClasses = computed(() => {
    if (props.status === ProductStatus.green) {
        return 'bg-stormLightGreen text-stormGreen';
    } else if (props.status === ProductStatus.orange) {
        return 'bg-stormLightOrange text-stormOrange';
    } else if (props.status === ProductStatus.red) {
        return 'bg-stormLightRed text-stormRed';
    } else if (props.status === ProductStatus.purple) {
        return 'bg-stormLightPurple text-stormPurple';
    }

    return '';
});
</script>

<template>
    <div
        :class="`${colorClasses} h-[28px] w-[83px] rounded-2xl p-1 text-[12px]`"
    >
        Status
    </div>
</template>

<style lang="scss"></style>
