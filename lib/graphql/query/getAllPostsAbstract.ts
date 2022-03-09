import { gql } from "graphql-request";
import { graphcms } from "../index";
import { ResponseGetAllPostsAbstract } from "./models";

const query = gql`
 query GetAllPostsAbstract {
  posts(orderBy: createdAt_DESC, last:5) {
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

export default function getAllPostsAbstract(): Promise<ResponseGetAllPostsAbstract> { return graphcms<ResponseGetAllPostsAbstract>(query) };
