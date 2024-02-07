<script setup lang="ts">
import { SortOrder } from '~/types/sort';

const props = defineProps<{
    sortOrder: SortOrder;
}>();

const emit = defineEmits(['update:sort-order']);

function invertSort() {
    const { ASC, DESC } = SortOrder;
    const newSortOrder = props.sortOrder === ASC ? DESC : ASC;
    emit('update:sort-order', newSortOrder);
}
</script>

<template>
    <thead>
        <tr>
            <th
                class="hidden border-b-[1px] border-stormTableGray p-4 text-left lg:table-cell"
            >
                ID
            </th>
            <th
                class="hidden border-b-[1px] border-stormTableGray p-4 lg:table-cell"
            >
                Status
            </th>
            <th
                class="hidden border-b-[1px] border-stormTableGray p-4 lg:table-cell"
            >
                Quantity
            </th>
            <th class="border-b-[1px] border-stormTableGray p-4">
                Product Name
            </th>
            <th
                class="hidden border-b-[1px] border-l-[2px] border-stormTableGray p-4 pl-8 lg:table-cell"
            >
                <div
                    class="flex cursor-pointer items-center justify-between gap-2"
                    tabindex="0"
                    role="button"
                    :aria-label="`Sort by prices - ${sortOrder === SortOrder.DESC ? 'ascending' : 'descending'}`"
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
                        :class="sortOrder === SortOrder.ASC ? 'rotate-180' : ''"
                    />
                </div>
            </th>
        </tr>
    </thead>
</template>
