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

  <main class="container mx-auto pt-14 flex flex-col gap-8 md:gap-16 px-4 md:px-0">
    <div class="flex flex-col md:flex-row justify-between gap-4">
      <h1 class="text-2xl md:text-5xl">
        WEB DEVELOPER,<br/>
        MET EEN LIEFDE VOOR <span class="font-medium underline italic">FRONT-END</span>.
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
      <div class="col-span-full md:col-span-1 flex flex-col gap-4 md:gap-8">
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
      <div class="col-span-full md:col-span-2 flex flex-col gap-8">
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
            :experience="experience"
          />
        </div>
      </div>
    </div>
  </main>
</template>