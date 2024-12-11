import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const teas = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/teas" }),
    schema: ({image}) => z.object({
      posted: z.boolean().default(true),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      region: z.string(),
      variety: z.string(),
      yieldYear: z.string(),
      aging: z.string().optional(),
      pubDate: z.coerce.date(),
      item: z.string().optional(),
      price: z.number(),
      image: image(),
      imageAlt: z.string(),
      image1: image(),
      image1alt: z.string(),
      image2: image().optional(),
      image2alt: z.string().optional(),
      image3: image().optional(),
      image3alt: z.string().optional(),
      image4: image().optional(),
      image4alt: z.string().optional(),
      image5: image().optional(),
      image5alt: z.string().optional(),
      category: z.array(z.string()),
      tags: z.array(z.string())
    })
});

const library = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/library" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        subsubtitle: z.string().optional(),
        author: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        image: z.string().optional(),
        posted: z.boolean().optional(),
        category: z.array(z.string())
    })
})

const teatips = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/gonfucha-teatips" }),
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

const brewingtips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/brewingtips" }),
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

const gongfuchateatips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/gongfuchateatips" }),
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

const gongfuteapot = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/gongfuteapot" }),
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

const questionsandanswers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/questionsandanswers" }),
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

const teaandseasons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/teaandseasons" }),
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

export const collections = { teas, library, teatips, brewingtips, gongfuchateatips, gongfuteapot, questionsandanswers, teaandseasons };