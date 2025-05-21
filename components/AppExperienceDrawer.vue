<script setup>
import { 
  Dialog, 
  DialogPanel, 
  TransitionChild, 
  TransitionRoot 
} from '@headlessui/vue';

defineProps({
  projects: {
    type: Array,
  }
})

const model = defineModel()

const close = () => (model.value = false)
</script>

<template>
  <TransitionRoot as="template" :show="model">
    <Dialog class="relative z-10" @close="close">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-4xl">
                <div class="flex h-full flex-col overflow-y-scroll bg-white pt-6 pb-12 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-end">
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none" @click="close">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <Icon name="ph:x-bold" size="24" class="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <AppSubHeading title="Projects" />
                    <AppExperienceRow 
                      v-for="(project, index) in projects"
                      :key="`experience-${index}`"
                      class="border-b border-black border-opacity-10 last:border-b-0"
                      :company="project.company"
                      :position="project.role"
                      :startDate="project.start"
                      :endDate="project.end"
                      :description="project.description"
                      :technologies="['React', 'Angular', 'Vue.js']"
                      :projects="project.projects"
                    />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>