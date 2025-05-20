<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="border-t-2 border-b-2 border-black">
        <div 
            v-for="[key, value] of Object.entries(data)"
            :key="key"
            class="flex justify-between items-center py-2 border-b-2 border-black last:border-b-0 font-bold text-xs uppercase"
        >
            <span>{{ key }}</span>
            <span>{{ value }}</span>
        </div>
    </div>
</template>