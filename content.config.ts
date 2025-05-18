import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    bio: defineCollection({
        type: 'data',
        source: 'bio.json',
        schema: z.object({
            name: z.string(),
            bio: z.string(),
            meta: z.object({
                profession: z.string(),
                dateOfBirth: z.string(),
                education: z.string(),
                location: z.string(),
            }),
            email: z.string(),
        }),
    })
  }
})