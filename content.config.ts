import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const projectTypeConfigSchema = z.object({
    label: z.string(),
    icon: z.string(),
})

const experienceProjectSchema = z.object({
    company: z.string(),
    name: z.string().optional(),
    role: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional(),
    description: z.string(),
    about: z.string().optional(),
    consultancy: z.boolean().optional(),
    // Legacy support for previous split field.
    projectType: z.enum(['consultancy', 'inHouse']).optional(),
    responsibilities: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
})

const experienceSchema = z.object({
    company: z.string(),
    role: z.string(),
    start: z.string().optional(),
    end: z.string().optional(),
    description: z.string(),
    about: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    projectTypes: z.object({
        consultancy: projectTypeConfigSchema.optional(),
        inHouse: projectTypeConfigSchema.optional(),
    }).optional(),
    // Legacy support for previous split config fields.
    projectTypeLabels: z.object({
        consultancy: z.string().optional(),
        inHouse: z.string().optional(),
    }).optional(),
    projectTypeIcons: z.object({
        consultancy: z.string().optional(),
        inHouse: z.string().optional(),
    }).optional(),
    projects: z.array(experienceProjectSchema).optional(),
})

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
                    meta: z.record(z.string(), z.string()),
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
                experience: z.array(experienceSchema),
            })
        }),
    }
})