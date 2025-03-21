import { z } from 'zod';

export const ImageSchema = z.object({
  url: z.string().url(),
});

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  publishedAt: z.string().refine(
    (val) => !isNaN(Date.parse(val)),
    { message: "Deve essere una data ISO 8601 valida" }
  ),
  content: z.object({
    html: z.string(),
  }),
  coverImage: ImageSchema.optional(),
});


export type GraphQLResponse =  {
  posts: Post[];
}

export type Image = z.infer<typeof ImageSchema>;
export type Post = z.infer<typeof PostSchema>;