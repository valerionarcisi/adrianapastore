import { gql } from "graphql-request";
import { graphcms } from "../index";
import { ResponseGetAboutPage } from "./models";

const query = gql`
query GetAboutPage {
  pages(where: {slug: "about"}) {
    title,
    seo {
      title,
      description,
    }
    content {
      html
    }
  }
}
`;

export default function getAboutPage(): Promise<ResponseGetAboutPage> { return graphcms<ResponseGetAboutPage>(query) };
