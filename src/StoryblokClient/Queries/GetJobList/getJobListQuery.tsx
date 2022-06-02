import { gql } from "@apollo/client";

export const getJobListQuery = gql`
  query getJobList {
    JobItems {
      items {
        uuid
        name
        content {
          external_link {
            url
          }
          tag
        }
      }
    }
  }
`;
