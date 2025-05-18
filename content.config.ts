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
        }),
        experience: defineCollection({
            type: 'data',
            source: 'experience/**.json',
            schema: z.object({
                company: z.string(),
                role: z.string(),
                start: z.string(),
                end: z.string(),
                description: z.string(),
                responsibilities: z.array(z.string()),
                technologies: z.array(z.string()),
                projects: z.array(
                    z.object({
                        company: z.string(),
                        role: z.string(),
                        description: z.string(),
                        responsibilities: z.array(z.string()),
                        technologies: z.array(z.string())
                    })
                )
            })
        })
    }
})