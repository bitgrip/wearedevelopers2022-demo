// apollo-remote-state/client/src/operations/queries/getAllTodos.tsx
import { gql } from "@apollo/client";

export const getMainMenuQuery = gql`
  query getMainMenu($siteSegment: String!) {
    Space {
      id
      domain
    }
  }
`;
