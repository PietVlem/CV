import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'data',
            source: 'pages/**.json',
            schema: z.object({
                lang: z.string(),
                title: z.string(),
                bio: z.object({
                    name: z.string(),
                    bio: z.string(),
                    meta: z.map(z.string(), z.string()),
                    email: z.string(),
                }),
                educationTitle: z.string(),
                education: z.array(
                    z.object({
                        degree: z.string(),
                        institution: z.string(),
                        start: z.string(),
                        end: z.string(),
                        description: z.string(),
                    })
                ),
                experienceTitle: z.string(),
                experience: z.array(
                    z.object({
                        company: z.string(),
                        role: z.string(),
                        start: z.string(),
                        end: z.string(),
                        description: z.string(),
                        about: z.string(),
                        technologies: z.array(z.string()),
                        projects: z.array(
                            z.object({
                                company: z.string(),
                                name: z.string(),
                                role: z.string(),
                                description: z.string(),
                                responsibilities: z.array(z.string()),
                                technologies: z.array(z.string()),
                            })
                        )
                    })
                ),
            })
        }),
    }
})