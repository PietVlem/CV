<script setup>
const data = new Map([
    ['profession', 'Frontend Developer'],
    ['Date of Birth', '15-11-1994'],
    ['education', 'Bachelor Diploma']
])
</script>

<template>
    <div class="border-t-2 border-b-2 border-black">
        <div 
            v-for="[dataKey, dataValue] of data"
            :key="dataKey"
            class="flex justify-between items-center py-2 border-b-2 border-black last:border-b-0 font-bold text-xs uppercase"
        >
            <span>{{ dataKey }}</span>
            <span>{{ dataValue }}</span>
        </div>
    </div>
</template>