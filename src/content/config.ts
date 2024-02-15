import { z, defineCollection } from "astro:content";
const teasCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      pubDate: z.date(),
      price: z.number(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      category: z.array(z.string()),
      tags: z.array(z.string())
    })
});

export const collections = {
  teas: teasCollection,
};