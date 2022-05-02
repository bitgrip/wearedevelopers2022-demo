// apollo-remote-state/client/src/operations/queries/getAllTodos.tsx
import { gql } from "@apollo/client";

export const getMainMenuQuery = gql`
  query getMainMenu($siteSegment: String!) {
    content {
      site(rootSegment: $siteSegment) {
        root {
          navigationPath {
            title
            segment
            link {
              id
            }
          }
          children {
            title
            segment
            link {
              id
            }
          }
        }
      }
    }
  }
`;
