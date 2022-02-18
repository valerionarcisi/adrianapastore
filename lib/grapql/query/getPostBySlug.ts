import { gql } from "graphql-request";
import { graphcmq } from "../index";
import { ResponseGetPostBySlug } from "./models";

const query = gql`
query GetPost($slug: String!) {
  post(where: {slug: $slug}) {
    title,
    id,
    slug,
    excerpt,
    content {
      html
    }
    publishedAt
    coverImage {
      fileName
      url
      height
      width
    }
    seo {
      title
      description
    }
    author {
      name
      picture {
        height
        width
        url
      }
    }
  }
}
`;

export default function getPostBySlug(slug: string): Promise<ResponseGetPostBySlug> { return graphcmq<ResponseGetPostBySlug>(query, { slug }) };
