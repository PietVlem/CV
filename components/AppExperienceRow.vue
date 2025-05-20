<script setup>
const props = defineProps({
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
    },
    projects: {
        type: Array,
        default: () => []
    }
})

const openDrawer = ref(false)

const showMoreInfo = () => {
    props.projects.length === 0
        ? console.log('No projects available')
        : openDrawer.value = true
}
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
        <p class="text-gray-500 text-sm my-2">{{ description }}</p>
        <div>
            <button @click="showMoreInfo" class="inline-flex gap-2 align-center text-xs font-bold border border-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                <Icon name="ph:book-open-bold" size="16"/>
                <span>Lees meer</span>
            </button>
        </div>
    </div>

    <AppExperienceDrawer v-model="openDrawer"/>
</template>