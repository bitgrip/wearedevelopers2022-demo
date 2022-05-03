/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllSites
// ====================================================

export interface GetAllSites_Space {
  __typename: "Space";
  id: number;
  domain: string;
}

export interface GetAllSites {
  Space: GetAllSites_Space | null;
}
