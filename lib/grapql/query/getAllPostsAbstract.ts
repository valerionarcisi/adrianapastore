import { gql } from "graphql-request";
import { graphcmq } from "../index";
import { ResponseGetAllPostsAbstract } from "./models";

const query = gql`
 query GetAllPostsAbstract {
  posts {
    id,
    title,
    slug,
    excerpt,
  }
}`;

export default function getAllPostsAbstract(): Promise<ResponseGetAllPostsAbstract> { return graphcmq<ResponseGetAllPostsAbstract>(query) };
