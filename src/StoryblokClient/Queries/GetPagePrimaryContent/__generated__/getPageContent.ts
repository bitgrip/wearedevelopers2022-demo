/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPageContent
// ====================================================

export interface getPageContent_Space {
  __typename: "Space";
  id: number;
  domain: string;
}

export interface getPageContent {
  Space: getPageContent_Space | null;
}

export interface getPageContentVariables {
  pagePath: string;
  placements: string[];
}
