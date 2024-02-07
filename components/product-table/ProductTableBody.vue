<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
    products: Product[];
}>();

const emits = defineEmits(['open-modal']);

// methods
function openModal(product: Product) {
    emits('open-modal', product);
}
</script>

<template>
    <tbody>
        <tr
            v-for="product in products"
            :key="product.id"
            class="cursor-pointer"
            tabindex="0"
            role="button"
            aria-haspopup="dialog"
            aria-label="View product image"
            @click="openModal(product)"
            @keydown.enter="openModal(product)"
        >
            <td
                class="hidden border-b-[0.5px] border-t-[0.5px] border-slate-300 px-4 py-2 lg:table-cell"
            >
                {{ product.id }}
            </td>
            <td
                class="hidden border-b-[0.5px] border-t-[0.5px] border-slate-300 px-4 py-2 text-center lg:table-cell"
            >
                <StatusBadge :status="product.status" />
            </td>
            <td
                class="hidden border-b-[0.5px] border-t-[0.5px] border-slate-300 px-4 py-2 text-center lg:table-cell"
            >
                {{ product.quantity }}
            </td>
            <td
                class="border-b-[0.5px] border-t-[0.5px] border-slate-300 px-4 py-2"
            >
                {{ product.product }}
                <br />
                <span class="text-gray-500 lg:hidden">
                    {{ product.serial }} - Qty: {{ product.quantity }}
                </span>
            </td>
            <td
                class="hidden border-b-[0.5px] border-l-[2px] border-t-[0.5px] border-slate-300 px-4 py-2 text-right lg:table-cell"
            >
                {{ product.total }}
            </td>
        </tr>
    </tbody>
</template>
