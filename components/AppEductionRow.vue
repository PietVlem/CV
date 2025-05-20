<script setup>
defineProps({
    degree: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true
    },
    endYear: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="py-8 flex flex-col gap-4">
        <div class="flex justify-between items-start">
            <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">{{ degree }}</h3>
                <p class="text-gray-500 text-xs uppercase tracking-tight">{{ school  }}</p>
            </div>
            <span class="border border-black p-1 px-3 rounded-full font-bold text-xs mt-[2px]">{{ startYear }} - {{ endYear }}</span>
        </div>
        <p class="text-gray-500 text-sm mt-2">{{ description }}</p>
    </div>
</template>

