<script setup>
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
    const stem = route.path === '/' 
      ? 'pages/nl' 
      : `pages${route.path}`

    return queryCollection('pages')
      .where('stem', '==', stem)
      .first()
})
</script>

<template>
  <AppHeader />

  <main class="container mx-auto pt-14 flex flex-col gap-16">
    <div class="flex justify-between">
      <h1 class="text-5xl">
        FRONT-END DEVELOPER<br/>
        PASSION & <span class="font-medium underline italic">DRIVE.</span>
      </h1>
      <div class="flex flex-col justify-end">
        <div class="flex gap-4">
          <AppSocialButton 
            icon="ph:github-logo-bold" 
            url="https://github.com/PietVlem"
          />
          <AppSocialButton 
            icon="ph:linkedin-logo-bold" 
            url="https://www.linkedin.com/in/pieter-vleminckx-961663151/"
          />
        </div>
      </div>
    </div>

    <div v-if="data.bio" class="grid grid-cols-3 gap-16">
      <div class="flex flex-col gap-8">
        <span class="font-bold">{{ data?.bio?.name }}</span>
        <p class="text-gray-500 text-sm">{{ data?.bio?.bio }}</p>
        <AppDataTable :data="data?.bio?.meta"/>
        <a 
          href="mailto:pieter.vlem@gmail.com"
          class="flex gap-2 items-center justify-center border-2 border-black font-bold w-full p-2 uppercase text-xs hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        >
          <Icon name="ph:paper-plane-tilt-bold" size="18"/>
          <span class="inline-block leading-none">Send Message</span>
        </a>
      </div>
      <div class="col-span-2 flex flex-col gap-8">
        <div>
          <AppSubHeading :title="data?.educationTitle" />
          <AppEductionRow
            v-for="(education, index) in data?.education"
            :key="`eduction-${index}`"
            :degree="education.degree"
            :school="education.institution"
            :startYear="education.start"
            :endYear="education.end"
            :description="education.description"
          />
        </div>
        <div class="mb-20">
          <AppSubHeading :title="data?.experienceTitle" />
          <AppExperienceRow 
            v-for="(experience, index) in data?.experience"
            :key="`experience-${index}`"
            class="border-b border-black border-opacity-10 last:border-b-0"
            :company="experience.company"
            :position="experience.role"
            :startDate="experience.start"
            :endDate="experience.end"
            :description="experience.description"
            :technologies="['React', 'Angular', 'Vue.js']"
          />
        </div>
      </div>
    </div>
  </main>
</template>
