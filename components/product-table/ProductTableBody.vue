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
                class="hidden border-b-[1px] border-stormTableGray px-4 py-2 lg:table-cell"
            >
                {{ product.id }}
            </td>
            <td
                class="hidden border-b-[1px] border-stormTableGray px-4 py-2 text-center lg:table-cell"
            >
                <div class="flex justify-center">
                    <StatusBadge :status="product.status" />
                </div>
            </td>
            <td
                class="hidden border-b-[1px] border-stormTableGray px-4 py-2 text-center lg:table-cell"
            >
                {{ product.quantity }}
            </td>
            <td class="border-b-[1px] border-stormTableGray px-4 py-2">
                {{ product.product }}
                <br />
                <span class="text-[12px] text-stormTextGray">
                    {{ product.serial }}
                    <span class="lg:hidden">- Qty: {{ product.quantity }}</span>
                </span>
            </td>
            <td
                class="hidden border-b-[1px] border-l-[2px] border-stormTableGray px-4 py-2 text-right lg:table-cell"
            >
                ${{ product.total }}
            </td>
        </tr>
    </tbody>
</template>
