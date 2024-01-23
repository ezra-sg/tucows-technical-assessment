<script setup lang="ts">
import type { Product } from '~/types/product';

const props = defineProps<{
    products: Product[];
}>();

// data
const sortOrder = ref<'asc' | 'desc'>('desc');

// computed
const sortedProducts = computed(() => {
    const products = [...props.products].sort((a, b) => {
        return sortOrder.value === 'asc' ? a.total - b.total : b.total - a.total;
    });

    return products;
});

// methods
function invertSort() {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}

</script>

<template>
<div class="w-full max-w-[1000px] m-auto">
    <div class="flex gap-2 items-center mb-4">
        <h3 class="font-bold text-lg">Products</h3>
        <span class="text-gray-500 text-sm">
            {{ products.length }} of 64 results
        </span>
    </div>

    <table class="w-full border-separate border-spacing-0 border-slate-300 border-[1px] rounded-md">
        <thead>
            <tr>
                <th class="p-4 hidden lg:table-cell text-left">
                    ID
                </th>
                <th class="p-4 hidden lg:table-cell">
                    Status
                </th>
                <th class="p-4 hidden lg:table-cell">
                    Quantity
                </th>
                <th class="p-4">
                    Product Name
                </th>
                <th class="p-4 pl-8 hidden lg:table-cell border-l-[2px] border-slate-300">
                    <div
                        class="flex gap-2 items-center justify-between cursor-pointer"
                        tabindex="0"
                        role="button"
                        :aria-label="`Sort by prices - ${sortOrder === 'desc' ? 'ascending' : 'descending'}`"
                        @click="invertSort"
                        @keydown.enter="invertSort"
                    >
                        Prices

                        <NuxtImg
                            src="/icon--chevron.svg"
                            alt="Chevron icon"
                            aria-hidden="true"
                            height="20"
                            width="20"
                            :class="sortOrder === 'asc' ? 'rotate-180' : ''"
                        />
                    </div>

                </th>
            </tr>
        </thead>

        <tbody>
            <tr
                v-for="product in sortedProducts"
                :key="product.id"
            >
                <td class="hidden lg:table-cell px-4 py-2 border-t-[0.5px] border-b-[0.5px] border-slate-300">
                    {{ product.id }}
                </td>
                <td class="hidden lg:table-cell px-4 py-2 border-t-[0.5px] border-b-[0.5px] border-slate-300 text-center">
                    <StatusBadge :status="product.status" />
                </td>
                <td class="hidden lg:table-cell px-4 py-2 border-t-[0.5px] border-b-[0.5px] border-slate-300 text-center">
                    {{ product.quantity }}
                </td>
                <td class="px-4 py-2 border-t-[0.5px] border-b-[0.5px] border-slate-300">
                    {{ product.product }}
                    <br>
                    <span class="text-gray-500 lg:hidden">{{ product.serial }} - Qty: {{ product.quantity }}</span>
                </td>
                <td class="hidden lg:table-cell px-4 py-2 border-t-[0.5px] border-b-[0.5px] border-l-[2px] border-slate-300 text-right">
                    {{ product.total }}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<style lang="scss">
</style>
