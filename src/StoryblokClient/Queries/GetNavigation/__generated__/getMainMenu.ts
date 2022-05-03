/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMainMenu
// ====================================================

export interface getMainMenu_Space {
  __typename: "Space";
  id: number;
  domain: string;
}

export interface getMainMenu {
  Space: getMainMenu_Space | null;
}

export interface getMainMenuVariables {
  siteSegment: string;
}
