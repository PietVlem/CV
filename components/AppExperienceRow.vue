<script setup>
defineProps({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="py-8 flex flex-col gap-4">
        <div class="flex justify-between items-start">
            <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">{{ company }}</h3>
                <p class="text-gray-500 text-xs uppercase tracking-tight">{{ position }}</p>
            </div>
            <span class="font-bold text-xs mt-[2px]">{{ startDate }} - {{ endDate }}</span>
        </div>
        <p class="text-gray-500 text-sm mt-2">{{ description }}</p>
    </div>
</template>