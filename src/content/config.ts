import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        author: z.string().default('The Packaging Authority'),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const downloadsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        vendor: z.string(),
        description: z.string(),
        version: z.string(),
        releaseDate: z.coerce.date(),
        fileSize: z.string(),
        osRequirements: z.array(z.string()),
        downloadUrl: z.string(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'downloads': downloadsCollection,
};
