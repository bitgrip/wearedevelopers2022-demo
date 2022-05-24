import { gql } from "@apollo/client";

export const getJobListQuery = gql`
  query getJobList {
    PageItems(with_tag: "joboffer") {
      items {
        uuid
        full_slug
        name
        tag_list
      }
    }
  }
`;
