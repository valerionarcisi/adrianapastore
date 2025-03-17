import { GraphQLClient } from 'graphql-request';
import { PostSchema } from './models';
import type { Post } from './models';

if (!import.meta.env.HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined');
}

const hygraphClient = new GraphQLClient(import.meta.env.HYGRAPH_ENDPOINT);

export const getBlogPosts = async (): Promise<Post[]> => {
  const query = `
    query BlogPosts {
      posts(orderBy: publishedAt_DESC) {
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
      }
    }
  `;

  const { posts } = await hygraphClient.request(query);
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