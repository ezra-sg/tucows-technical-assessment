<script setup lang="ts">
defineProps<{
    modelValue: string;
    placeholder: string;
}>();

const emit = defineEmits(['update:model-value']);

// methods
function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:model-value', target.value);
}
</script>

<template>
    <input
        :model-value="modelValue"
        :placeholder="placeholder"
        type="text"
        @input="handleInput"
    />
</template>
