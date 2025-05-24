<script setup>
const props = defineProps({
    experience: {
        type: Object,
        required: true
    }
})

const openDrawer = ref(false)
const openDialog = ref(false)

const showMoreInfo = () => {
    props.experience?.projects?.length
        ? openDrawer.value = true
        : openDialog.value = true
}
</script>

<template>
    <div class="py-8 flex flex-col gap-4 border-b border-black border-opacity-10 last:border-b-0">
        <div class="flex justify-between items-start">
            <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">{{ experience?.company ?? '' }}</h3>
                <p class="text-gray-500 text-xs uppercase tracking-tight">{{ experience?.role ?? '' }}</p>
            </div>
            <span 
                v-if="experience?.start && experience?.end" 
                class="font-bold text-xs mt-[2px]"
            >{{ experience?.start }} - {{ experience?.end }}</span>
        </div>
        <p class="text-gray-500 text-sm my-2">{{ experience?.description }}</p>
        <div>
            <button @click="showMoreInfo" class="inline-flex gap-2 align-center text-xs font-bold border border-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                <Icon name="ph:book-open-bold" size="16"/>
                <span>Lees meer</span>
            </button>
        </div>
    </div>

    <AppExperienceDrawer 
        v-model="openDrawer" 
        :projects="experience?.projects ?? []"
    />
    <AppDialog 
        v-model="openDialog" 
        :experience="experience"
    />
</template>