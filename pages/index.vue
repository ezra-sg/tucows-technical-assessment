<script setup lang="ts">
import { ref } from 'vue';

// data
const searchModel = ref('');

// methods
function handleSearch(searchTerm: string) {
    searchModel.value = searchTerm;
}
</script>

<template>
    <div>
        <AppNav @search="handleSearch" />

        <ProductTable :filter="searchModel" />
    </div>
</template>
