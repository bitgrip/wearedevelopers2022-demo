// apollo-remote-state/client/src/operations/queries/getAllTodos.tsx
import { gql } from "@apollo/client";

export const getAllSitesQuery = gql`
  query GetAllSites {
    Space {
      id
      domain
    }
  }
`;
