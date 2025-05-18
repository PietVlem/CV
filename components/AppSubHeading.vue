<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col items-end">
        <h2 class="text-2xl mb-1 font-bold">{{ title.toUpperCase() }}</h2>
        <div class="w-full h-[2px] mb-[2px] bg-black"></div>
        <div class="w-full h-[4px] bg-black"></div>
    </div>
</template>