import { gql } from "@apollo/client";

export const getPageContentQuery = gql`
  query getPageContent($slug: ID!) {
    PageItem(id: $slug) {
      uuid
      full_slug
      name
      content {
        body
        component
      }
    }
  }
`;
