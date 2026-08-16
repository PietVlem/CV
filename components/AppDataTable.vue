<script setup>
import dayjs from 'dayjs';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const age = computed(() => {
    if (!props.data?.leeftijd) return null
    return dayjs().diff(dayjs(props.data?.leeftijd), 'year')
})
</script>

<template>
    <div class="border-t-2 border-b-2 border-black">
        <div v-for="[key, value] of Object.entries(data)" :key="key"
            class="flex justify-between items-center py-2 border-b-2 border-black last:border-b-0 font-bold text-xs uppercase">
            <span>{{ key }}</span>
            <span v-if="key === 'leeftijd'">{{ age }}</span>
            <span v-else>{{ value }}</span>
        </div>
    </div>
</template>