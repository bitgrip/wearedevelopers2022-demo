import { gql } from "@apollo/client";

export const getHomeMenuItemQuery = gql`
  query getHomeMenuItem {
    PageItem(id: "home") {
      uuid
      full_slug
      name
      position
      parent_id
    }
  }
`;
