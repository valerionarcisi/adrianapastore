import { GraphQLClient } from 'graphql-request';
import { PostSchema } from './models';
import type { Post, GraphQLResponse } from './models';

if (!import.meta.env.HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined');
}

const hygraphClient = new GraphQLClient(import.meta.env.HYGRAPH_ENDPOINT);

export const getBlogPosts = async (limit?: number): Promise<Post[]> => {
  const query = `
    query BlogPosts($limit: Int) {
      posts(orderBy: publishedAt_DESC, first: $limit) {
        id
        title
        slug
        excerpt
        publishedAt
        content {
          html
        }
        coverImage {
          url
        }
        tags
      }
    }
  `;

  const variables = limit ? { limit } : {};
  const { posts } = await hygraphClient.request<GraphQLResponse>(query, variables);
  return posts.map((post: unknown) => PostSchema.parse(post));
};

export const getPost = async (slug: string): Promise<Post | null> => {
  const query = `
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        excerpt
        publishedAt
        content {
          html
        }
        coverImage {
          url
        }
        tags
      }
    }
  `;

  try {
    const { post } = await hygraphClient.request(query, { slug });
    return post ? PostSchema.parse(post) : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};