<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a 
        target="_blank" 
        :href="url"
        class="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
    >
        <Icon :name="icon" size="16"/>
    </a>
</template>