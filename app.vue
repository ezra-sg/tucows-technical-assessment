<script setup lang="ts">
const { data } = await useFetch('/api/products');
</script>

<template>
<div>
    {{ data?.products }}
</div>
</template>
