import { z, defineCollection } from "astro:content";

const teas = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      posted: z.boolean().default(true),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      region: z.string(),
      variety: z.string(),
      yieldYear: z.string(),
      aging: z.string().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      item: z.string().optional(),
      price: z.number(),
      image: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }),
      imageAlt: z.string(),
      image1: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }),
      image1alt: z.string(),
      image2: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }).optional(),
      image2alt: z.string().optional(),
      image3: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }).optional(),
      image3alt: z.string().optional(),
      image4: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }).optional(),
      image4alt: z.string().optional(),
      image5: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }).optional(),
      image5alt: z.string().optional(),
      category: z.array(z.string()),
      tags: z.array(z.string())
    })
});

const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    subsubtitle: z.string().optional(),
    author: z.string().optional(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    posted: z.boolean().optional(),
    category: z.array(z.string())
  })
})

const teatips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string().optional(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    posted: z.boolean().optional(),
    category: z.array(z.string())
  })
})

export const collections = { teas, library, teatips };