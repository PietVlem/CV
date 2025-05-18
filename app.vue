<script setup>
import data from './data/experience.json';
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

    <div class="grid grid-cols-3 gap-16">
      <div class="flex flex-col gap-8">
        <span class="font-bold">Pieter Vleminckx</span>
        <p class="text-gray-500 text-sm">Front-end developer with a wealth of experience and a great passion in building new products and improving customer experience of digital products.</p>
        <AppDataTable />
        <a 
          href="mailto:pieter.vlem@gmail.com"
          class="block border-2 border-black font-bold w-full p-2 text-center uppercase text-xs hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        >Send Message</a>
      </div>
      <div class="col-span-2 flex flex-col gap-8">
        <div>
          <AppSubHeading title="Opleidingen" />
          <AppEductionRow 
            degree="Grafische en digitale media (batchlors degree) "
            school="Artevelde Hogeschool"
            :startYear="2015"
            :endYear="2019"
            description="I graduated with a Bachelor of Science in Computer Science from the University of Antwerp. During my studies, I gained a solid foundation in computer science principles, programming languages, and software development methodologies."
          />
        </div>
        <div class="mb-20">
          <AppSubHeading title="Ervaring" />
          <AppExperienceRow 
            v-for="experience in data"
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
