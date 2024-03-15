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
      }),
      image2alt: z.string(),
      image3: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }),
      image3alt: z.string(),
      image4: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }),
      image4alt: z.string(),
      image5: image().refine((img) => img.width >= 900, {
        message: "Cover image must be at least 900 pixels wide!",
      }),
      image5alt: z.string(),
      category: z.array(z.string()),
      tags: z.array(z.string())
    })
});

export const collections = { teas };