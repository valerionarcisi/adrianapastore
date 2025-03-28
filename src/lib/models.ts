import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().nullable(),
  publishedAt: z.string().nullable(),
  content: z.object({
    html: z.string(),
  }),
  coverImage: z
    .object({
      url: z.string(),
    })
    .nullable(),
  tags: z.array(z.string(),).optional(),
});

export type Post = z.infer<typeof PostSchema>;

export interface GraphQLResponse {
  posts: Post[];
  post?: Post;
}