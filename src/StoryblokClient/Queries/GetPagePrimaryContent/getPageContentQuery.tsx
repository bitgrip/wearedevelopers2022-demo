import { gql } from "@apollo/client";

export const PagePrimaryContentPlacementNames: string[] = [
  "hero",
  "main",
  "placement1",
  "placement2",
  "placement3",
];

export const getPageContentQuery = gql`
  query getPageContent($pagePath: String!, $placements: [String!]!) {
    Space {
      id
      domain
    }
  }
`;
