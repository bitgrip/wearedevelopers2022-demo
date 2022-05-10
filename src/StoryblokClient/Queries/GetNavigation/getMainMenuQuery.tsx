// apollo-remote-state/client/src/operations/queries/getAllTodos.tsx
import { gql } from "@apollo/client";

export const getMainMenuQuery = gql`
  query getMainMenu {
    PageItems(is_startpage: "true") {
      items {
        uuid
        full_slug
        name
        position
        parent_id
      }
    }
  }
`;
