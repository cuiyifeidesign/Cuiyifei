import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    year: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  works: worksCollection,
};
