<script setup>
const props = defineProps({
    experience: {
        type: Object,
        required: true
    }
})

const openDrawer = ref(false)
const openDialog = ref(false)
const selectedProjects = ref([])
const selectedProjectTypeLabel = ref('Projects')

const projectGroups = computed(() => {
    const allProjects = props.experience?.projects ?? []
    const groups = {
        consultancy: [],
        inHouse: []
    }

    allProjects.forEach((project) => {
        if (project?.consultancy === false) {
            groups.inHouse.push(project)
            return
        }

        if (project?.consultancy === true) {
            groups.consultancy.push(project)
            return
        }

        // Backward compatibility in case old data still uses projectType.
        if (project?.projectType === 'inHouse') {
            groups.inHouse.push(project)
            return
        }

        if (project?.projectType === 'consultancy') {
            groups.consultancy.push(project)
        }
    })

    return groups
})

const projectTypeButtons = computed(() => {
    const configuredTypes = props.experience?.projectTypes ?? {}
    const configuredLabels = props.experience?.projectTypeLabels ?? {}
    const configuredIcons = props.experience?.projectTypeIcons ?? {}

    const definitions = [
        {
            type: 'consultancy',
            label: configuredTypes.consultancy?.label ?? configuredLabels.consultancy ?? 'Consultancy jobs',
            icon: configuredTypes.consultancy?.icon ?? configuredIcons.consultancy ?? 'ph:briefcase-bold',
            projects: projectGroups.value.consultancy
        },
        {
            type: 'inHouse',
            label: configuredTypes.inHouse?.label ?? configuredLabels.inHouse ?? 'In-house projects',
            icon: configuredTypes.inHouse?.icon ?? configuredIcons.inHouse ?? 'ph:buildings-bold',
            projects: projectGroups.value.inHouse
        }
    ]

    return definitions.filter((definition) => definition.projects.length)
})

const showMoreInfo = () => {
    props.experience?.projects?.length
        ? openDrawer.value = true
        : openDialog.value = true
}

const openProjectsForType = ({ label, projects }) => {
    selectedProjects.value = projects
    selectedProjectTypeLabel.value = label
    openDrawer.value = true
}
</script>

<template>
    <div class="py-8 flex flex-col gap-4 border-b border-black border-opacity-10 last:border-b-0">
        <div class="flex justify-between items-start">
            <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold">{{ experience?.company ?? '' }}</h3>
                <p class="text-gray-500 text-xs uppercase tracking-tight">{{ experience?.role ?? '' }}</p>
            </div>
            <span v-if="experience?.start && experience?.end" class="font-bold text-xs mt-[2px]">{{ experience?.start }}
                - {{ experience?.end }}</span>
        </div>
        <p class="text-gray-500 text-sm mt-2">{{ experience?.description }}</p>
        <div v-if="experience?.technologies" class="flex flex-wrap gap-2 mt-2">
            <AppBadge v-for="technology in experience.technologies" :key="technology" :label="technology" />
        </div>
        <div v-if="projectTypeButtons.length || experience?.about" class="mt-2 flex flex-wrap gap-2">
            <button v-for="button in projectTypeButtons" :key="button.type" @click="openProjectsForType(button)"
                class="inline-flex gap-2 align-center text-xs font-bold border border-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                <Icon :name="button.icon" size="16" />
                <span>{{ button.label }}</span>
            </button>
            <button v-if="experience?.about && !projectTypeButtons.length" @click="showMoreInfo"
                class="inline-flex gap-2 align-center text-xs font-bold border border-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                <Icon name="ph:book-open-bold" size="16" />
                <span>Lees meer</span>
            </button>
        </div>
    </div>

    <AppExperienceDrawer v-model="openDrawer" :title="selectedProjectTypeLabel" :projects="selectedProjects" />
    <AppDialog v-model="openDialog" :experience="experience" />
</template>