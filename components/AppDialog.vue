<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps({
    experience: {
        type: Object,
        required: true
    }
})

const model = defineModel()
</script>

<template>
  <TransitionRoot as="template" :show="model">
    <Dialog class="relative z-10" @close="model = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" class="text-base font-semibold text-gray-900">{{ experience?.company ?? '' }}</DialogTitle>
                <p class="text-gray-500 text-xs uppercase tracking-tight">{{ experience?.role ?? '' }}</p>
                <p class="text-gray-500 my-2">{{ experience?.about }}</p>
                </div>
              </div>
              <div class="px-4 py-3 flex justify-end sm:px-6">
                <button type="button" class="inline-flex gap-2 align-center text-xs font-bold border border-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out" @click="model = false" ref="cancelButtonRef">Close</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>