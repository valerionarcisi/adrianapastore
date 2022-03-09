import { gql } from "graphql-request";
import { graphcms } from "../index";
import { ResponseGetAllPostsAbstract } from "./models";

const query = gql`
 query GetAllPosts {
  posts(orderBy: createdAt_DESC) {
    id,
    title,
    slug,
    excerpt,
    coverImage {
      url,
      fileName,
    }
  }
}`;

export default function getAllPosts(): Promise<ResponseGetAllPostsAbstract> { return graphcms<ResponseGetAllPostsAbstract>(query) };
