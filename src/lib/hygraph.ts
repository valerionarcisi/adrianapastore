import { GraphQLClient } from 'graphql-request';

if (!import.meta.env.HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined');
}

const hygraphClient = new GraphQLClient(import.meta.env.HYGRAPH_ENDPOINT);

export const getBlogPosts = async () => {
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
  return posts;
};

export const getPost = async (slug: string) => {
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

  const { post } = await hygraphClient.request(query, { slug });
  return post;
};