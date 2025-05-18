import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        bio: defineCollection({
            type: 'data',
            source: 'bio.json',
            schema: z.object({
                name: z.string(),
                bio: z.string(),
                meta: z.map(z.string(), z.string()),
                email: z.string(),
            }),
        })
    }
})